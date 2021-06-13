import { EIP712Domain, EIP712SignMessage, EncodedOrder, OrderForm } from "./domain"
import { createTypeData, getAccount, signTypedData } from "../sign"
import { client, NFTManager, ExchageV2Core, web3 } from "../script"
import { ethUtil } from "ethereumjs-util"
import { Contract }  from "web3-eth-contract"
import abiContract from "../ExchangeV2Core.json";

import abiExchange from "./ExchangeV2Core";






async function signOrderMessage(
	struct: any,
	types: any,
	structType: string,
	domain: EIP712Domain,
	account: string
) {
	const data = createTypeData(
		domain,
		structType,
		struct,
		types,
	)
	console.log("signing", data)
	return signTypedData(account, data)
}

async function prepareOrderMessage(form: Omit<OrderForm, "signature">): Promise<EncodedOrder> {
	const res = await client.post<EncodedOrder>("/protocol/v0.1/ethereum/order/encoder/order", form)
	return res.data
}

function createSaleOrder(
	maker: string, contract: string, tokenId: string, price: string,
): Omit<OrderForm, "signature"> {
	return {
		type: "RARIBLE_V2",
		maker: maker,
		make: {
			"assetType": {
				"assetClass": "ERC721",
				"contract": contract,
				"tokenId": tokenId,
			},
			"value": "1",
		},

		take: {
			"assetType": {
				"assetClass": "ETH",
			},
			"value": price,
		},

		data: {
			"dataType": "RARIBLE_V2_DATA_V1",
			"payouts": [],
			"originFees": [],
		},
		salt: `${random(1, 10000)}`,
	}
}
//{"token":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","tokenId":"609828","assetType":"ERC1155","owner":"0x4e2451e591675838c0fcd5e385676325ad1828b4","salt":{"value":"87434264871286626685831807485737719586503452835442404723232409146521483280700","type":"SALT"},"buyValue":0.03499998499985844,"buyToken":"0x0000000000000000000000000000000000000000","buyTokenId":"0","buyAssetType":"ETH","value":5,"signature":"0x1310f2edc210d7b5d671adc874de856baf83d13a425055009299474d6d4d4bd710ceaec7b3e6623bfb1674da0347f19b14ca7d6451605125f14a1e54f09592f11b","updateDate":"2021-06-12T23:38:41.723+00:00","importantUpdateDate":"2021-06-12T23:38:41.723+00:00","updateStateDate":"2021-06-12T23:38:41.723+00:00","contractVersion":2,"fee":250,"sold":0,"canceled":false,"pending":[{"@class":"com.rarible.domain.ItemBuy","owner":"0x4e2451e591675838c0fcd5e385676325ad1828b4","token":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","tokenId":"609828","value":5,"buyer":"0xd44d330ccb32197f5eb720b02f22aeac0331dbfc","price":6999996999971688,"buyToken":"0x0000000000000000000000000000000000000000","buyTokenId":"0","salt":{"value":"0","type":"SALT"},"date":"2021-06-12T23:24:14.087+00:00","type":"BUY"}],"sellPriceEth":0.006999996999971688,"balance":5,"id":"0x88550313283348919a2ea3ba4f56d1da513fa9ecb90e67257a1d81c2fde6fc88","active":true,"sellPrice":0.006999996999971688,"buyPrice":142.8572040822366885531488492246949,"buyStock":0.03499998499985844}
//{"status":500,"code":"UNKNOWN","message":"Invalid asset com.rarible.protocol.order.core.model.EthAssetType@34742fa5 to provide stock"}
function createContractBuyOrder(
	maker: string, contract: string, tokenId: string, price: string, taker: string, signature: string
): Omit<OrderForm, "signature"> {
	return {
		type: "RARIBLE_V2",
		maker: maker,
		make: {
			"assetType": {
			"assetClass": "ETH",
		      },
			"value": price,
		},
 		taker: taker,
		take: {
			"assetType": {
				"assetClass": "ERC721",
				"contract": contract,
				"tokenId": tokenId,
			},
			"value": "1",
		},



		data: {
			"dataType": "RARIBLE_V2_DATA_V1",
			"payouts": [],
			"originFees": [],
		},
		salt: `${random(1, 10000)}`,
                signature:signature,
	}
}


const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min

async function putOrder(order: OrderForm) {
	const res = await client.post("/protocol/v0.1/ethereum/order/orders", order)
	return res.data
}

async function signOrderForm(form: Omit<OrderForm, "signature">, singer: singer): Promise<OrderForm> {
	const encoded = await prepareOrderMessage(form)
	const msg = encoded.signMessage as EIP712SignMessage
	const signature = await signOrderMessage(
		msg.struct, msg.types, msg.structType, msg.domain, singer
	)
	return { ...form, signature }
}                                                                                              


async function pushNFTToNFTManager(maker, left, signedleft, right)
{
   let ab2 = abiExchange;
   let abi = abiContract;
   const exchangeContract = new web3.eth.Contract(abi, ExchageV2Core, { //
                                                  from: maker, // default from address
                                                  gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
                                                 });
    return exchangeContract.methods.matchOrders(left, signedleft, right, '0x').send();
}

export async function createAndSignOrder(contract: string, tokenId: string, price: string) {
	const maker = await getAccount()
	const sale = createSaleOrder(maker, contract, tokenId, 1);//signAndPut();
	const signedSale =  await signOrderForm(sale, maker);

//        const saleData = await putOrder(signedSale);

	const buy = createContractBuyOrder(NFTManager, contract, tokenId, 1, maker, "0x"); //signAndPut(); signedSale.signature
//	const signedBuy =  await signOrderForm(buy, maker);
//        const buyData = await putOrder(buy);

        await pushNFTToNFTManager(maker, signedSale, signedSale.signature, buy);

	const saleNFTManager = createSaleOrder(NFTManager, contract, tokenId, price);//signAndPut();
        saleNFTManager.signature = signedSale.signature;

//	const signedNFTManager =  await signOrderForm(saleNFTManager, maker);

	return putOrder(saleNFTManager);//signAndPut();
}
/*
			await expectThrow(
				testing.matchOrders(left, await getSignature(left, accounts[1]), right, "0x", { from: accounts[2], value: 199 })
			);
*/

async function signAndPut(notSignedOrderForm: Omit<OrderForm, "signature">) {
	const signed = await signOrderForm(notSignedOrderForm)
	return putOrder(signed)
}

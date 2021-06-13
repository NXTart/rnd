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


	const buy = createContractBuyOrder(NFTManager, contract, tokenId, 1, maker, "0x"); //signAndPut(); signedSale.signature

        await pushNFTToNFTManager(maker, signedSale, signedSale.signature, buy);

	const saleNFTManager = createSaleOrder(NFTManager, contract, tokenId, price);//signAndPut();
        saleNFTManager.signature = signedSale.signature;


	return putOrder(saleNFTManager);//signAndPut();
}

async function signAndPut(notSignedOrderForm: Omit<OrderForm, "signature">) {
	const signed = await signOrderForm(notSignedOrderForm)
	return putOrder(signed)
}

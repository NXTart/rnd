import 'bootstrap/dist/css/bootstrap.css';
import Web3 from "web3"
import 'regenerator-runtime/runtime'
import axios from "axios"
import { testSignAndCreateLazyMint } from "./lazy-mint/script"
import { createAndSignOrder } from "./order/script"

const provider = (window as any).ethereum
export const web3 = new Web3(provider)

export const client = axios.create({
	baseURL: "https://api-staging.rarible.com",
})

export const ipfsProvider = 'http://143.244.146.144:3000/';
//export const ipfsProvider = 'http://localhost:3000/';
export const getwayImage = "https://gateway.pinata.cloud";
export const  ExchageV2Core = '0xc778417E063141139Fce010982780140Aa0cD5Ab';
export const NFTManager = "0xc8848086E7e3eb34DEd2DE9273545064ac0EAa56";


// @ts-ignore
const contractInput: HTMLInputElement = document.getElementById("contract")
// @ts-ignore
const tokenIdInput: HTMLInputElement = document.getElementById("tokenId")
// @ts-ignore
const priceInput: HTMLInputElement = document.getElementById("price")

const ipfsHashInput: HTMLInputElement = document.getElementById("IpfsHash")
const pinSizeInput: HTMLInputElement = document.getElementById("PinSize")
const timestampInput: HTMLInputElement = document.getElementById("Timestamp")
const uriIpfsInput: HTMLInputElement = document.getElementById("uriIpfs")
const imageInput: HTMLInputElement = document.getElementById("image")

const metaIpfsHashInput: HTMLInputElement = document.getElementById("metaIpfsHash")
const metaPinSizeInput: HTMLInputElement = document.getElementById("metaPinSize")
const metaTimestampInput: HTMLInputElement = document.getElementById("metaTimestamp")



const loadedPictureImage: HTMLImageElement = document.getElementById("loadedPicture")



document.getElementById("connect")?.addEventListener("click", (e) => {
	e.preventDefault()
	provider.enable()
})

document.getElementById("createLazyMint")?.addEventListener("click", (e) => {
	e.preventDefault()
	testSignAndCreateLazyMint()
		.then(x => {
			console.log("SENT", x)
			// @ts-ignore
			contractInput.value = x.contract
			// @ts-ignore
			tokenIdInput.value = x.tokenId
		})
		.catch(err => console.error("ERROR", err))
})

document.getElementById("createOrder")?.addEventListener("click", (e) => {
	e.preventDefault()
	createAndSignOrder(contractInput.value, tokenIdInput.value, priceInput.value)
		.then(x => console.log("SENT", x))
		.catch(err => console.error("ERROR", err))
})

document.getElementById('ipfsupload').addEventListener("click", (e) => {
	e.preventDefault();                                
        const file = document.getElementById("fileUploaded").files[0];  // file from input

        let formData = new FormData();
        formData.append("image", file);
        axios.post(ipfsProvider + 'upload', formData, {
         headers: {
           'Content-Type': 'multipart/form-data'
           }
        }).then(response=>{
           const data = response.data;
           ipfsHashInput.value = data.IpfsHash;
           pinSizeInput.value = data.PinSize;
           timestampInput.value = data.Timestamp;
           uriIpfsInput.value = "/ipfs/" + data.IpfsHash;
           loadedPictureImage.src = getwayImage + uriIpfsInput.value;
           imageInput.value = "ipfs://ipfs/" + data.IpfsHash;

           console.log(response);
        });

})

const getMetaDataValue = function()
{
  return {
   "name": document.getElementById('name').value /* NFT Name - This must be a string */,
   "description": document.getElementById('description').value/* Description of the NFT - This must be a string */,
   "image": imageInput.value/*  IPFS Hash to our content, this must be prefixed with "ipfs://ipfs/{{ IPFS_HASH ))" - This must be a string */,
   "external_url": document.getElementById('external_url').value/* This is the link to Rarible which we currently don't have, we can fill this in shortly */,
   "animation_url": document.getElementById('animation_url').value/* IPFS Hash just as image field, but it allows every type of multimedia files. Like mp3, mp4 etc */,
   // the below section is not needed.
   "attributes": [
      {
         "key": document.getElementById('attributes_key').value/* Key name - This must be a string */,
         "trait_type": document.getElementById('attributes_trait_type').value/* Trait name - This must be a string */,
         "value": document.getElementById('attributes_value').value/* Key Value - This must be a string */
      }
    ]
  }
}

document.getElementById('ipfsmeta').addEventListener("click", (e) => {
	e.preventDefault();                                
	const data = JSON.stringify(getMetaDataValue());


        let formData = new FormData();
        formData.append("data", data);
        axios.post(ipfsProvider + 'setmetadata', formData, {
         headers: {
           'Content-Type': 'multipart/form-data'
           }
        }).then(response=>{
           const data = response.data;
           metaIpfsHashInput.value = data.IpfsHash;
           metaPinSizeInput.value = data.PinSize;
           metaTimestampInput.value = data.Timestamp;
           console.log(data);
        });

})






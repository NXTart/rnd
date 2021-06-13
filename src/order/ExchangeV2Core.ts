export const abiExchange = 
{
  "contractName": "ExchangeV2Core",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "hash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "maker",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "bytes4",
              "name": "assetClass",
              "type": "bytes4"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "indexed": false,
          "internalType": "struct LibAsset.AssetType",
          "name": "makeAssetType",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes4",
              "name": "assetClass",
              "type": "bytes4"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "indexed": false,
          "internalType": "struct LibAsset.AssetType",
          "name": "takeAssetType",
          "type": "tuple"
        }
      ],
      "name": "Cancel",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "leftHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "rightHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "leftMaker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "rightMaker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newLeftFill",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newRightFill",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "bytes4",
              "name": "assetClass",
              "type": "bytes4"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "indexed": false,
          "internalType": "struct LibAsset.AssetType",
          "name": "leftAsset",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes4",
              "name": "assetClass",
              "type": "bytes4"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "indexed": false,
          "internalType": "struct LibAsset.AssetType",
          "name": "rightAsset",
          "type": "tuple"
        }
      ],
      "name": "Match",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes4",
          "name": "assetType",
          "type": "bytes4"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "matcher",
          "type": "address"
        }
      ],
      "name": "MatcherChange",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes4",
          "name": "assetType",
          "type": "bytes4"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "proxy",
          "type": "address"
        }
      ],
      "name": "ProxyChange",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "bytes4",
                  "name": "assetClass",
                  "type": "bytes4"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "internalType": "struct LibAsset.AssetType",
              "name": "assetType",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct LibAsset.Asset",
          "name": "asset",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes4",
          "name": "transferDirection",
          "type": "bytes4"
        },
        {
          "indexed": false,
          "internalType": "bytes4",
          "name": "transferType",
          "type": "bytes4"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "fills",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "assetType",
          "type": "bytes4"
        },
        {
          "internalType": "address",
          "name": "matcher",
          "type": "address"
        }
      ],
      "name": "setAssetMatcher",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "assetType",
          "type": "bytes4"
        },
        {
          "internalType": "address",
          "name": "proxy",
          "type": "address"
        }
      ],
      "name": "setTransferProxy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "maker",
              "type": "address"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "bytes4",
                      "name": "assetClass",
                      "type": "bytes4"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct LibAsset.AssetType",
                  "name": "assetType",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "internalType": "struct LibAsset.Asset",
              "name": "makeAsset",
              "type": "tuple"
            },
            {
              "internalType": "address",
              "name": "taker",
              "type": "address"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "bytes4",
                      "name": "assetClass",
                      "type": "bytes4"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct LibAsset.AssetType",
                  "name": "assetType",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "internalType": "struct LibAsset.Asset",
              "name": "takeAsset",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "salt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "start",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "end",
              "type": "uint256"
            },
            {
              "internalType": "bytes4",
              "name": "dataType",
              "type": "bytes4"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "internalType": "struct LibOrder.Order",
          "name": "order",
          "type": "tuple"
        }
      ],
      "name": "cancel",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "maker",
              "type": "address"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "bytes4",
                      "name": "assetClass",
                      "type": "bytes4"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct LibAsset.AssetType",
                  "name": "assetType",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "internalType": "struct LibAsset.Asset",
              "name": "makeAsset",
              "type": "tuple"
            },
            {
              "internalType": "address",
              "name": "taker",
              "type": "address"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "bytes4",
                      "name": "assetClass",
                      "type": "bytes4"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct LibAsset.AssetType",
                  "name": "assetType",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "internalType": "struct LibAsset.Asset",
              "name": "takeAsset",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "salt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "start",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "end",
              "type": "uint256"
            },
            {
              "internalType": "bytes4",
              "name": "dataType",
              "type": "bytes4"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "internalType": "struct LibOrder.Order",
          "name": "orderLeft",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "signatureLeft",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "maker",
              "type": "address"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "bytes4",
                      "name": "assetClass",
                      "type": "bytes4"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct LibAsset.AssetType",
                  "name": "assetType",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "internalType": "struct LibAsset.Asset",
              "name": "makeAsset",
              "type": "tuple"
            },
            {
              "internalType": "address",
              "name": "taker",
              "type": "address"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "bytes4",
                      "name": "assetClass",
                      "type": "bytes4"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct LibAsset.AssetType",
                  "name": "assetType",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "internalType": "struct LibAsset.Asset",
              "name": "takeAsset",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "salt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "start",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "end",
              "type": "uint256"
            },
            {
              "internalType": "bytes4",
              "name": "dataType",
              "type": "bytes4"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "internalType": "struct LibOrder.Order",
          "name": "orderRight",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "signatureRight",
          "type": "bytes"
        }
      ],
      "name": "matchOrders",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.7.6+commit.7338295f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"hash\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"maker\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"bytes4\",\"name\":\"assetClass\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"indexed\":false,\"internalType\":\"struct LibAsset.AssetType\",\"name\":\"makeAssetType\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"bytes4\",\"name\":\"assetClass\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"indexed\":false,\"internalType\":\"struct LibAsset.AssetType\",\"name\":\"takeAssetType\",\"type\":\"tuple\"}],\"name\":\"Cancel\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"leftHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"rightHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"leftMaker\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"rightMaker\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newLeftFill\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newRightFill\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"bytes4\",\"name\":\"assetClass\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"indexed\":false,\"internalType\":\"struct LibAsset.AssetType\",\"name\":\"leftAsset\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"bytes4\",\"name\":\"assetClass\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"indexed\":false,\"internalType\":\"struct LibAsset.AssetType\",\"name\":\"rightAsset\",\"type\":\"tuple\"}],\"name\":\"Match\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"assetType\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"matcher\",\"type\":\"address\"}],\"name\":\"MatcherChange\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"assetType\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"proxy\",\"type\":\"address\"}],\"name\":\"ProxyChange\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"bytes4\",\"name\":\"assetClass\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"internalType\":\"struct LibAsset.AssetType\",\"name\":\"assetType\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct LibAsset.Asset\",\"name\":\"asset\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bytes4\",\"name\":\"transferDirection\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bytes4\",\"name\":\"transferType\",\"type\":\"bytes4\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"maker\",\"type\":\"address\"},{\"components\":[{\"components\":[{\"internalType\":\"bytes4\",\"name\":\"assetClass\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"internalType\":\"struct LibAsset.AssetType\",\"name\":\"assetType\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct LibAsset.Asset\",\"name\":\"makeAsset\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"taker\",\"type\":\"address\"},{\"components\":[{\"components\":[{\"internalType\":\"bytes4\",\"name\":\"assetClass\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"internalType\":\"struct LibAsset.AssetType\",\"name\":\"assetType\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct LibAsset.Asset\",\"name\":\"takeAsset\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"salt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"end\",\"type\":\"uint256\"},{\"internalType\":\"bytes4\",\"name\":\"dataType\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"internalType\":\"struct LibOrder.Order\",\"name\":\"order\",\"type\":\"tuple\"}],\"name\":\"cancel\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"fills\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"maker\",\"type\":\"address\"},{\"components\":[{\"components\":[{\"internalType\":\"bytes4\",\"name\":\"assetClass\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"internalType\":\"struct LibAsset.AssetType\",\"name\":\"assetType\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct LibAsset.Asset\",\"name\":\"makeAsset\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"taker\",\"type\":\"address\"},{\"components\":[{\"components\":[{\"internalType\":\"bytes4\",\"name\":\"assetClass\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"internalType\":\"struct LibAsset.AssetType\",\"name\":\"assetType\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct LibAsset.Asset\",\"name\":\"takeAsset\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"salt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"end\",\"type\":\"uint256\"},{\"internalType\":\"bytes4\",\"name\":\"dataType\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"internalType\":\"struct LibOrder.Order\",\"name\":\"orderLeft\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"signatureLeft\",\"type\":\"bytes\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"maker\",\"type\":\"address\"},{\"components\":[{\"components\":[{\"internalType\":\"bytes4\",\"name\":\"assetClass\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"internalType\":\"struct LibAsset.AssetType\",\"name\":\"assetType\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct LibAsset.Asset\",\"name\":\"makeAsset\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"taker\",\"type\":\"address\"},{\"components\":[{\"components\":[{\"internalType\":\"bytes4\",\"name\":\"assetClass\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"internalType\":\"struct LibAsset.AssetType\",\"name\":\"assetType\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct LibAsset.Asset\",\"name\":\"takeAsset\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"salt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"end\",\"type\":\"uint256\"},{\"internalType\":\"bytes4\",\"name\":\"dataType\",\"type\":\"bytes4\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"internalType\":\"struct LibOrder.Order\",\"name\":\"orderRight\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"signatureRight\",\"type\":\"bytes\"}],\"name\":\"matchOrders\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"assetType\",\"type\":\"bytes4\"},{\"internalType\":\"address\",\"name\":\"matcher\",\"type\":\"address\"}],\"name\":\"setAssetMatcher\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"assetType\",\"type\":\"bytes4\"},{\"internalType\":\"address\",\"name\":\"proxy\",\"type\":\"address\"}],\"name\":\"setTransferProxy\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/ExchangeV2Core.sol\":\"ExchangeV2Core\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/AssetMatcher.sol\":{\"keccak256\":\"0x30091c6bff4837898091bcc59829b6ce68750c26d49be01bba0e46ac8983880c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce20cbf4ffe6a02f219c8d876535e1aa68d34c82eb1c5aa0e31d81708721c2dd\",\"dweb:/ipfs/QmbioPEPgchvrnQnt4PdoQcHg8UHNVd6MU334719j1cTNf\"]},\"/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/ExchangeV2Core.sol\":{\"keccak256\":\"0x8f7f59120c1850ce2446d6ae54fbbf59fea4209c939efb014834615dbe573726\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://315ab7fadb7b4168da5514741b9177978186ba70440e3e40a5fc0cb4cdb6ea16\",\"dweb:/ipfs/QmXb9wGnJiDTbLVHR9KuKpPcWNdMRvTjmbXFmCWmRZ36DT\"]},\"/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/IAssetMatcher.sol\":{\"keccak256\":\"0x6c4459012ce46db960cfdcc5067c49392aa650e6d78e0702acc7ad9173b061b0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cf05f7d8655dea90b54c9ec8d24c1e0cd9205c6f9ab9d0ff98cce01ab3988a9e\",\"dweb:/ipfs/QmTKeDUTXYD98M6heQtHwEZUP9A48pFWgU5YzMSLEvDpRq\"]},\"/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/ITransferExecutor.sol\":{\"keccak256\":\"0x8644f44ae8898b21f4f5f375049ee4fe3ede4492c82f95566e0783756a40945c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://caaf9eac34af44b396775edcf49f437b2ae04e60b673f5ba21035912ac58c915\",\"dweb:/ipfs/QmY8reainoSg5BkJUTGsBmRrUCwmvsMa6umRHkvUpcTs2A\"]},\"/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/ITransferManager.sol\":{\"keccak256\":\"0xecd88847365d4e9d9fa8ee61bc7d2051ad0564e24d8ba703b84f95a5c0176fdf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fec41d913e31a3dab0ffd0d539d166c98a075d14d952b2bc10798980c26717e0\",\"dweb:/ipfs/QmaBpqJtY1VDSFWtBysKaXqRYuqz6od5SgiZW6V6rKGVJd\"]},\"/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/LibFill.sol\":{\"keccak256\":\"0xa7b1de38dfa58f2ddd084a29167b345b23a5cb27e0136799e133dabae0b7a54d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://440e0da9bfc0085a1b1e1cc9e5eeb690f390256648cdc15d208417734a2489d9\",\"dweb:/ipfs/QmWYo3FPVXF9AsYgiBrZ4nLymEftAgg34aFvg2XtEDCiHi\"]},\"/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/LibOrder.sol\":{\"keccak256\":\"0x55ba801c6df2a8170ef701bae700e51dd4c9b3c0bf5024951492d4bea0eb8776\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d4a032ad2eb1feed27293075d68a470d01e839217616b1f4b8718c1a7c7cfa2c\",\"dweb:/ipfs/QmNMH35bURwkbKMpbDTiqc9ghj9wVinNRcoCvE4vxJaEyK\"]},\"/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/OrderValidator.sol\":{\"keccak256\":\"0xfe3cf7b869408fc93858a37741906f94a218d76e055b187068e865eab7c49eb3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b809d3fde832e90c490aeecd0307afc34434e8974bf8eaf7600700bf97b19e10\",\"dweb:/ipfs/QmUSHNhFDYu8JroqQVSoVxBrzdS2UH2hcx9SLBeTHiA18y\"]},\"/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/TransferExecutor.sol\":{\"keccak256\":\"0xaa77424525105745e5c512537179c40b797a81f90ee0aa558e6ca72c7fc25c5d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6d50dcf4e210ead64e0c21c4ba65373fce18e90f438def28bd070f5f0b5518bb\",\"dweb:/ipfs/QmXByiCFnzxYUp19z5Pm3Jsv8b3Zb9K554DH2bt4G13dcx\"]},\"/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/interfaces/ERC1271.sol\":{\"keccak256\":\"0x8a7404b6c7546776465a12cb2895a777c2a33c6a07d331dced08641e5ebf4a56\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e208e6c13e72f2bf9ee11cb1721b2b4adb46a77b14e97a7a41d31eed574da8a\",\"dweb:/ipfs/QmSamgeACJkehs7VMwVD4AYuViZiFgafhC9rP9eByWX3mt\"]},\"/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/lib/LibMath.sol\":{\"keccak256\":\"0x479e01de1a609d836f73eecb1ba5d0a3d78fa791979e8e4f361a576a61b101ec\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2924c6587b528fdecd101443271472ddc497cc6f4d44d61f1b62620dbce03897\",\"dweb:/ipfs/QmW6udkwDbXuJT6Pdk2KA7y6NzTm8UMkvTFFL666rd3pSD\"]},\"/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/lib/LibTransfer.sol\":{\"keccak256\":\"0x01cf87ba2ef274b5fa9d75731912b5a81eb1a50a870bf975288c65596cad2c85\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b739d82f1a1f9936a6cc41559f406b44b2fa1a62c12195e905c85260b7b50505\",\"dweb:/ipfs/QmNWDoTA13yCb2gvrmNWwY71nVZzPAinR6418dsVzo1TDg\"]},\"@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol\":{\"keccak256\":\"0xb419e68addcb82ecda3ad3974b0d2db76435ce9b08435a04d5b119a0c5d45ea5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a85355cc4f2554f4a8d334336d66b48d616abf1d90ec3d6b602e825c6fe63f0c\",\"dweb:/ipfs/QmTJYtsKJjBy3ShAt4kEjvM6nfVS8ZAFQqE29fG16tUP8d\"]},\"@openzeppelin/contracts-upgradeable/cryptography/ECDSAUpgradeable.sol\":{\"keccak256\":\"0xe348c45df01e0705c50ede5063d77111a996722ffb83f0a22979338a32b06887\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://afd37f4b5b678753c3e4ac2f8b83f921a8fe0adb456600e4408ee8e26ccbb09c\",\"dweb:/ipfs/QmYfP67Yx8nQXFKBrWjhmG2htgbT5LRSymx7gVt4JRZ2j7\"]},\"@openzeppelin/contracts-upgradeable/drafts/EIP712Upgradeable.sol\":{\"keccak256\":\"0x6cd0bc8c149150614ca3d4a3d3d21f844a0ab3032625f34fcfcf1c2c8b351638\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://aee85054062c8bcc9fdbdfbc92a459e04b4b9437b04c98b820d0772c11aa7268\",\"dweb:/ipfs/QmQZLXFFGNh2qni7fJp9maYU1XoaP77sMBVY3MnFb2Cyed\"]},\"@openzeppelin/contracts-upgradeable/introspection/IERC165Upgradeable.sol\":{\"keccak256\":\"0x4784c3f8a520a739dd25d76f514833a653990902d0e21601aed45bda44c87524\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://359411cc44a4499f37d46562ef3f348db443f9a699138c1797264d20b14697b7\",\"dweb:/ipfs/QmUmeQNUwve4MFCc1ace6zMnstqa8S9SZe1nXG9THcpQ5v\"]},\"@openzeppelin/contracts-upgradeable/math/MathUpgradeable.sol\":{\"keccak256\":\"0x8bc67f00476dee73f70cf8218e72523033c279b601ea38d0b83c227ccddb639a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://99ce4786b70afd2663a8942194f95febdd9faca5f2f255630af0d2ebb65b6ebb\",\"dweb:/ipfs/QmfJgh8nRRvSzcew71iywegFwvm6aJHh2vRcXeaiaPGz9s\"]},\"@openzeppelin/contracts-upgradeable/math/SafeMathUpgradeable.sol\":{\"keccak256\":\"0x0dd1e9b19801e3e7d900fbf4182d81e1afd23ad7be39504e33df6bbcba91d724\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5e30d594df25d0651c2cd6f85d856e5fc9f3dbae68d017e1da33eb3c7e2f1ecc\",\"dweb:/ipfs/QmPgkV99jZr3Zs9ex8dJ5j22oX4wDuDtMCnXNy67bTwgAB\"]},\"@openzeppelin/contracts-upgradeable/proxy/Initializable.sol\":{\"keccak256\":\"0xd8e4eb08dcc1d1860fb347ba5ffd595242b9a1b66d49a47f2b4cb51c3f35017e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7dbc89479d30592e82442edc38053b380f611037a5e6ceafc7bf57a7aa1f0305\",\"dweb:/ipfs/QmcdYtt56WmjeYvsFjK69FnahnAriw88VzY3XRZwXkQKKN\"]},\"@openzeppelin/contracts-upgradeable/token/ERC1155/IERC1155Upgradeable.sol\":{\"keccak256\":\"0xcbc02d192c55298cf65e5695375c839eac979a597a0fbdc1635195c4d28ca5ac\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://45ee9cb5a548db9a3805b934f995770272583ef6c0abd31aeffb7bd1f4c2f696\",\"dweb:/ipfs/QmcHGENdTcAzU6NuaoJWgMDA2rH1JdCWJf2EXRnSE967Qw\"]},\"@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol\":{\"keccak256\":\"0xa1931c47a617014f858580db625aa0dcf343796f39acd4b5b51effc092a1f0a9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2cbeb499bad52667b96dd7df8e9b1f583e8c07afaba0018a75e5b7ff6e777173\",\"dweb:/ipfs/QmPLJnuhEcWnpmhMHKsiuVHVxMwb5k6idYyjajbrtZLz5B\"]},\"@openzeppelin/contracts-upgradeable/token/ERC721/IERC721Upgradeable.sol\":{\"keccak256\":\"0x3dab19bb4a63bcbda1ee153ca291694f92f9009fad28626126b15a8503b0e5ff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ecc8ae8f1f85e11b6f749e147ac298d1d66879f3bfe3d4518b919f7b6151a73b\",\"dweb:/ipfs/QmYXZfcnCd1N1AaxUTfNQjNHJXAAfVGvae6Bte1SfTCKEz\"]},\"@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol\":{\"keccak256\":\"0xfc5ea91fa9ceb1961023b2a6c978b902888c52b90847ac7813fe3b79524165f6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b81dcc816857a9d981386f6d8de49198420ee41cdc0ecade366ab412174d03\",\"dweb:/ipfs/QmV2vznMT6m9qo3pFMAWi3Nz3UDhwesgwFxeXe6Tod3v8A\"]},\"@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xbbf8a21b9a66c48d45ff771b8563c6df19ba451d63dfb8380a865c1e1f29d1a0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://062688aac76e27ab50157a9d645700cf92e3c0d51d3d860be1d2e1a0c04a87d0\",\"dweb:/ipfs/QmfXxppWAiSTeH8YNn2EtMPDgzrLeJ5rjRq8knEbje88mX\"]},\"@rarible/exchange-interfaces/contracts/IERC20TransferProxy.sol\":{\"keccak256\":\"0x5cc1d6300618f13724624bbdd1b4447d1f149dc7cc3b75497e03110f798d9547\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://330001e598d2648c07a4e4c0276ed4822a24533dd6f5ad288738d8bee3c86404\",\"dweb:/ipfs/QmddZvc39hJ9nm2jvnxbjjj8v95XWnn8G4CEzuFxzWCHH6\"]},\"@rarible/exchange-interfaces/contracts/INftTransferProxy.sol\":{\"keccak256\":\"0x43093ee21a43fb70eb06b5e886ea48308fa689765e370297de52d71d4f7ab5cf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7dd71504d010833b1c9b38c2489f85408750fa32a2752bd66ba97ace27ffffa6\",\"dweb:/ipfs/QmSfNDJQua2ErfXFj3ce1DGhdpBCQAXRW4RLnZmWJp4iNi\"]},\"@rarible/exchange-interfaces/contracts/ITransferProxy.sol\":{\"keccak256\":\"0xd9400959d0a108534601673e480a55c4e760e03211594e8123d9c19e5d3890ac\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5b35890f8173983e3ac230df020cc51d79e36c53a7691a122b932bf780c6a20a\",\"dweb:/ipfs/QmbNkWijJ9xK9b1TrFXgmVvMxoxs3j1Hev6XLt3P6UBSsR\"]},\"@rarible/lib-asset/contracts/LibAsset.sol\":{\"keccak256\":\"0xc1066d605bee73f3d8a3111b7f8abefd7673387bc784916525d2457b844a4cc8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://03c321ebe8f3a629e6e6d3650f11e09a83d803c9d2d40ccf1c0897068afed2e4\",\"dweb:/ipfs/QmdqTsst87KD2NKRzqdpw8QWsJo8mjgp4prozHUfexN1pc\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity 0.7.6;\npragma abicoder v2;\n\nimport \"./LibFill.sol\";\nimport \"./LibOrder.sol\";\nimport \"./OrderValidator.sol\";\nimport \"./AssetMatcher.sol\";\nimport \"./TransferExecutor.sol\";\nimport \"./ITransferManager.sol\";\nimport \"./lib/LibTransfer.sol\";\n\nabstract contract ExchangeV2Core is Initializable, OwnableUpgradeable, AssetMatcher, TransferExecutor, OrderValidator, ITransferManager {\n    using SafeMathUpgradeable for uint;\n    using LibTransfer for address;\n\n    uint256 private constant UINT256_MAX = 2 ** 256 - 1;\n\n    //state of the orders\n    mapping(bytes32 => uint) public fills;\n\n    //events\n    event Cancel(bytes32 hash, address maker, LibAsset.AssetType makeAssetType, LibAsset.AssetType takeAssetType);\n    event Match(bytes32 leftHash, bytes32 rightHash, address leftMaker, address rightMaker, uint newLeftFill, uint newRightFill, LibAsset.AssetType leftAsset, LibAsset.AssetType rightAsset);\n\n    function cancel(LibOrder.Order memory order) external {\n        require(_msgSender() == order.maker, \"not a maker\");\n        require(order.salt != 0, \"0 salt can't be used\");\n        bytes32 orderKeyHash = LibOrder.hashKey(order);\n        fills[orderKeyHash] = UINT256_MAX;\n        emit Cancel(orderKeyHash, order.maker, order.makeAsset.assetType, order.takeAsset.assetType);\n    }\n\n    function matchOrders(\n        LibOrder.Order memory orderLeft,\n        bytes memory signatureLeft,\n        LibOrder.Order memory orderRight,\n        bytes memory signatureRight\n    ) external payable {\n        validateFull(orderLeft, signatureLeft);\n        validateFull(orderRight, signatureRight);\n        if (orderLeft.taker != address(0)) {\n            require(orderRight.maker == orderLeft.taker, \"leftOrder.taker verification failed\");\n        }\n        if (orderRight.taker != address(0)) {\n            require(orderRight.taker == orderLeft.maker, \"rightOrder.taker verification failed\");\n        }\n        matchAndTransfer(orderLeft, orderRight);\n    }\n\n    function matchAndTransfer(LibOrder.Order memory orderLeft, LibOrder.Order memory orderRight) internal {\n        (LibAsset.AssetType memory makeMatch, LibAsset.AssetType memory takeMatch) = matchAssets(orderLeft, orderRight);\n        bytes32 leftOrderKeyHash = LibOrder.hashKey(orderLeft);\n        bytes32 rightOrderKeyHash = LibOrder.hashKey(orderRight);\n        uint leftOrderFill = getOrderFill(orderLeft, leftOrderKeyHash);\n        uint rightOrderFill = getOrderFill(orderRight, rightOrderKeyHash);\n        LibFill.FillResult memory newFill = LibFill.fillOrder(orderLeft, orderRight, leftOrderFill, rightOrderFill);\n        require(newFill.takeValue > 0, \"nothing to fill\");\n\n        if (orderLeft.salt != 0) {\n            fills[leftOrderKeyHash] = leftOrderFill + newFill.takeValue;\n        }\n        if (orderRight.salt != 0) {\n            fills[rightOrderKeyHash] = rightOrderFill + newFill.makeValue;\n        }\n\n        (uint totalMakeValue, uint totalTakeValue) = doTransfers(makeMatch, takeMatch, newFill, orderLeft, orderRight);\n        if (makeMatch.assetClass == LibAsset.ETH_ASSET_CLASS) {\n            require(takeMatch.assetClass != LibAsset.ETH_ASSET_CLASS);\n            require(msg.value >= totalMakeValue, \"not enough eth\");\n            if (msg.value > totalMakeValue) {\n                address(msg.sender).transferEth(msg.value - totalMakeValue);\n            }\n        } else if (takeMatch.assetClass == LibAsset.ETH_ASSET_CLASS) {\n            require(msg.value >= totalTakeValue, \"not enough eth\");\n            if (msg.value > totalTakeValue) {\n                address(msg.sender).transferEth(msg.value - totalTakeValue);\n            }\n        }\n        emit Match(leftOrderKeyHash, rightOrderKeyHash, orderLeft.maker, orderRight.maker, newFill.takeValue, newFill.makeValue, makeMatch, takeMatch);\n    }\n\n    function getOrderFill(LibOrder.Order memory order, bytes32 hash) internal view returns (uint fill) {\n        if (order.salt == 0) {\n            fill = 0;\n        } else {\n            fill = fills[hash];\n        }\n    }\n\n    function matchAssets(LibOrder.Order memory orderLeft, LibOrder.Order memory orderRight) internal view returns (LibAsset.AssetType memory makeMatch, LibAsset.AssetType memory takeMatch) {\n        makeMatch = matchAssets(orderLeft.makeAsset.assetType, orderRight.takeAsset.assetType);\n        require(makeMatch.assetClass != 0, \"assets don't match\");\n        takeMatch = matchAssets(orderLeft.takeAsset.assetType, orderRight.makeAsset.assetType);\n        require(takeMatch.assetClass != 0, \"assets don't match\");\n    }\n\n    function validateFull(LibOrder.Order memory order, bytes memory signature) internal view {\n        LibOrder.validate(order);\n        validate(order, signature);\n    }\n\n    uint256[49] private __gap;\n}\n",
  "sourcePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/ExchangeV2Core.sol",
  "ast": {
    "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/ExchangeV2Core.sol",
    "exportedSymbols": {
      "AddressUpgradeable": [
        4491
      ],
      "AssetMatcher": [
        338
      ],
      "ContextUpgradeable": [
        4536
      ],
      "ECDSAUpgradeable": [
        3265
      ],
      "EIP712Upgradeable": [
        3425
      ],
      "ERC1271": [
        2771
      ],
      "ExchangeV2Core": [
        862
      ],
      "IAssetMatcher": [
        876
      ],
      "IERC1155Upgradeable": [
        4053
      ],
      "IERC165Upgradeable": [
        3437
      ],
      "IERC20TransferProxy": [
        4552
      ],
      "IERC20Upgradeable": [
        4131
      ],
      "IERC721Upgradeable": [
        4247
      ],
      "INftTransferProxy": [
        4584
      ],
      "ITransferExecutor": [
        906
      ],
      "ITransferManager": [
        980
      ],
      "ITransferProxy": [
        4598
      ],
      "Initializable": [
        3931
      ],
      "LibAsset": [
        4695
      ],
      "LibFill": [
        1201
      ],
      "LibMath": [
        2993
      ],
      "LibOrder": [
        1372
      ],
      "LibTransfer": [
        3018
      ],
      "MathUpgradeable": [
        3510
      ],
      "OrderValidator": [
        1665
      ],
      "OwnableUpgradeable": [
        3149
      ],
      "SafeMathUpgradeable": [
        3865
      ],
      "TransferExecutor": [
        2758
      ]
    },
    "id": 863,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 387,
        "literals": [
          "solidity",
          "0.7",
          ".6"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:22:2"
      },
      {
        "id": 388,
        "literals": [
          "abicoder",
          "v2"
        ],
        "nodeType": "PragmaDirective",
        "src": "56:19:2"
      },
      {
        "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/LibFill.sol",
        "file": "./LibFill.sol",
        "id": 389,
        "nodeType": "ImportDirective",
        "scope": 863,
        "sourceUnit": 1202,
        "src": "77:23:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/LibOrder.sol",
        "file": "./LibOrder.sol",
        "id": 390,
        "nodeType": "ImportDirective",
        "scope": 863,
        "sourceUnit": 1373,
        "src": "101:24:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/OrderValidator.sol",
        "file": "./OrderValidator.sol",
        "id": 391,
        "nodeType": "ImportDirective",
        "scope": 863,
        "sourceUnit": 1666,
        "src": "126:30:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/AssetMatcher.sol",
        "file": "./AssetMatcher.sol",
        "id": 392,
        "nodeType": "ImportDirective",
        "scope": 863,
        "sourceUnit": 339,
        "src": "157:28:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/TransferExecutor.sol",
        "file": "./TransferExecutor.sol",
        "id": 393,
        "nodeType": "ImportDirective",
        "scope": 863,
        "sourceUnit": 2759,
        "src": "186:32:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/ITransferManager.sol",
        "file": "./ITransferManager.sol",
        "id": 394,
        "nodeType": "ImportDirective",
        "scope": 863,
        "sourceUnit": 981,
        "src": "219:32:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/lib/LibTransfer.sol",
        "file": "./lib/LibTransfer.sol",
        "id": 395,
        "nodeType": "ImportDirective",
        "scope": 863,
        "sourceUnit": 3019,
        "src": "252:31:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 396,
              "name": "Initializable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3931,
              "src": "321:13:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Initializable_$3931",
                "typeString": "contract Initializable"
              }
            },
            "id": 397,
            "nodeType": "InheritanceSpecifier",
            "src": "321:13:2"
          },
          {
            "baseName": {
              "id": 398,
              "name": "OwnableUpgradeable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3149,
              "src": "336:18:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_OwnableUpgradeable_$3149",
                "typeString": "contract OwnableUpgradeable"
              }
            },
            "id": 399,
            "nodeType": "InheritanceSpecifier",
            "src": "336:18:2"
          },
          {
            "baseName": {
              "id": 400,
              "name": "AssetMatcher",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 338,
              "src": "356:12:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AssetMatcher_$338",
                "typeString": "contract AssetMatcher"
              }
            },
            "id": 401,
            "nodeType": "InheritanceSpecifier",
            "src": "356:12:2"
          },
          {
            "baseName": {
              "id": 402,
              "name": "TransferExecutor",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2758,
              "src": "370:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TransferExecutor_$2758",
                "typeString": "contract TransferExecutor"
              }
            },
            "id": 403,
            "nodeType": "InheritanceSpecifier",
            "src": "370:16:2"
          },
          {
            "baseName": {
              "id": 404,
              "name": "OrderValidator",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1665,
              "src": "388:14:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_OrderValidator_$1665",
                "typeString": "contract OrderValidator"
              }
            },
            "id": 405,
            "nodeType": "InheritanceSpecifier",
            "src": "388:14:2"
          },
          {
            "baseName": {
              "id": 406,
              "name": "ITransferManager",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 980,
              "src": "404:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ITransferManager_$980",
                "typeString": "contract ITransferManager"
              }
            },
            "id": 407,
            "nodeType": "InheritanceSpecifier",
            "src": "404:16:2"
          }
        ],
        "contractDependencies": [
          338,
          906,
          980,
          1665,
          2758,
          3149,
          3425,
          3931,
          4536
        ],
        "contractKind": "contract",
        "fullyImplemented": false,
        "id": 862,
        "linearizedBaseContracts": [
          862,
          980,
          1665,
          3425,
          2758,
          906,
          338,
          3149,
          4536,
          3931
        ],
        "name": "ExchangeV2Core",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 410,
            "libraryName": {
              "id": 408,
              "name": "SafeMathUpgradeable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3865,
              "src": "433:19:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMathUpgradeable_$3865",
                "typeString": "library SafeMathUpgradeable"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "427:35:2",
            "typeName": {
              "id": 409,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "457:4:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 413,
            "libraryName": {
              "id": 411,
              "name": "LibTransfer",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3018,
              "src": "473:11:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LibTransfer_$3018",
                "typeString": "library LibTransfer"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "467:30:2",
            "typeName": {
              "id": 412,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "489:7:2",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            }
          },
          {
            "constant": true,
            "id": 420,
            "mutability": "constant",
            "name": "UINT256_MAX",
            "nodeType": "VariableDeclaration",
            "scope": 862,
            "src": "503:51:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 414,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "503:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...9935"
              },
              "id": 419,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "commonType": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                },
                "id": 417,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "hexValue": "32",
                  "id": 415,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "542:1:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_2_by_1",
                    "typeString": "int_const 2"
                  },
                  "value": "2"
                },
                "nodeType": "BinaryOperation",
                "operator": "**",
                "rightExpression": {
                  "hexValue": "323536",
                  "id": 416,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "547:3:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_256_by_1",
                    "typeString": "int_const 256"
                  },
                  "value": "256"
                },
                "src": "542:8:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "-",
              "rightExpression": {
                "hexValue": "31",
                "id": 418,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "553:1:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "src": "542:12:2",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...9935"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "functionSelector": "20158c44",
            "id": 424,
            "mutability": "mutable",
            "name": "fills",
            "nodeType": "VariableDeclaration",
            "scope": 862,
            "src": "587:37:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
              "typeString": "mapping(bytes32 => uint256)"
            },
            "typeName": {
              "id": 423,
              "keyType": {
                "id": 421,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "595:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "587:24:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                "typeString": "mapping(bytes32 => uint256)"
              },
              "valueType": {
                "id": 422,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "606:4:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "anonymous": false,
            "id": 434,
            "name": "Cancel",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 426,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "hash",
                  "nodeType": "VariableDeclaration",
                  "scope": 434,
                  "src": "657:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 425,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "657:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 428,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maker",
                  "nodeType": "VariableDeclaration",
                  "scope": 434,
                  "src": "671:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 427,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "671:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 430,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "makeAssetType",
                  "nodeType": "VariableDeclaration",
                  "scope": 434,
                  "src": "686:32:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                    "typeString": "struct LibAsset.AssetType"
                  },
                  "typeName": {
                    "id": 429,
                    "name": "LibAsset.AssetType",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 4647,
                    "src": "686:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AssetType_$4647_storage_ptr",
                      "typeString": "struct LibAsset.AssetType"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 432,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "takeAssetType",
                  "nodeType": "VariableDeclaration",
                  "scope": 434,
                  "src": "720:32:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                    "typeString": "struct LibAsset.AssetType"
                  },
                  "typeName": {
                    "id": 431,
                    "name": "LibAsset.AssetType",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 4647,
                    "src": "720:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AssetType_$4647_storage_ptr",
                      "typeString": "struct LibAsset.AssetType"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "656:97:2"
            },
            "src": "644:110:2"
          },
          {
            "anonymous": false,
            "id": 452,
            "name": "Match",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 451,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 436,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "leftHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "771:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 435,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "771:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 438,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "rightHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "789:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 437,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "789:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 440,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "leftMaker",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "808:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 439,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 442,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "rightMaker",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "827:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 441,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 444,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newLeftFill",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "847:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 443,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "847:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 446,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newRightFill",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "865:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 445,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "865:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 448,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "leftAsset",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "884:28:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                    "typeString": "struct LibAsset.AssetType"
                  },
                  "typeName": {
                    "id": 447,
                    "name": "LibAsset.AssetType",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 4647,
                    "src": "884:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AssetType_$4647_storage_ptr",
                      "typeString": "struct LibAsset.AssetType"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 450,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "rightAsset",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "914:29:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                    "typeString": "struct LibAsset.AssetType"
                  },
                  "typeName": {
                    "id": 449,
                    "name": "LibAsset.AssetType",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 4647,
                    "src": "914:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AssetType_$4647_storage_ptr",
                      "typeString": "struct LibAsset.AssetType"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "770:174:2"
            },
            "src": "759:186:2"
          },
          {
            "body": {
              "id": 499,
              "nodeType": "Block",
              "src": "1005:327:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 462,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 458,
                            "name": "_msgSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4520,
                            "src": "1023:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                              "typeString": "function () view returns (address payable)"
                            }
                          },
                          "id": 459,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1023:12:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "id": 460,
                            "name": "order",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 454,
                            "src": "1039:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                              "typeString": "struct LibOrder.Order memory"
                            }
                          },
                          "id": 461,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "maker",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1215,
                          "src": "1039:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1023:27:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6e6f742061206d616b6572",
                        "id": 463,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1052:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_fd4c9442ac3849165940560d9b5b7d5dbb57d9aa9db87ab293290bd9c49a184e",
                          "typeString": "literal_string \"not a maker\""
                        },
                        "value": "not a maker"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_fd4c9442ac3849165940560d9b5b7d5dbb57d9aa9db87ab293290bd9c49a184e",
                          "typeString": "literal_string \"not a maker\""
                        }
                      ],
                      "id": 457,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1015:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 464,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1015:51:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 465,
                  "nodeType": "ExpressionStatement",
                  "src": "1015:51:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 470,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 467,
                            "name": "order",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 454,
                            "src": "1084:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                              "typeString": "struct LibOrder.Order memory"
                            }
                          },
                          "id": 468,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "salt",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1223,
                          "src": "1084:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 469,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1098:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1084:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "302073616c742063616e27742062652075736564",
                        "id": 471,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1101:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2a54609e2a39cfed033292f045a5e18f320567a8c17fea6363660379c0b2b703",
                          "typeString": "literal_string \"0 salt can't be used\""
                        },
                        "value": "0 salt can't be used"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2a54609e2a39cfed033292f045a5e18f320567a8c17fea6363660379c0b2b703",
                          "typeString": "literal_string \"0 salt can't be used\""
                        }
                      ],
                      "id": 466,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1076:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 472,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1076:48:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 473,
                  "nodeType": "ExpressionStatement",
                  "src": "1076:48:2"
                },
                {
                  "assignments": [
                    475
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 475,
                      "mutability": "mutable",
                      "name": "orderKeyHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 499,
                      "src": "1134:20:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 474,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1134:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 480,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 478,
                        "name": "order",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 454,
                        "src": "1174:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      ],
                      "expression": {
                        "id": 476,
                        "name": "LibOrder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1372,
                        "src": "1157:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_LibOrder_$1372_$",
                          "typeString": "type(library LibOrder)"
                        }
                      },
                      "id": 477,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "hashKey",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1296,
                      "src": "1157:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_Order_$1232_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (struct LibOrder.Order memory) pure returns (bytes32)"
                      }
                    },
                    "id": 479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1157:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1134:46:2"
                },
                {
                  "expression": {
                    "id": 485,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 481,
                        "name": "fills",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 424,
                        "src": "1190:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 483,
                      "indexExpression": {
                        "id": 482,
                        "name": "orderKeyHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 475,
                        "src": "1196:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1190:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 484,
                      "name": "UINT256_MAX",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 420,
                      "src": "1212:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1190:33:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 486,
                  "nodeType": "ExpressionStatement",
                  "src": "1190:33:2"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 488,
                        "name": "orderKeyHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 475,
                        "src": "1245:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "expression": {
                          "id": 489,
                          "name": "order",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 454,
                          "src": "1259:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                            "typeString": "struct LibOrder.Order memory"
                          }
                        },
                        "id": 490,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "maker",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1215,
                        "src": "1259:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "expression": {
                            "id": 491,
                            "name": "order",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 454,
                            "src": "1272:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                              "typeString": "struct LibOrder.Order memory"
                            }
                          },
                          "id": 492,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "makeAsset",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1217,
                          "src": "1272:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Asset_$4652_memory_ptr",
                            "typeString": "struct LibAsset.Asset memory"
                          }
                        },
                        "id": 493,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "assetType",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4649,
                        "src": "1272:25:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                          "typeString": "struct LibAsset.AssetType memory"
                        }
                      },
                      {
                        "expression": {
                          "expression": {
                            "id": 494,
                            "name": "order",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 454,
                            "src": "1299:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                              "typeString": "struct LibOrder.Order memory"
                            }
                          },
                          "id": 495,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "takeAsset",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1221,
                          "src": "1299:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Asset_$4652_memory_ptr",
                            "typeString": "struct LibAsset.Asset memory"
                          }
                        },
                        "id": 496,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "assetType",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4649,
                        "src": "1299:25:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                          "typeString": "struct LibAsset.AssetType memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                          "typeString": "struct LibAsset.AssetType memory"
                        },
                        {
                          "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                          "typeString": "struct LibAsset.AssetType memory"
                        }
                      ],
                      "id": 487,
                      "name": "Cancel",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 434,
                      "src": "1238:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_struct$_AssetType_$4647_memory_ptr_$_t_struct$_AssetType_$4647_memory_ptr_$returns$__$",
                        "typeString": "function (bytes32,address,struct LibAsset.AssetType memory,struct LibAsset.AssetType memory)"
                      }
                    },
                    "id": 497,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1238:87:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 498,
                  "nodeType": "EmitStatement",
                  "src": "1233:92:2"
                }
              ]
            },
            "functionSelector": "e2864fe3",
            "id": 500,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cancel",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 454,
                  "mutability": "mutable",
                  "name": "order",
                  "nodeType": "VariableDeclaration",
                  "scope": 500,
                  "src": "967:27:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                    "typeString": "struct LibOrder.Order"
                  },
                  "typeName": {
                    "id": 453,
                    "name": "LibOrder.Order",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1232,
                    "src": "967:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$1232_storage_ptr",
                      "typeString": "struct LibOrder.Order"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "966:29:2"
            },
            "returnParameters": {
              "id": 456,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1005:0:2"
            },
            "scope": 862,
            "src": "951:381:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 562,
              "nodeType": "Block",
              "src": "1538:460:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 512,
                        "name": "orderLeft",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 502,
                        "src": "1561:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      {
                        "id": 513,
                        "name": "signatureLeft",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 504,
                        "src": "1572:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 511,
                      "name": "validateFull",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 857,
                      "src": "1548:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Order_$1232_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (struct LibOrder.Order memory,bytes memory) view"
                      }
                    },
                    "id": 514,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1548:38:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 515,
                  "nodeType": "ExpressionStatement",
                  "src": "1548:38:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 517,
                        "name": "orderRight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 506,
                        "src": "1609:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      {
                        "id": 518,
                        "name": "signatureRight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 508,
                        "src": "1621:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 516,
                      "name": "validateFull",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 857,
                      "src": "1596:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Order_$1232_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (struct LibOrder.Order memory,bytes memory) view"
                      }
                    },
                    "id": 519,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1596:40:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 520,
                  "nodeType": "ExpressionStatement",
                  "src": "1596:40:2"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 527,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 521,
                        "name": "orderLeft",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 502,
                        "src": "1650:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      "id": 522,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "taker",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1219,
                      "src": "1650:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 525,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1677:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 524,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1669:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 523,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1669:7:2",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 526,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1669:10:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1650:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 538,
                  "nodeType": "IfStatement",
                  "src": "1646:143:2",
                  "trueBody": {
                    "id": 537,
                    "nodeType": "Block",
                    "src": "1681:108:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 533,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "id": 529,
                                  "name": "orderRight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 506,
                                  "src": "1703:10:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                    "typeString": "struct LibOrder.Order memory"
                                  }
                                },
                                "id": 530,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "maker",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 1215,
                                "src": "1703:16:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "expression": {
                                  "id": 531,
                                  "name": "orderLeft",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 502,
                                  "src": "1723:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                    "typeString": "struct LibOrder.Order memory"
                                  }
                                },
                                "id": 532,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "taker",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 1219,
                                "src": "1723:15:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "1703:35:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "hexValue": "6c6566744f726465722e74616b657220766572696669636174696f6e206661696c6564",
                              "id": 534,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1740:37:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e2988d5921d0b0b980c95629752e1ae33544ef2a29d168957ce2afee9edae127",
                                "typeString": "literal_string \"leftOrder.taker verification failed\""
                              },
                              "value": "leftOrder.taker verification failed"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_e2988d5921d0b0b980c95629752e1ae33544ef2a29d168957ce2afee9edae127",
                                "typeString": "literal_string \"leftOrder.taker verification failed\""
                              }
                            ],
                            "id": 528,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              4294967278,
                              4294967278
                            ],
                            "referencedDeclaration": 4294967278,
                            "src": "1695:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 535,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1695:83:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 536,
                        "nodeType": "ExpressionStatement",
                        "src": "1695:83:2"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 539,
                        "name": "orderRight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 506,
                        "src": "1802:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      "id": 540,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "taker",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1219,
                      "src": "1802:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 543,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1830:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 542,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1822:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 541,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1822:7:2",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 544,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1822:10:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1802:30:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 556,
                  "nodeType": "IfStatement",
                  "src": "1798:145:2",
                  "trueBody": {
                    "id": 555,
                    "nodeType": "Block",
                    "src": "1834:109:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 551,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "id": 547,
                                  "name": "orderRight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 506,
                                  "src": "1856:10:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                    "typeString": "struct LibOrder.Order memory"
                                  }
                                },
                                "id": 548,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "taker",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 1219,
                                "src": "1856:16:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "expression": {
                                  "id": 549,
                                  "name": "orderLeft",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 502,
                                  "src": "1876:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                    "typeString": "struct LibOrder.Order memory"
                                  }
                                },
                                "id": 550,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "maker",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 1215,
                                "src": "1876:15:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "1856:35:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "hexValue": "72696768744f726465722e74616b657220766572696669636174696f6e206661696c6564",
                              "id": 552,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1893:38:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_653ab491ff02a6248b97a43613283e04cb49bbcd2579a02dfca519158a7f6d7c",
                                "typeString": "literal_string \"rightOrder.taker verification failed\""
                              },
                              "value": "rightOrder.taker verification failed"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_653ab491ff02a6248b97a43613283e04cb49bbcd2579a02dfca519158a7f6d7c",
                                "typeString": "literal_string \"rightOrder.taker verification failed\""
                              }
                            ],
                            "id": 546,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              4294967278,
                              4294967278
                            ],
                            "referencedDeclaration": 4294967278,
                            "src": "1848:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 553,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1848:84:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 554,
                        "nodeType": "ExpressionStatement",
                        "src": "1848:84:2"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 558,
                        "name": "orderLeft",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 502,
                        "src": "1969:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      {
                        "id": 559,
                        "name": "orderRight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 506,
                        "src": "1980:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        },
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      ],
                      "id": 557,
                      "name": "matchAndTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 761,
                      "src": "1952:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Order_$1232_memory_ptr_$_t_struct$_Order_$1232_memory_ptr_$returns$__$",
                        "typeString": "function (struct LibOrder.Order memory,struct LibOrder.Order memory)"
                      }
                    },
                    "id": 560,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1952:39:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 561,
                  "nodeType": "ExpressionStatement",
                  "src": "1952:39:2"
                }
              ]
            },
            "functionSelector": "e99a3f80",
            "id": 563,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "matchOrders",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 502,
                  "mutability": "mutable",
                  "name": "orderLeft",
                  "nodeType": "VariableDeclaration",
                  "scope": 563,
                  "src": "1368:31:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                    "typeString": "struct LibOrder.Order"
                  },
                  "typeName": {
                    "id": 501,
                    "name": "LibOrder.Order",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1232,
                    "src": "1368:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$1232_storage_ptr",
                      "typeString": "struct LibOrder.Order"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 504,
                  "mutability": "mutable",
                  "name": "signatureLeft",
                  "nodeType": "VariableDeclaration",
                  "scope": 563,
                  "src": "1409:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 503,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1409:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 506,
                  "mutability": "mutable",
                  "name": "orderRight",
                  "nodeType": "VariableDeclaration",
                  "scope": 563,
                  "src": "1445:32:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                    "typeString": "struct LibOrder.Order"
                  },
                  "typeName": {
                    "id": 505,
                    "name": "LibOrder.Order",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1232,
                    "src": "1445:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$1232_storage_ptr",
                      "typeString": "struct LibOrder.Order"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 508,
                  "mutability": "mutable",
                  "name": "signatureRight",
                  "nodeType": "VariableDeclaration",
                  "scope": 563,
                  "src": "1487:27:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 507,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1487:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1358:162:2"
            },
            "returnParameters": {
              "id": 510,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1538:0:2"
            },
            "scope": 862,
            "src": "1338:660:2",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 760,
              "nodeType": "Block",
              "src": "2106:1720:2",
              "statements": [
                {
                  "assignments": [
                    573,
                    575
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 573,
                      "mutability": "mutable",
                      "name": "makeMatch",
                      "nodeType": "VariableDeclaration",
                      "scope": 760,
                      "src": "2117:35:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                        "typeString": "struct LibAsset.AssetType"
                      },
                      "typeName": {
                        "id": 572,
                        "name": "LibAsset.AssetType",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 4647,
                        "src": "2117:18:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AssetType_$4647_storage_ptr",
                          "typeString": "struct LibAsset.AssetType"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 575,
                      "mutability": "mutable",
                      "name": "takeMatch",
                      "nodeType": "VariableDeclaration",
                      "scope": 760,
                      "src": "2154:35:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                        "typeString": "struct LibAsset.AssetType"
                      },
                      "typeName": {
                        "id": 574,
                        "name": "LibAsset.AssetType",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 4647,
                        "src": "2154:18:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AssetType_$4647_storage_ptr",
                          "typeString": "struct LibAsset.AssetType"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 580,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 577,
                        "name": "orderLeft",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 565,
                        "src": "2205:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      {
                        "id": 578,
                        "name": "orderRight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 567,
                        "src": "2216:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        },
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      ],
                      "id": 576,
                      "name": "matchAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        838,
                        76
                      ],
                      "referencedDeclaration": 838,
                      "src": "2193:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Order_$1232_memory_ptr_$_t_struct$_Order_$1232_memory_ptr_$returns$_t_struct$_AssetType_$4647_memory_ptr_$_t_struct$_AssetType_$4647_memory_ptr_$",
                        "typeString": "function (struct LibOrder.Order memory,struct LibOrder.Order memory) view returns (struct LibAsset.AssetType memory,struct LibAsset.AssetType memory)"
                      }
                    },
                    "id": 579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2193:34:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_struct$_AssetType_$4647_memory_ptr_$_t_struct$_AssetType_$4647_memory_ptr_$",
                      "typeString": "tuple(struct LibAsset.AssetType memory,struct LibAsset.AssetType memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2116:111:2"
                },
                {
                  "assignments": [
                    582
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 582,
                      "mutability": "mutable",
                      "name": "leftOrderKeyHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 760,
                      "src": "2237:24:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 581,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2237:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 587,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 585,
                        "name": "orderLeft",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 565,
                        "src": "2281:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      ],
                      "expression": {
                        "id": 583,
                        "name": "LibOrder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1372,
                        "src": "2264:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_LibOrder_$1372_$",
                          "typeString": "type(library LibOrder)"
                        }
                      },
                      "id": 584,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "hashKey",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1296,
                      "src": "2264:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_Order_$1232_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (struct LibOrder.Order memory) pure returns (bytes32)"
                      }
                    },
                    "id": 586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2264:27:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2237:54:2"
                },
                {
                  "assignments": [
                    589
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 589,
                      "mutability": "mutable",
                      "name": "rightOrderKeyHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 760,
                      "src": "2301:25:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 588,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2301:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 594,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 592,
                        "name": "orderRight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 567,
                        "src": "2346:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      ],
                      "expression": {
                        "id": 590,
                        "name": "LibOrder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1372,
                        "src": "2329:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_LibOrder_$1372_$",
                          "typeString": "type(library LibOrder)"
                        }
                      },
                      "id": 591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "hashKey",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1296,
                      "src": "2329:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_Order_$1232_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (struct LibOrder.Order memory) pure returns (bytes32)"
                      }
                    },
                    "id": 593,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2329:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2301:56:2"
                },
                {
                  "assignments": [
                    596
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 596,
                      "mutability": "mutable",
                      "name": "leftOrderFill",
                      "nodeType": "VariableDeclaration",
                      "scope": 760,
                      "src": "2367:18:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 595,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2367:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 601,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 598,
                        "name": "orderLeft",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 565,
                        "src": "2401:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      {
                        "id": 599,
                        "name": "leftOrderKeyHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 582,
                        "src": "2412:16:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 597,
                      "name": "getOrderFill",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 788,
                      "src": "2388:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Order_$1232_memory_ptr_$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (struct LibOrder.Order memory,bytes32) view returns (uint256)"
                      }
                    },
                    "id": 600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2388:41:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2367:62:2"
                },
                {
                  "assignments": [
                    603
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 603,
                      "mutability": "mutable",
                      "name": "rightOrderFill",
                      "nodeType": "VariableDeclaration",
                      "scope": 760,
                      "src": "2439:19:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 602,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2439:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 608,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 605,
                        "name": "orderRight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 567,
                        "src": "2474:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      {
                        "id": 606,
                        "name": "rightOrderKeyHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 589,
                        "src": "2486:17:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 604,
                      "name": "getOrderFill",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 788,
                      "src": "2461:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Order_$1232_memory_ptr_$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (struct LibOrder.Order memory,bytes32) view returns (uint256)"
                      }
                    },
                    "id": 607,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2461:43:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2439:65:2"
                },
                {
                  "assignments": [
                    612
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 612,
                      "mutability": "mutable",
                      "name": "newFill",
                      "nodeType": "VariableDeclaration",
                      "scope": 760,
                      "src": "2514:33:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FillResult_$1068_memory_ptr",
                        "typeString": "struct LibFill.FillResult"
                      },
                      "typeName": {
                        "id": 611,
                        "name": "LibFill.FillResult",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1068,
                        "src": "2514:18:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FillResult_$1068_storage_ptr",
                          "typeString": "struct LibFill.FillResult"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 620,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 615,
                        "name": "orderLeft",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 565,
                        "src": "2568:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      {
                        "id": 616,
                        "name": "orderRight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 567,
                        "src": "2579:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      {
                        "id": 617,
                        "name": "leftOrderFill",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 596,
                        "src": "2591:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 618,
                        "name": "rightOrderFill",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 603,
                        "src": "2606:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        },
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 613,
                        "name": "LibFill",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1201,
                        "src": "2550:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_LibFill_$1201_$",
                          "typeString": "type(library LibFill)"
                        }
                      },
                      "id": 614,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "fillOrder",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1130,
                      "src": "2550:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_Order_$1232_memory_ptr_$_t_struct$_Order_$1232_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_struct$_FillResult_$1068_memory_ptr_$",
                        "typeString": "function (struct LibOrder.Order memory,struct LibOrder.Order memory,uint256,uint256) pure returns (struct LibFill.FillResult memory)"
                      }
                    },
                    "id": 619,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2550:71:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FillResult_$1068_memory_ptr",
                      "typeString": "struct LibFill.FillResult memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2514:107:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 625,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 622,
                            "name": "newFill",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 612,
                            "src": "2639:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_FillResult_$1068_memory_ptr",
                              "typeString": "struct LibFill.FillResult memory"
                            }
                          },
                          "id": 623,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "takeValue",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1067,
                          "src": "2639:17:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 624,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2659:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2639:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6e6f7468696e6720746f2066696c6c",
                        "id": 626,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2662:17:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_99c54eb9ed32adddd848a8e2315700764966121b5fb51bdbca14d8852017582f",
                          "typeString": "literal_string \"nothing to fill\""
                        },
                        "value": "nothing to fill"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_99c54eb9ed32adddd848a8e2315700764966121b5fb51bdbca14d8852017582f",
                          "typeString": "literal_string \"nothing to fill\""
                        }
                      ],
                      "id": 621,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2631:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 627,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2631:49:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 628,
                  "nodeType": "ExpressionStatement",
                  "src": "2631:49:2"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 632,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 629,
                        "name": "orderLeft",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 565,
                        "src": "2695:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      "id": 630,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "salt",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1223,
                      "src": "2695:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 631,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2713:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2695:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 643,
                  "nodeType": "IfStatement",
                  "src": "2691:109:2",
                  "trueBody": {
                    "id": 642,
                    "nodeType": "Block",
                    "src": "2716:84:2",
                    "statements": [
                      {
                        "expression": {
                          "id": 640,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 633,
                              "name": "fills",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 424,
                              "src": "2730:5:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 635,
                            "indexExpression": {
                              "id": 634,
                              "name": "leftOrderKeyHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 582,
                              "src": "2736:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2730:23:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 639,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 636,
                              "name": "leftOrderFill",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 596,
                              "src": "2756:13:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "expression": {
                                "id": 637,
                                "name": "newFill",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 612,
                                "src": "2772:7:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_FillResult_$1068_memory_ptr",
                                  "typeString": "struct LibFill.FillResult memory"
                                }
                              },
                              "id": 638,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "takeValue",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 1067,
                              "src": "2772:17:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2756:33:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2730:59:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 641,
                        "nodeType": "ExpressionStatement",
                        "src": "2730:59:2"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 647,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 644,
                        "name": "orderRight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 567,
                        "src": "2813:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      "id": 645,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "salt",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1223,
                      "src": "2813:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 646,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2832:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2813:20:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 658,
                  "nodeType": "IfStatement",
                  "src": "2809:112:2",
                  "trueBody": {
                    "id": 657,
                    "nodeType": "Block",
                    "src": "2835:86:2",
                    "statements": [
                      {
                        "expression": {
                          "id": 655,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 648,
                              "name": "fills",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 424,
                              "src": "2849:5:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 650,
                            "indexExpression": {
                              "id": 649,
                              "name": "rightOrderKeyHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 589,
                              "src": "2855:17:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2849:24:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 654,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 651,
                              "name": "rightOrderFill",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 603,
                              "src": "2876:14:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "expression": {
                                "id": 652,
                                "name": "newFill",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 612,
                                "src": "2893:7:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_FillResult_$1068_memory_ptr",
                                  "typeString": "struct LibFill.FillResult memory"
                                }
                              },
                              "id": 653,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "makeValue",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 1065,
                              "src": "2893:17:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2876:34:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2849:61:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 656,
                        "nodeType": "ExpressionStatement",
                        "src": "2849:61:2"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    660,
                    662
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 660,
                      "mutability": "mutable",
                      "name": "totalMakeValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 760,
                      "src": "2932:19:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 659,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2932:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 662,
                      "mutability": "mutable",
                      "name": "totalTakeValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 760,
                      "src": "2953:19:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 661,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2953:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 670,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 664,
                        "name": "makeMatch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 573,
                        "src": "2988:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                          "typeString": "struct LibAsset.AssetType memory"
                        }
                      },
                      {
                        "id": 665,
                        "name": "takeMatch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 575,
                        "src": "2999:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                          "typeString": "struct LibAsset.AssetType memory"
                        }
                      },
                      {
                        "id": 666,
                        "name": "newFill",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 612,
                        "src": "3010:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FillResult_$1068_memory_ptr",
                          "typeString": "struct LibFill.FillResult memory"
                        }
                      },
                      {
                        "id": 667,
                        "name": "orderLeft",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 565,
                        "src": "3019:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      {
                        "id": 668,
                        "name": "orderRight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 567,
                        "src": "3030:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                          "typeString": "struct LibAsset.AssetType memory"
                        },
                        {
                          "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                          "typeString": "struct LibAsset.AssetType memory"
                        },
                        {
                          "typeIdentifier": "t_struct$_FillResult_$1068_memory_ptr",
                          "typeString": "struct LibFill.FillResult memory"
                        },
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        },
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      ],
                      "id": 663,
                      "name": "doTransfers",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 979,
                      "src": "2976:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_AssetType_$4647_memory_ptr_$_t_struct$_AssetType_$4647_memory_ptr_$_t_struct$_FillResult_$1068_memory_ptr_$_t_struct$_Order_$1232_memory_ptr_$_t_struct$_Order_$1232_memory_ptr_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (struct LibAsset.AssetType memory,struct LibAsset.AssetType memory,struct LibFill.FillResult memory,struct LibOrder.Order memory,struct LibOrder.Order memory) returns (uint256,uint256)"
                      }
                    },
                    "id": 669,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2976:65:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2931:110:2"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 675,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 671,
                        "name": "makeMatch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 573,
                        "src": "3055:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                          "typeString": "struct LibAsset.AssetType memory"
                        }
                      },
                      "id": 672,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "assetClass",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4644,
                      "src": "3055:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "id": 673,
                        "name": "LibAsset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4695,
                        "src": "3079:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_LibAsset_$4695_$",
                          "typeString": "type(library LibAsset)"
                        }
                      },
                      "id": 674,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "ETH_ASSET_CLASS",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4608,
                      "src": "3079:24:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "3055:48:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "id": 715,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 711,
                          "name": "takeMatch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 575,
                          "src": "3402:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                            "typeString": "struct LibAsset.AssetType memory"
                          }
                        },
                        "id": 712,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "assetClass",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4644,
                        "src": "3402:20:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "id": 713,
                          "name": "LibAsset",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4695,
                          "src": "3426:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_LibAsset_$4695_$",
                            "typeString": "type(library LibAsset)"
                          }
                        },
                        "id": 714,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "ETH_ASSET_CLASS",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4608,
                        "src": "3426:24:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "src": "3402:48:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 743,
                    "nodeType": "IfStatement",
                    "src": "3398:270:2",
                    "trueBody": {
                      "id": 742,
                      "nodeType": "Block",
                      "src": "3452:216:2",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 720,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "expression": {
                                    "id": 717,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967281,
                                    "src": "3474:3:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 718,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "src": "3474:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">=",
                                "rightExpression": {
                                  "id": 719,
                                  "name": "totalTakeValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 662,
                                  "src": "3487:14:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "3474:27:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              {
                                "hexValue": "6e6f7420656e6f75676820657468",
                                "id": 721,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3503:16:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_f38787fedbd8f1d66c237a0aae7262ee866033b9295a240f1f05b891b71df4a6",
                                  "typeString": "literal_string \"not enough eth\""
                                },
                                "value": "not enough eth"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_f38787fedbd8f1d66c237a0aae7262ee866033b9295a240f1f05b891b71df4a6",
                                  "typeString": "literal_string \"not enough eth\""
                                }
                              ],
                              "id": 716,
                              "name": "require",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                4294967278,
                                4294967278
                              ],
                              "referencedDeclaration": 4294967278,
                              "src": "3466:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                "typeString": "function (bool,string memory) pure"
                              }
                            },
                            "id": 722,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3466:54:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 723,
                          "nodeType": "ExpressionStatement",
                          "src": "3466:54:2"
                        },
                        {
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 727,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 724,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "3538:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 725,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "src": "3538:9:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "id": 726,
                              "name": "totalTakeValue",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 662,
                              "src": "3550:14:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3538:26:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 741,
                          "nodeType": "IfStatement",
                          "src": "3534:124:2",
                          "trueBody": {
                            "id": 740,
                            "nodeType": "Block",
                            "src": "3566:92:2",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 737,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "expression": {
                                          "id": 734,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 4294967281,
                                          "src": "3616:3:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 735,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "value",
                                        "nodeType": "MemberAccess",
                                        "src": "3616:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 736,
                                        "name": "totalTakeValue",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 662,
                                        "src": "3628:14:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "3616:26:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "arguments": [
                                        {
                                          "expression": {
                                            "id": 730,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 4294967281,
                                            "src": "3592:3:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 731,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "sender",
                                          "nodeType": "MemberAccess",
                                          "src": "3592:10:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                          }
                                        ],
                                        "id": 729,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "3584:7:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_address_$",
                                          "typeString": "type(address)"
                                        },
                                        "typeName": {
                                          "id": 728,
                                          "name": "address",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "3584:7:2",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 732,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3584:19:2",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "id": 733,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "transferEth",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 3017,
                                    "src": "3584:31:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$bound_to$_t_address_$",
                                      "typeString": "function (address,uint256)"
                                    }
                                  },
                                  "id": 738,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3584:59:2",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 739,
                                "nodeType": "ExpressionStatement",
                                "src": "3584:59:2"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "id": 744,
                  "nodeType": "IfStatement",
                  "src": "3051:617:2",
                  "trueBody": {
                    "id": 710,
                    "nodeType": "Block",
                    "src": "3105:287:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              },
                              "id": 681,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "id": 677,
                                  "name": "takeMatch",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 575,
                                  "src": "3127:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                                    "typeString": "struct LibAsset.AssetType memory"
                                  }
                                },
                                "id": 678,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "assetClass",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 4644,
                                "src": "3127:20:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "!=",
                              "rightExpression": {
                                "expression": {
                                  "id": 679,
                                  "name": "LibAsset",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4695,
                                  "src": "3151:8:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_LibAsset_$4695_$",
                                    "typeString": "type(library LibAsset)"
                                  }
                                },
                                "id": 680,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "ETH_ASSET_CLASS",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 4608,
                                "src": "3151:24:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              },
                              "src": "3127:48:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 676,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              4294967278,
                              4294967278
                            ],
                            "referencedDeclaration": 4294967278,
                            "src": "3119:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 682,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3119:57:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 683,
                        "nodeType": "ExpressionStatement",
                        "src": "3119:57:2"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 688,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "id": 685,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967281,
                                  "src": "3198:3:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 686,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "value",
                                "nodeType": "MemberAccess",
                                "src": "3198:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">=",
                              "rightExpression": {
                                "id": 687,
                                "name": "totalMakeValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 660,
                                "src": "3211:14:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "3198:27:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "hexValue": "6e6f7420656e6f75676820657468",
                              "id": 689,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3227:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f38787fedbd8f1d66c237a0aae7262ee866033b9295a240f1f05b891b71df4a6",
                                "typeString": "literal_string \"not enough eth\""
                              },
                              "value": "not enough eth"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_f38787fedbd8f1d66c237a0aae7262ee866033b9295a240f1f05b891b71df4a6",
                                "typeString": "literal_string \"not enough eth\""
                              }
                            ],
                            "id": 684,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              4294967278,
                              4294967278
                            ],
                            "referencedDeclaration": 4294967278,
                            "src": "3190:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 690,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3190:54:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 691,
                        "nodeType": "ExpressionStatement",
                        "src": "3190:54:2"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 695,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 692,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "3262:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 693,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "3262:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "id": 694,
                            "name": "totalMakeValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 660,
                            "src": "3274:14:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3262:26:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 709,
                        "nodeType": "IfStatement",
                        "src": "3258:124:2",
                        "trueBody": {
                          "id": 708,
                          "nodeType": "Block",
                          "src": "3290:92:2",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 705,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "expression": {
                                        "id": 702,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4294967281,
                                        "src": "3340:3:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 703,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "value",
                                      "nodeType": "MemberAccess",
                                      "src": "3340:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "id": 704,
                                      "name": "totalMakeValue",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 660,
                                      "src": "3352:14:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "3340:26:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "arguments": [
                                      {
                                        "expression": {
                                          "id": 698,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 4294967281,
                                          "src": "3316:3:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 699,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "src": "3316:10:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address_payable",
                                          "typeString": "address payable"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address_payable",
                                          "typeString": "address payable"
                                        }
                                      ],
                                      "id": 697,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "3308:7:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": {
                                        "id": 696,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3308:7:2",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 700,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "3308:19:2",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "id": 701,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "transferEth",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 3017,
                                  "src": "3308:31:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$bound_to$_t_address_$",
                                    "typeString": "function (address,uint256)"
                                  }
                                },
                                "id": 706,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3308:59:2",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 707,
                              "nodeType": "ExpressionStatement",
                              "src": "3308:59:2"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 746,
                        "name": "leftOrderKeyHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 582,
                        "src": "3688:16:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 747,
                        "name": "rightOrderKeyHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 589,
                        "src": "3706:17:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "expression": {
                          "id": 748,
                          "name": "orderLeft",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 565,
                          "src": "3725:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                            "typeString": "struct LibOrder.Order memory"
                          }
                        },
                        "id": 749,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "maker",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1215,
                        "src": "3725:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 750,
                          "name": "orderRight",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 567,
                          "src": "3742:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                            "typeString": "struct LibOrder.Order memory"
                          }
                        },
                        "id": 751,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "maker",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1215,
                        "src": "3742:16:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 752,
                          "name": "newFill",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 612,
                          "src": "3760:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FillResult_$1068_memory_ptr",
                            "typeString": "struct LibFill.FillResult memory"
                          }
                        },
                        "id": 753,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "takeValue",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1067,
                        "src": "3760:17:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 754,
                          "name": "newFill",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 612,
                          "src": "3779:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FillResult_$1068_memory_ptr",
                            "typeString": "struct LibFill.FillResult memory"
                          }
                        },
                        "id": 755,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "makeValue",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1065,
                        "src": "3779:17:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 756,
                        "name": "makeMatch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 573,
                        "src": "3798:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                          "typeString": "struct LibAsset.AssetType memory"
                        }
                      },
                      {
                        "id": 757,
                        "name": "takeMatch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 575,
                        "src": "3809:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                          "typeString": "struct LibAsset.AssetType memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                          "typeString": "struct LibAsset.AssetType memory"
                        },
                        {
                          "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                          "typeString": "struct LibAsset.AssetType memory"
                        }
                      ],
                      "id": 745,
                      "name": "Match",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 452,
                      "src": "3682:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_struct$_AssetType_$4647_memory_ptr_$_t_struct$_AssetType_$4647_memory_ptr_$returns$__$",
                        "typeString": "function (bytes32,bytes32,address,address,uint256,uint256,struct LibAsset.AssetType memory,struct LibAsset.AssetType memory)"
                      }
                    },
                    "id": 758,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3682:137:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 759,
                  "nodeType": "EmitStatement",
                  "src": "3677:142:2"
                }
              ]
            },
            "id": 761,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "matchAndTransfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 568,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 565,
                  "mutability": "mutable",
                  "name": "orderLeft",
                  "nodeType": "VariableDeclaration",
                  "scope": 761,
                  "src": "2030:31:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                    "typeString": "struct LibOrder.Order"
                  },
                  "typeName": {
                    "id": 564,
                    "name": "LibOrder.Order",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1232,
                    "src": "2030:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$1232_storage_ptr",
                      "typeString": "struct LibOrder.Order"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 567,
                  "mutability": "mutable",
                  "name": "orderRight",
                  "nodeType": "VariableDeclaration",
                  "scope": 761,
                  "src": "2063:32:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                    "typeString": "struct LibOrder.Order"
                  },
                  "typeName": {
                    "id": 566,
                    "name": "LibOrder.Order",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1232,
                    "src": "2063:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$1232_storage_ptr",
                      "typeString": "struct LibOrder.Order"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2029:67:2"
            },
            "returnParameters": {
              "id": 569,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2106:0:2"
            },
            "scope": 862,
            "src": "2004:1822:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 787,
              "nodeType": "Block",
              "src": "3931:119:2",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 773,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 770,
                        "name": "order",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 763,
                        "src": "3945:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      "id": 771,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "salt",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1223,
                      "src": "3945:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 772,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3959:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3945:15:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 785,
                    "nodeType": "Block",
                    "src": "4001:43:2",
                    "statements": [
                      {
                        "expression": {
                          "id": 783,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 779,
                            "name": "fill",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 768,
                            "src": "4015:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "baseExpression": {
                              "id": 780,
                              "name": "fills",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 424,
                              "src": "4022:5:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 782,
                            "indexExpression": {
                              "id": 781,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 765,
                              "src": "4028:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4022:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4015:18:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 784,
                        "nodeType": "ExpressionStatement",
                        "src": "4015:18:2"
                      }
                    ]
                  },
                  "id": 786,
                  "nodeType": "IfStatement",
                  "src": "3941:103:2",
                  "trueBody": {
                    "id": 778,
                    "nodeType": "Block",
                    "src": "3962:33:2",
                    "statements": [
                      {
                        "expression": {
                          "id": 776,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 774,
                            "name": "fill",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 768,
                            "src": "3976:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "30",
                            "id": 775,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3983:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3976:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 777,
                        "nodeType": "ExpressionStatement",
                        "src": "3976:8:2"
                      }
                    ]
                  }
                }
              ]
            },
            "id": 788,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getOrderFill",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 763,
                  "mutability": "mutable",
                  "name": "order",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "3854:27:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                    "typeString": "struct LibOrder.Order"
                  },
                  "typeName": {
                    "id": 762,
                    "name": "LibOrder.Order",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1232,
                    "src": "3854:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$1232_storage_ptr",
                      "typeString": "struct LibOrder.Order"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 765,
                  "mutability": "mutable",
                  "name": "hash",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "3883:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 764,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3883:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3853:43:2"
            },
            "returnParameters": {
              "id": 769,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 768,
                  "mutability": "mutable",
                  "name": "fill",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "3920:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 767,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3920:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3919:11:2"
            },
            "scope": 862,
            "src": "3832:218:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 837,
              "nodeType": "Block",
              "src": "4241:331:2",
              "statements": [
                {
                  "expression": {
                    "id": 808,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 799,
                      "name": "makeMatch",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 795,
                      "src": "4251:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                        "typeString": "struct LibAsset.AssetType memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "expression": {
                              "id": 801,
                              "name": "orderLeft",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 790,
                              "src": "4275:9:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                "typeString": "struct LibOrder.Order memory"
                              }
                            },
                            "id": 802,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "makeAsset",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1217,
                            "src": "4275:19:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Asset_$4652_memory_ptr",
                              "typeString": "struct LibAsset.Asset memory"
                            }
                          },
                          "id": 803,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "assetType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4649,
                          "src": "4275:29:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                            "typeString": "struct LibAsset.AssetType memory"
                          }
                        },
                        {
                          "expression": {
                            "expression": {
                              "id": 804,
                              "name": "orderRight",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 792,
                              "src": "4306:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                "typeString": "struct LibOrder.Order memory"
                              }
                            },
                            "id": 805,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "takeAsset",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1221,
                            "src": "4306:20:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Asset_$4652_memory_ptr",
                              "typeString": "struct LibAsset.Asset memory"
                            }
                          },
                          "id": 806,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "assetType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4649,
                          "src": "4306:30:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                            "typeString": "struct LibAsset.AssetType memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                            "typeString": "struct LibAsset.AssetType memory"
                          },
                          {
                            "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                            "typeString": "struct LibAsset.AssetType memory"
                          }
                        ],
                        "id": 800,
                        "name": "matchAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          838,
                          76
                        ],
                        "referencedDeclaration": 76,
                        "src": "4263:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_AssetType_$4647_memory_ptr_$_t_struct$_AssetType_$4647_memory_ptr_$returns$_t_struct$_AssetType_$4647_memory_ptr_$",
                          "typeString": "function (struct LibAsset.AssetType memory,struct LibAsset.AssetType memory) view returns (struct LibAsset.AssetType memory)"
                        }
                      },
                      "id": 807,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4263:74:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                        "typeString": "struct LibAsset.AssetType memory"
                      }
                    },
                    "src": "4251:86:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                      "typeString": "struct LibAsset.AssetType memory"
                    }
                  },
                  "id": 809,
                  "nodeType": "ExpressionStatement",
                  "src": "4251:86:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 814,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 811,
                            "name": "makeMatch",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 795,
                            "src": "4355:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                              "typeString": "struct LibAsset.AssetType memory"
                            }
                          },
                          "id": 812,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "assetClass",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4644,
                          "src": "4355:20:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 813,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4379:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4355:25:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "61737365747320646f6e2774206d61746368",
                        "id": 815,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4382:20:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c48362a3fad4fc10587f361cd89d92c9a72c1a6e2fe4e5c5b5aabc0b03c74327",
                          "typeString": "literal_string \"assets don't match\""
                        },
                        "value": "assets don't match"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c48362a3fad4fc10587f361cd89d92c9a72c1a6e2fe4e5c5b5aabc0b03c74327",
                          "typeString": "literal_string \"assets don't match\""
                        }
                      ],
                      "id": 810,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4347:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 816,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4347:56:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 817,
                  "nodeType": "ExpressionStatement",
                  "src": "4347:56:2"
                },
                {
                  "expression": {
                    "id": 827,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 818,
                      "name": "takeMatch",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 797,
                      "src": "4413:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                        "typeString": "struct LibAsset.AssetType memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "expression": {
                              "id": 820,
                              "name": "orderLeft",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 790,
                              "src": "4437:9:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                "typeString": "struct LibOrder.Order memory"
                              }
                            },
                            "id": 821,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "takeAsset",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1221,
                            "src": "4437:19:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Asset_$4652_memory_ptr",
                              "typeString": "struct LibAsset.Asset memory"
                            }
                          },
                          "id": 822,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "assetType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4649,
                          "src": "4437:29:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                            "typeString": "struct LibAsset.AssetType memory"
                          }
                        },
                        {
                          "expression": {
                            "expression": {
                              "id": 823,
                              "name": "orderRight",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 792,
                              "src": "4468:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                "typeString": "struct LibOrder.Order memory"
                              }
                            },
                            "id": 824,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "makeAsset",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1217,
                            "src": "4468:20:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Asset_$4652_memory_ptr",
                              "typeString": "struct LibAsset.Asset memory"
                            }
                          },
                          "id": 825,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "assetType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4649,
                          "src": "4468:30:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                            "typeString": "struct LibAsset.AssetType memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                            "typeString": "struct LibAsset.AssetType memory"
                          },
                          {
                            "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                            "typeString": "struct LibAsset.AssetType memory"
                          }
                        ],
                        "id": 819,
                        "name": "matchAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          838,
                          76
                        ],
                        "referencedDeclaration": 76,
                        "src": "4425:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_AssetType_$4647_memory_ptr_$_t_struct$_AssetType_$4647_memory_ptr_$returns$_t_struct$_AssetType_$4647_memory_ptr_$",
                          "typeString": "function (struct LibAsset.AssetType memory,struct LibAsset.AssetType memory) view returns (struct LibAsset.AssetType memory)"
                        }
                      },
                      "id": 826,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4425:74:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                        "typeString": "struct LibAsset.AssetType memory"
                      }
                    },
                    "src": "4413:86:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                      "typeString": "struct LibAsset.AssetType memory"
                    }
                  },
                  "id": 828,
                  "nodeType": "ExpressionStatement",
                  "src": "4413:86:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 833,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 830,
                            "name": "takeMatch",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 797,
                            "src": "4517:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                              "typeString": "struct LibAsset.AssetType memory"
                            }
                          },
                          "id": 831,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "assetClass",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4644,
                          "src": "4517:20:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 832,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4541:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4517:25:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "61737365747320646f6e2774206d61746368",
                        "id": 834,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4544:20:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c48362a3fad4fc10587f361cd89d92c9a72c1a6e2fe4e5c5b5aabc0b03c74327",
                          "typeString": "literal_string \"assets don't match\""
                        },
                        "value": "assets don't match"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c48362a3fad4fc10587f361cd89d92c9a72c1a6e2fe4e5c5b5aabc0b03c74327",
                          "typeString": "literal_string \"assets don't match\""
                        }
                      ],
                      "id": 829,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4509:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 835,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4509:56:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 836,
                  "nodeType": "ExpressionStatement",
                  "src": "4509:56:2"
                }
              ]
            },
            "id": 838,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "matchAssets",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 793,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 790,
                  "mutability": "mutable",
                  "name": "orderLeft",
                  "nodeType": "VariableDeclaration",
                  "scope": 838,
                  "src": "4077:31:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                    "typeString": "struct LibOrder.Order"
                  },
                  "typeName": {
                    "id": 789,
                    "name": "LibOrder.Order",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1232,
                    "src": "4077:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$1232_storage_ptr",
                      "typeString": "struct LibOrder.Order"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 792,
                  "mutability": "mutable",
                  "name": "orderRight",
                  "nodeType": "VariableDeclaration",
                  "scope": 838,
                  "src": "4110:32:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                    "typeString": "struct LibOrder.Order"
                  },
                  "typeName": {
                    "id": 791,
                    "name": "LibOrder.Order",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1232,
                    "src": "4110:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$1232_storage_ptr",
                      "typeString": "struct LibOrder.Order"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4076:67:2"
            },
            "returnParameters": {
              "id": 798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 795,
                  "mutability": "mutable",
                  "name": "makeMatch",
                  "nodeType": "VariableDeclaration",
                  "scope": 838,
                  "src": "4167:35:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                    "typeString": "struct LibAsset.AssetType"
                  },
                  "typeName": {
                    "id": 794,
                    "name": "LibAsset.AssetType",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 4647,
                    "src": "4167:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AssetType_$4647_storage_ptr",
                      "typeString": "struct LibAsset.AssetType"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 797,
                  "mutability": "mutable",
                  "name": "takeMatch",
                  "nodeType": "VariableDeclaration",
                  "scope": 838,
                  "src": "4204:35:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                    "typeString": "struct LibAsset.AssetType"
                  },
                  "typeName": {
                    "id": 796,
                    "name": "LibAsset.AssetType",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 4647,
                    "src": "4204:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AssetType_$4647_storage_ptr",
                      "typeString": "struct LibAsset.AssetType"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4166:74:2"
            },
            "scope": 862,
            "src": "4056:516:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 856,
              "nodeType": "Block",
              "src": "4667:77:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 848,
                        "name": "order",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 840,
                        "src": "4695:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      ],
                      "expression": {
                        "id": 845,
                        "name": "LibOrder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1372,
                        "src": "4677:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_LibOrder_$1372_$",
                          "typeString": "type(library LibOrder)"
                        }
                      },
                      "id": 847,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "validate",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1371,
                      "src": "4677:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Order_$1232_memory_ptr_$returns$__$",
                        "typeString": "function (struct LibOrder.Order memory) view"
                      }
                    },
                    "id": 849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4677:24:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 850,
                  "nodeType": "ExpressionStatement",
                  "src": "4677:24:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 852,
                        "name": "order",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 840,
                        "src": "4720:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      {
                        "id": 853,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 842,
                        "src": "4727:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 851,
                      "name": "validate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1660,
                      "src": "4711:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Order_$1232_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (struct LibOrder.Order memory,bytes memory) view"
                      }
                    },
                    "id": 854,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4711:26:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 855,
                  "nodeType": "ExpressionStatement",
                  "src": "4711:26:2"
                }
              ]
            },
            "id": 857,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "validateFull",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 840,
                  "mutability": "mutable",
                  "name": "order",
                  "nodeType": "VariableDeclaration",
                  "scope": 857,
                  "src": "4600:27:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                    "typeString": "struct LibOrder.Order"
                  },
                  "typeName": {
                    "id": 839,
                    "name": "LibOrder.Order",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1232,
                    "src": "4600:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$1232_storage_ptr",
                      "typeString": "struct LibOrder.Order"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 842,
                  "mutability": "mutable",
                  "name": "signature",
                  "nodeType": "VariableDeclaration",
                  "scope": 857,
                  "src": "4629:22:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 841,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4629:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4599:53:2"
            },
            "returnParameters": {
              "id": 844,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4667:0:2"
            },
            "scope": 862,
            "src": "4578:166:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 861,
            "mutability": "mutable",
            "name": "__gap",
            "nodeType": "VariableDeclaration",
            "scope": 862,
            "src": "4750:25:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$49_storage",
              "typeString": "uint256[49]"
            },
            "typeName": {
              "baseType": {
                "id": 858,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4750:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 860,
              "length": {
                "hexValue": "3439",
                "id": 859,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "4758:2:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_49_by_1",
                  "typeString": "int_const 49"
                },
                "value": "49"
              },
              "nodeType": "ArrayTypeName",
              "src": "4750:11:2",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$49_storage_ptr",
                "typeString": "uint256[49]"
              }
            },
            "visibility": "private"
          }
        ],
        "scope": 863,
        "src": "285:4493:2"
      }
    ],
    "src": "33:4746:2"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/ExchangeV2Core.sol",
      "exportedSymbols": {
        "AddressUpgradeable": [
          4491
        ],
        "AssetMatcher": [
          338
        ],
        "ContextUpgradeable": [
          4536
        ],
        "ECDSAUpgradeable": [
          3265
        ],
        "EIP712Upgradeable": [
          3425
        ],
        "ERC1271": [
          2771
        ],
        "ExchangeV2Core": [
          862
        ],
        "IAssetMatcher": [
          876
        ],
        "IERC1155Upgradeable": [
          4053
        ],
        "IERC165Upgradeable": [
          3437
        ],
        "IERC20TransferProxy": [
          4552
        ],
        "IERC20Upgradeable": [
          4131
        ],
        "IERC721Upgradeable": [
          4247
        ],
        "INftTransferProxy": [
          4584
        ],
        "ITransferExecutor": [
          906
        ],
        "ITransferManager": [
          980
        ],
        "ITransferProxy": [
          4598
        ],
        "Initializable": [
          3931
        ],
        "LibAsset": [
          4695
        ],
        "LibFill": [
          1201
        ],
        "LibMath": [
          2993
        ],
        "LibOrder": [
          1372
        ],
        "LibTransfer": [
          3018
        ],
        "MathUpgradeable": [
          3510
        ],
        "OrderValidator": [
          1665
        ],
        "OwnableUpgradeable": [
          3149
        ],
        "SafeMathUpgradeable": [
          3865
        ],
        "TransferExecutor": [
          2758
        ]
      },
      "license": "MIT"
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.7",
            ".6"
          ]
        },
        "id": 387,
        "name": "PragmaDirective",
        "src": "33:22:2"
      },
      {
        "attributes": {
          "literals": [
            "abicoder",
            "v2"
          ]
        },
        "id": 388,
        "name": "PragmaDirective",
        "src": "56:19:2"
      },
      {
        "attributes": {
          "SourceUnit": 1202,
          "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/LibFill.sol",
          "file": "./LibFill.sol",
          "scope": 863,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 389,
        "name": "ImportDirective",
        "src": "77:23:2"
      },
      {
        "attributes": {
          "SourceUnit": 1373,
          "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/LibOrder.sol",
          "file": "./LibOrder.sol",
          "scope": 863,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 390,
        "name": "ImportDirective",
        "src": "101:24:2"
      },
      {
        "attributes": {
          "SourceUnit": 1666,
          "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/OrderValidator.sol",
          "file": "./OrderValidator.sol",
          "scope": 863,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 391,
        "name": "ImportDirective",
        "src": "126:30:2"
      },
      {
        "attributes": {
          "SourceUnit": 339,
          "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/AssetMatcher.sol",
          "file": "./AssetMatcher.sol",
          "scope": 863,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 392,
        "name": "ImportDirective",
        "src": "157:28:2"
      },
      {
        "attributes": {
          "SourceUnit": 2759,
          "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/TransferExecutor.sol",
          "file": "./TransferExecutor.sol",
          "scope": 863,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 393,
        "name": "ImportDirective",
        "src": "186:32:2"
      },
      {
        "attributes": {
          "SourceUnit": 981,
          "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/ITransferManager.sol",
          "file": "./ITransferManager.sol",
          "scope": 863,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 394,
        "name": "ImportDirective",
        "src": "219:32:2"
      },
      {
        "attributes": {
          "SourceUnit": 3019,
          "absolutePath": "/home/quadro/Projects/rarible/protocol-contracts/exchange-v2/contracts/lib/LibTransfer.sol",
          "file": "./lib/LibTransfer.sol",
          "scope": 863,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 395,
        "name": "ImportDirective",
        "src": "252:31:2"
      },
      {
        "attributes": {
          "abstract": true,
          "contractDependencies": [
            338,
            906,
            980,
            1665,
            2758,
            3149,
            3425,
            3931,
            4536
          ],
          "contractKind": "contract",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            862,
            980,
            1665,
            3425,
            2758,
            906,
            338,
            3149,
            4536,
            3931
          ],
          "name": "ExchangeV2Core",
          "scope": 863
        },
        "children": [
          {
            "attributes": {},
            "children": [
              {
                "attributes": {
                  "name": "Initializable",
                  "referencedDeclaration": 3931,
                  "type": "contract Initializable"
                },
                "id": 396,
                "name": "UserDefinedTypeName",
                "src": "321:13:2"
              }
            ],
            "id": 397,
            "name": "InheritanceSpecifier",
            "src": "321:13:2"
          },
          {
            "attributes": {},
            "children": [
              {
                "attributes": {
                  "name": "OwnableUpgradeable",
                  "referencedDeclaration": 3149,
                  "type": "contract OwnableUpgradeable"
                },
                "id": 398,
                "name": "UserDefinedTypeName",
                "src": "336:18:2"
              }
            ],
            "id": 399,
            "name": "InheritanceSpecifier",
            "src": "336:18:2"
          },
          {
            "attributes": {},
            "children": [
              {
                "attributes": {
                  "name": "AssetMatcher",
                  "referencedDeclaration": 338,
                  "type": "contract AssetMatcher"
                },
                "id": 400,
                "name": "UserDefinedTypeName",
                "src": "356:12:2"
              }
            ],
            "id": 401,
            "name": "InheritanceSpecifier",
            "src": "356:12:2"
          },
          {
            "attributes": {},
            "children": [
              {
                "attributes": {
                  "name": "TransferExecutor",
                  "referencedDeclaration": 2758,
                  "type": "contract TransferExecutor"
                },
                "id": 402,
                "name": "UserDefinedTypeName",
                "src": "370:16:2"
              }
            ],
            "id": 403,
            "name": "InheritanceSpecifier",
            "src": "370:16:2"
          },
          {
            "attributes": {},
            "children": [
              {
                "attributes": {
                  "name": "OrderValidator",
                  "referencedDeclaration": 1665,
                  "type": "contract OrderValidator"
                },
                "id": 404,
                "name": "UserDefinedTypeName",
                "src": "388:14:2"
              }
            ],
            "id": 405,
            "name": "InheritanceSpecifier",
            "src": "388:14:2"
          },
          {
            "attributes": {},
            "children": [
              {
                "attributes": {
                  "name": "ITransferManager",
                  "referencedDeclaration": 980,
                  "type": "contract ITransferManager"
                },
                "id": 406,
                "name": "UserDefinedTypeName",
                "src": "404:16:2"
              }
            ],
            "id": 407,
            "name": "InheritanceSpecifier",
            "src": "404:16:2"
          },
          {
            "children": [
              {
                "attributes": {
                  "name": "SafeMathUpgradeable",
                  "referencedDeclaration": 3865,
                  "type": "library SafeMathUpgradeable"
                },
                "id": 408,
                "name": "UserDefinedTypeName",
                "src": "433:19:2"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 409,
                "name": "ElementaryTypeName",
                "src": "457:4:2"
              }
            ],
            "id": 410,
            "name": "UsingForDirective",
            "src": "427:35:2"
          },
          {
            "children": [
              {
                "attributes": {
                  "name": "LibTransfer",
                  "referencedDeclaration": 3018,
                  "type": "library LibTransfer"
                },
                "id": 411,
                "name": "UserDefinedTypeName",
                "src": "473:11:2"
              },
              {
                "attributes": {
                  "name": "address",
                  "stateMutability": "nonpayable",
                  "type": "address"
                },
                "id": 412,
                "name": "ElementaryTypeName",
                "src": "489:7:2"
              }
            ],
            "id": 413,
            "name": "UsingForDirective",
            "src": "467:30:2"
          },
          {
            "attributes": {
              "constant": true,
              "mutability": "constant",
              "name": "UINT256_MAX",
              "scope": 862,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 414,
                "name": "ElementaryTypeName",
                "src": "503:7:2"
              },
              {
                "attributes": {
                  "commonType": {
                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                    "typeString": "int_const 1157...(70 digits omitted)...9935"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "-",
                  "type": "int_const 1157...(70 digits omitted)...9935"
                },
                "children": [
                  {
                    "attributes": {
                      "commonType": {
                        "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                        "typeString": "int_const 1157...(70 digits omitted)...9936"
                      },
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "operator": "**",
                      "type": "int_const 1157...(70 digits omitted)...9936"
                    },
                    "children": [
                      {
                        "attributes": {
                          "hexvalue": "32",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "token": "number",
                          "type": "int_const 2",
                          "value": "2"
                        },
                        "id": 415,
                        "name": "Literal",
                        "src": "542:1:2"
                      },
                      {
                        "attributes": {
                          "hexvalue": "323536",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "token": "number",
                          "type": "int_const 256",
                          "value": "256"
                        },
                        "id": 416,
                        "name": "Literal",
                        "src": "547:3:2"
                      }
                    ],
                    "id": 417,
                    "name": "BinaryOperation",
                    "src": "542:8:2"
                  },
                  {
                    "attributes": {
                      "hexvalue": "31",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "token": "number",
                      "type": "int_const 1",
                      "value": "1"
                    },
                    "id": 418,
                    "name": "Literal",
                    "src": "553:1:2"
                  }
                ],
                "id": 419,
                "name": "BinaryOperation",
                "src": "542:12:2"
              }
            ],
            "id": 420,
            "name": "VariableDeclaration",
            "src": "503:51:2"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "20158c44",
              "mutability": "mutable",
              "name": "fills",
              "scope": 862,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => uint256)",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 421,
                    "name": "ElementaryTypeName",
                    "src": "595:7:2"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 422,
                    "name": "ElementaryTypeName",
                    "src": "606:4:2"
                  }
                ],
                "id": 423,
                "name": "Mapping",
                "src": "587:24:2"
              }
            ],
            "id": 424,
            "name": "VariableDeclaration",
            "src": "587:37:2"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Cancel"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "hash",
                      "scope": 434,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 425,
                        "name": "ElementaryTypeName",
                        "src": "657:7:2"
                      }
                    ],
                    "id": 426,
                    "name": "VariableDeclaration",
                    "src": "657:12:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "maker",
                      "scope": 434,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 427,
                        "name": "ElementaryTypeName",
                        "src": "671:7:2"
                      }
                    ],
                    "id": 428,
                    "name": "VariableDeclaration",
                    "src": "671:13:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "makeAssetType",
                      "scope": 434,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct LibAsset.AssetType",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibAsset.AssetType",
                          "referencedDeclaration": 4647,
                          "type": "struct LibAsset.AssetType"
                        },
                        "id": 429,
                        "name": "UserDefinedTypeName",
                        "src": "686:18:2"
                      }
                    ],
                    "id": 430,
                    "name": "VariableDeclaration",
                    "src": "686:32:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "takeAssetType",
                      "scope": 434,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct LibAsset.AssetType",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibAsset.AssetType",
                          "referencedDeclaration": 4647,
                          "type": "struct LibAsset.AssetType"
                        },
                        "id": 431,
                        "name": "UserDefinedTypeName",
                        "src": "720:18:2"
                      }
                    ],
                    "id": 432,
                    "name": "VariableDeclaration",
                    "src": "720:32:2"
                  }
                ],
                "id": 433,
                "name": "ParameterList",
                "src": "656:97:2"
              }
            ],
            "id": 434,
            "name": "EventDefinition",
            "src": "644:110:2"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Match"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "leftHash",
                      "scope": 452,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 435,
                        "name": "ElementaryTypeName",
                        "src": "771:7:2"
                      }
                    ],
                    "id": 436,
                    "name": "VariableDeclaration",
                    "src": "771:16:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "rightHash",
                      "scope": 452,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 437,
                        "name": "ElementaryTypeName",
                        "src": "789:7:2"
                      }
                    ],
                    "id": 438,
                    "name": "VariableDeclaration",
                    "src": "789:17:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "leftMaker",
                      "scope": 452,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 439,
                        "name": "ElementaryTypeName",
                        "src": "808:7:2"
                      }
                    ],
                    "id": 440,
                    "name": "VariableDeclaration",
                    "src": "808:17:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "rightMaker",
                      "scope": 452,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 441,
                        "name": "ElementaryTypeName",
                        "src": "827:7:2"
                      }
                    ],
                    "id": 442,
                    "name": "VariableDeclaration",
                    "src": "827:18:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "newLeftFill",
                      "scope": 452,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 443,
                        "name": "ElementaryTypeName",
                        "src": "847:4:2"
                      }
                    ],
                    "id": 444,
                    "name": "VariableDeclaration",
                    "src": "847:16:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "newRightFill",
                      "scope": 452,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 445,
                        "name": "ElementaryTypeName",
                        "src": "865:4:2"
                      }
                    ],
                    "id": 446,
                    "name": "VariableDeclaration",
                    "src": "865:17:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "leftAsset",
                      "scope": 452,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct LibAsset.AssetType",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibAsset.AssetType",
                          "referencedDeclaration": 4647,
                          "type": "struct LibAsset.AssetType"
                        },
                        "id": 447,
                        "name": "UserDefinedTypeName",
                        "src": "884:18:2"
                      }
                    ],
                    "id": 448,
                    "name": "VariableDeclaration",
                    "src": "884:28:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "rightAsset",
                      "scope": 452,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct LibAsset.AssetType",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibAsset.AssetType",
                          "referencedDeclaration": 4647,
                          "type": "struct LibAsset.AssetType"
                        },
                        "id": 449,
                        "name": "UserDefinedTypeName",
                        "src": "914:18:2"
                      }
                    ],
                    "id": 450,
                    "name": "VariableDeclaration",
                    "src": "914:29:2"
                  }
                ],
                "id": 451,
                "name": "ParameterList",
                "src": "770:174:2"
              }
            ],
            "id": 452,
            "name": "EventDefinition",
            "src": "759:186:2"
          },
          {
            "attributes": {
              "functionSelector": "e2864fe3",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "cancel",
              "scope": 862,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "order",
                      "scope": 500,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct LibOrder.Order",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibOrder.Order",
                          "referencedDeclaration": 1232,
                          "type": "struct LibOrder.Order"
                        },
                        "id": 453,
                        "name": "UserDefinedTypeName",
                        "src": "967:14:2"
                      }
                    ],
                    "id": 454,
                    "name": "VariableDeclaration",
                    "src": "967:27:2"
                  }
                ],
                "id": 455,
                "name": "ParameterList",
                "src": "966:29:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 456,
                "name": "ParameterList",
                "src": "1005:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_fd4c9442ac3849165940560d9b5b7d5dbb57d9aa9db87ab293290bd9c49a184e",
                                  "typeString": "literal_string \"not a maker\""
                                }
                              ],
                              "overloadedDeclarations": [
                                4294967278,
                                4294967278
                              ],
                              "referencedDeclaration": 4294967278,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 457,
                            "name": "Identifier",
                            "src": "1015:7:2"
                          },
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "arguments": [
                                    null
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "address payable",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        null
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4520,
                                      "type": "function () view returns (address payable)",
                                      "value": "_msgSender"
                                    },
                                    "id": 458,
                                    "name": "Identifier",
                                    "src": "1023:10:2"
                                  }
                                ],
                                "id": 459,
                                "name": "FunctionCall",
                                "src": "1023:12:2"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "maker",
                                  "referencedDeclaration": 1215,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 454,
                                      "type": "struct LibOrder.Order memory",
                                      "value": "order"
                                    },
                                    "id": 460,
                                    "name": "Identifier",
                                    "src": "1039:5:2"
                                  }
                                ],
                                "id": 461,
                                "name": "MemberAccess",
                                "src": "1039:11:2"
                              }
                            ],
                            "id": 462,
                            "name": "BinaryOperation",
                            "src": "1023:27:2"
                          },
                          {
                            "attributes": {
                              "hexvalue": "6e6f742061206d616b6572",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "string",
                              "type": "literal_string \"not a maker\"",
                              "value": "not a maker"
                            },
                            "id": 463,
                            "name": "Literal",
                            "src": "1052:13:2"
                          }
                        ],
                        "id": 464,
                        "name": "FunctionCall",
                        "src": "1015:51:2"
                      }
                    ],
                    "id": 465,
                    "name": "ExpressionStatement",
                    "src": "1015:51:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_2a54609e2a39cfed033292f045a5e18f320567a8c17fea6363660379c0b2b703",
                                  "typeString": "literal_string \"0 salt can't be used\""
                                }
                              ],
                              "overloadedDeclarations": [
                                4294967278,
                                4294967278
                              ],
                              "referencedDeclaration": 4294967278,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 466,
                            "name": "Identifier",
                            "src": "1076:7:2"
                          },
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "salt",
                                  "referencedDeclaration": 1223,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 454,
                                      "type": "struct LibOrder.Order memory",
                                      "value": "order"
                                    },
                                    "id": 467,
                                    "name": "Identifier",
                                    "src": "1084:5:2"
                                  }
                                ],
                                "id": 468,
                                "name": "MemberAccess",
                                "src": "1084:10:2"
                              },
                              {
                                "attributes": {
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 469,
                                "name": "Literal",
                                "src": "1098:1:2"
                              }
                            ],
                            "id": 470,
                            "name": "BinaryOperation",
                            "src": "1084:15:2"
                          },
                          {
                            "attributes": {
                              "hexvalue": "302073616c742063616e27742062652075736564",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "string",
                              "type": "literal_string \"0 salt can't be used\"",
                              "value": "0 salt can't be used"
                            },
                            "id": 471,
                            "name": "Literal",
                            "src": "1101:22:2"
                          }
                        ],
                        "id": 472,
                        "name": "FunctionCall",
                        "src": "1076:48:2"
                      }
                    ],
                    "id": 473,
                    "name": "ExpressionStatement",
                    "src": "1076:48:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        475
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "orderKeyHash",
                          "scope": 499,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 474,
                            "name": "ElementaryTypeName",
                            "src": "1134:7:2"
                          }
                        ],
                        "id": 475,
                        "name": "VariableDeclaration",
                        "src": "1134:20:2"
                      },
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "hashKey",
                              "referencedDeclaration": 1296,
                              "type": "function (struct LibOrder.Order memory) pure returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1372,
                                  "type": "type(library LibOrder)",
                                  "value": "LibOrder"
                                },
                                "id": 476,
                                "name": "Identifier",
                                "src": "1157:8:2"
                              }
                            ],
                            "id": 477,
                            "name": "MemberAccess",
                            "src": "1157:16:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 454,
                              "type": "struct LibOrder.Order memory",
                              "value": "order"
                            },
                            "id": 478,
                            "name": "Identifier",
                            "src": "1174:5:2"
                          }
                        ],
                        "id": 479,
                        "name": "FunctionCall",
                        "src": "1157:23:2"
                      }
                    ],
                    "id": 480,
                    "name": "VariableDeclarationStatement",
                    "src": "1134:46:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 424,
                                  "type": "mapping(bytes32 => uint256)",
                                  "value": "fills"
                                },
                                "id": 481,
                                "name": "Identifier",
                                "src": "1190:5:2"
                              },
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 475,
                                  "type": "bytes32",
                                  "value": "orderKeyHash"
                                },
                                "id": 482,
                                "name": "Identifier",
                                "src": "1196:12:2"
                              }
                            ],
                            "id": 483,
                            "name": "IndexAccess",
                            "src": "1190:19:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 420,
                              "type": "uint256",
                              "value": "UINT256_MAX"
                            },
                            "id": 484,
                            "name": "Identifier",
                            "src": "1212:11:2"
                          }
                        ],
                        "id": 485,
                        "name": "Assignment",
                        "src": "1190:33:2"
                      }
                    ],
                    "id": 486,
                    "name": "ExpressionStatement",
                    "src": "1190:33:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                                  "typeString": "struct LibAsset.AssetType memory"
                                },
                                {
                                  "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                                  "typeString": "struct LibAsset.AssetType memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 434,
                              "type": "function (bytes32,address,struct LibAsset.AssetType memory,struct LibAsset.AssetType memory)",
                              "value": "Cancel"
                            },
                            "id": 487,
                            "name": "Identifier",
                            "src": "1238:6:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 475,
                              "type": "bytes32",
                              "value": "orderKeyHash"
                            },
                            "id": 488,
                            "name": "Identifier",
                            "src": "1245:12:2"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "maker",
                              "referencedDeclaration": 1215,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 454,
                                  "type": "struct LibOrder.Order memory",
                                  "value": "order"
                                },
                                "id": 489,
                                "name": "Identifier",
                                "src": "1259:5:2"
                              }
                            ],
                            "id": 490,
                            "name": "MemberAccess",
                            "src": "1259:11:2"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "assetType",
                              "referencedDeclaration": 4649,
                              "type": "struct LibAsset.AssetType memory"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "makeAsset",
                                  "referencedDeclaration": 1217,
                                  "type": "struct LibAsset.Asset memory"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 454,
                                      "type": "struct LibOrder.Order memory",
                                      "value": "order"
                                    },
                                    "id": 491,
                                    "name": "Identifier",
                                    "src": "1272:5:2"
                                  }
                                ],
                                "id": 492,
                                "name": "MemberAccess",
                                "src": "1272:15:2"
                              }
                            ],
                            "id": 493,
                            "name": "MemberAccess",
                            "src": "1272:25:2"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "assetType",
                              "referencedDeclaration": 4649,
                              "type": "struct LibAsset.AssetType memory"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "takeAsset",
                                  "referencedDeclaration": 1221,
                                  "type": "struct LibAsset.Asset memory"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 454,
                                      "type": "struct LibOrder.Order memory",
                                      "value": "order"
                                    },
                                    "id": 494,
                                    "name": "Identifier",
                                    "src": "1299:5:2"
                                  }
                                ],
                                "id": 495,
                                "name": "MemberAccess",
                                "src": "1299:15:2"
                              }
                            ],
                            "id": 496,
                            "name": "MemberAccess",
                            "src": "1299:25:2"
                          }
                        ],
                        "id": 497,
                        "name": "FunctionCall",
                        "src": "1238:87:2"
                      }
                    ],
                    "id": 498,
                    "name": "EmitStatement",
                    "src": "1233:92:2"
                  }
                ],
                "id": 499,
                "name": "Block",
                "src": "1005:327:2"
              }
            ],
            "id": 500,
            "name": "FunctionDefinition",
            "src": "951:381:2"
          },
          {
            "attributes": {
              "functionSelector": "e99a3f80",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "matchOrders",
              "scope": 862,
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "orderLeft",
                      "scope": 563,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct LibOrder.Order",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibOrder.Order",
                          "referencedDeclaration": 1232,
                          "type": "struct LibOrder.Order"
                        },
                        "id": 501,
                        "name": "UserDefinedTypeName",
                        "src": "1368:14:2"
                      }
                    ],
                    "id": 502,
                    "name": "VariableDeclaration",
                    "src": "1368:31:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "signatureLeft",
                      "scope": 563,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "bytes",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 503,
                        "name": "ElementaryTypeName",
                        "src": "1409:5:2"
                      }
                    ],
                    "id": 504,
                    "name": "VariableDeclaration",
                    "src": "1409:26:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "orderRight",
                      "scope": 563,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct LibOrder.Order",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibOrder.Order",
                          "referencedDeclaration": 1232,
                          "type": "struct LibOrder.Order"
                        },
                        "id": 505,
                        "name": "UserDefinedTypeName",
                        "src": "1445:14:2"
                      }
                    ],
                    "id": 506,
                    "name": "VariableDeclaration",
                    "src": "1445:32:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "signatureRight",
                      "scope": 563,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "bytes",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 507,
                        "name": "ElementaryTypeName",
                        "src": "1487:5:2"
                      }
                    ],
                    "id": 508,
                    "name": "VariableDeclaration",
                    "src": "1487:27:2"
                  }
                ],
                "id": 509,
                "name": "ParameterList",
                "src": "1358:162:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 510,
                "name": "ParameterList",
                "src": "1538:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 857,
                              "type": "function (struct LibOrder.Order memory,bytes memory) view",
                              "value": "validateFull"
                            },
                            "id": 511,
                            "name": "Identifier",
                            "src": "1548:12:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 502,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderLeft"
                            },
                            "id": 512,
                            "name": "Identifier",
                            "src": "1561:9:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 504,
                              "type": "bytes memory",
                              "value": "signatureLeft"
                            },
                            "id": 513,
                            "name": "Identifier",
                            "src": "1572:13:2"
                          }
                        ],
                        "id": 514,
                        "name": "FunctionCall",
                        "src": "1548:38:2"
                      }
                    ],
                    "id": 515,
                    "name": "ExpressionStatement",
                    "src": "1548:38:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 857,
                              "type": "function (struct LibOrder.Order memory,bytes memory) view",
                              "value": "validateFull"
                            },
                            "id": 516,
                            "name": "Identifier",
                            "src": "1596:12:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 506,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderRight"
                            },
                            "id": 517,
                            "name": "Identifier",
                            "src": "1609:10:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 508,
                              "type": "bytes memory",
                              "value": "signatureRight"
                            },
                            "id": 518,
                            "name": "Identifier",
                            "src": "1621:14:2"
                          }
                        ],
                        "id": 519,
                        "name": "FunctionCall",
                        "src": "1596:40:2"
                      }
                    ],
                    "id": 520,
                    "name": "ExpressionStatement",
                    "src": "1596:40:2"
                  },
                  {
                    "attributes": {},
                    "children": [
                      {
                        "attributes": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "taker",
                              "referencedDeclaration": 1219,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 502,
                                  "type": "struct LibOrder.Order memory",
                                  "value": "orderLeft"
                                },
                                "id": 521,
                                "name": "Identifier",
                                "src": "1650:9:2"
                              }
                            ],
                            "id": 522,
                            "name": "MemberAccess",
                            "src": "1650:15:2"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "address payable",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "address"
                                    },
                                    "id": 523,
                                    "name": "ElementaryTypeName",
                                    "src": "1669:7:2"
                                  }
                                ],
                                "id": 524,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1669:7:2"
                              },
                              {
                                "attributes": {
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 525,
                                "name": "Literal",
                                "src": "1677:1:2"
                              }
                            ],
                            "id": 526,
                            "name": "FunctionCall",
                            "src": "1669:10:2"
                          }
                        ],
                        "id": 527,
                        "name": "BinaryOperation",
                        "src": "1650:29:2"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        },
                                        {
                                          "typeIdentifier": "t_stringliteral_e2988d5921d0b0b980c95629752e1ae33544ef2a29d168957ce2afee9edae127",
                                          "typeString": "literal_string \"leftOrder.taker verification failed\""
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        4294967278,
                                        4294967278
                                      ],
                                      "referencedDeclaration": 4294967278,
                                      "type": "function (bool,string memory) pure",
                                      "value": "require"
                                    },
                                    "id": 528,
                                    "name": "Identifier",
                                    "src": "1695:7:2"
                                  },
                                  {
                                    "attributes": {
                                      "commonType": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "==",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "maker",
                                          "referencedDeclaration": 1215,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 506,
                                              "type": "struct LibOrder.Order memory",
                                              "value": "orderRight"
                                            },
                                            "id": 529,
                                            "name": "Identifier",
                                            "src": "1703:10:2"
                                          }
                                        ],
                                        "id": 530,
                                        "name": "MemberAccess",
                                        "src": "1703:16:2"
                                      },
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "taker",
                                          "referencedDeclaration": 1219,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 502,
                                              "type": "struct LibOrder.Order memory",
                                              "value": "orderLeft"
                                            },
                                            "id": 531,
                                            "name": "Identifier",
                                            "src": "1723:9:2"
                                          }
                                        ],
                                        "id": 532,
                                        "name": "MemberAccess",
                                        "src": "1723:15:2"
                                      }
                                    ],
                                    "id": 533,
                                    "name": "BinaryOperation",
                                    "src": "1703:35:2"
                                  },
                                  {
                                    "attributes": {
                                      "hexvalue": "6c6566744f726465722e74616b657220766572696669636174696f6e206661696c6564",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "token": "string",
                                      "type": "literal_string \"leftOrder.taker verification failed\"",
                                      "value": "leftOrder.taker verification failed"
                                    },
                                    "id": 534,
                                    "name": "Literal",
                                    "src": "1740:37:2"
                                  }
                                ],
                                "id": 535,
                                "name": "FunctionCall",
                                "src": "1695:83:2"
                              }
                            ],
                            "id": 536,
                            "name": "ExpressionStatement",
                            "src": "1695:83:2"
                          }
                        ],
                        "id": 537,
                        "name": "Block",
                        "src": "1681:108:2"
                      }
                    ],
                    "id": 538,
                    "name": "IfStatement",
                    "src": "1646:143:2"
                  },
                  {
                    "attributes": {},
                    "children": [
                      {
                        "attributes": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "taker",
                              "referencedDeclaration": 1219,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 506,
                                  "type": "struct LibOrder.Order memory",
                                  "value": "orderRight"
                                },
                                "id": 539,
                                "name": "Identifier",
                                "src": "1802:10:2"
                              }
                            ],
                            "id": 540,
                            "name": "MemberAccess",
                            "src": "1802:16:2"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "address payable",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "address"
                                    },
                                    "id": 541,
                                    "name": "ElementaryTypeName",
                                    "src": "1822:7:2"
                                  }
                                ],
                                "id": 542,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1822:7:2"
                              },
                              {
                                "attributes": {
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 543,
                                "name": "Literal",
                                "src": "1830:1:2"
                              }
                            ],
                            "id": 544,
                            "name": "FunctionCall",
                            "src": "1822:10:2"
                          }
                        ],
                        "id": 545,
                        "name": "BinaryOperation",
                        "src": "1802:30:2"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        },
                                        {
                                          "typeIdentifier": "t_stringliteral_653ab491ff02a6248b97a43613283e04cb49bbcd2579a02dfca519158a7f6d7c",
                                          "typeString": "literal_string \"rightOrder.taker verification failed\""
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        4294967278,
                                        4294967278
                                      ],
                                      "referencedDeclaration": 4294967278,
                                      "type": "function (bool,string memory) pure",
                                      "value": "require"
                                    },
                                    "id": 546,
                                    "name": "Identifier",
                                    "src": "1848:7:2"
                                  },
                                  {
                                    "attributes": {
                                      "commonType": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "==",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "taker",
                                          "referencedDeclaration": 1219,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 506,
                                              "type": "struct LibOrder.Order memory",
                                              "value": "orderRight"
                                            },
                                            "id": 547,
                                            "name": "Identifier",
                                            "src": "1856:10:2"
                                          }
                                        ],
                                        "id": 548,
                                        "name": "MemberAccess",
                                        "src": "1856:16:2"
                                      },
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "maker",
                                          "referencedDeclaration": 1215,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 502,
                                              "type": "struct LibOrder.Order memory",
                                              "value": "orderLeft"
                                            },
                                            "id": 549,
                                            "name": "Identifier",
                                            "src": "1876:9:2"
                                          }
                                        ],
                                        "id": 550,
                                        "name": "MemberAccess",
                                        "src": "1876:15:2"
                                      }
                                    ],
                                    "id": 551,
                                    "name": "BinaryOperation",
                                    "src": "1856:35:2"
                                  },
                                  {
                                    "attributes": {
                                      "hexvalue": "72696768744f726465722e74616b657220766572696669636174696f6e206661696c6564",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "token": "string",
                                      "type": "literal_string \"rightOrder.taker verification failed\"",
                                      "value": "rightOrder.taker verification failed"
                                    },
                                    "id": 552,
                                    "name": "Literal",
                                    "src": "1893:38:2"
                                  }
                                ],
                                "id": 553,
                                "name": "FunctionCall",
                                "src": "1848:84:2"
                              }
                            ],
                            "id": 554,
                            "name": "ExpressionStatement",
                            "src": "1848:84:2"
                          }
                        ],
                        "id": 555,
                        "name": "Block",
                        "src": "1834:109:2"
                      }
                    ],
                    "id": 556,
                    "name": "IfStatement",
                    "src": "1798:145:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                },
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 761,
                              "type": "function (struct LibOrder.Order memory,struct LibOrder.Order memory)",
                              "value": "matchAndTransfer"
                            },
                            "id": 557,
                            "name": "Identifier",
                            "src": "1952:16:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 502,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderLeft"
                            },
                            "id": 558,
                            "name": "Identifier",
                            "src": "1969:9:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 506,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderRight"
                            },
                            "id": 559,
                            "name": "Identifier",
                            "src": "1980:10:2"
                          }
                        ],
                        "id": 560,
                        "name": "FunctionCall",
                        "src": "1952:39:2"
                      }
                    ],
                    "id": 561,
                    "name": "ExpressionStatement",
                    "src": "1952:39:2"
                  }
                ],
                "id": 562,
                "name": "Block",
                "src": "1538:460:2"
              }
            ],
            "id": 563,
            "name": "FunctionDefinition",
            "src": "1338:660:2"
          },
          {
            "attributes": {
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "matchAndTransfer",
              "scope": 862,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "orderLeft",
                      "scope": 761,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct LibOrder.Order",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibOrder.Order",
                          "referencedDeclaration": 1232,
                          "type": "struct LibOrder.Order"
                        },
                        "id": 564,
                        "name": "UserDefinedTypeName",
                        "src": "2030:14:2"
                      }
                    ],
                    "id": 565,
                    "name": "VariableDeclaration",
                    "src": "2030:31:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "orderRight",
                      "scope": 761,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct LibOrder.Order",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibOrder.Order",
                          "referencedDeclaration": 1232,
                          "type": "struct LibOrder.Order"
                        },
                        "id": 566,
                        "name": "UserDefinedTypeName",
                        "src": "2063:14:2"
                      }
                    ],
                    "id": 567,
                    "name": "VariableDeclaration",
                    "src": "2063:32:2"
                  }
                ],
                "id": 568,
                "name": "ParameterList",
                "src": "2029:67:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 569,
                "name": "ParameterList",
                "src": "2106:0:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        573,
                        575
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "makeMatch",
                          "scope": 760,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct LibAsset.AssetType",
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "LibAsset.AssetType",
                              "referencedDeclaration": 4647,
                              "type": "struct LibAsset.AssetType"
                            },
                            "id": 572,
                            "name": "UserDefinedTypeName",
                            "src": "2117:18:2"
                          }
                        ],
                        "id": 573,
                        "name": "VariableDeclaration",
                        "src": "2117:35:2"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "takeMatch",
                          "scope": 760,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct LibAsset.AssetType",
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "LibAsset.AssetType",
                              "referencedDeclaration": 4647,
                              "type": "struct LibAsset.AssetType"
                            },
                            "id": 574,
                            "name": "UserDefinedTypeName",
                            "src": "2154:18:2"
                          }
                        ],
                        "id": 575,
                        "name": "VariableDeclaration",
                        "src": "2154:35:2"
                      },
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple(struct LibAsset.AssetType memory,struct LibAsset.AssetType memory)",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                },
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                838,
                                76
                              ],
                              "referencedDeclaration": 838,
                              "type": "function (struct LibOrder.Order memory,struct LibOrder.Order memory) view returns (struct LibAsset.AssetType memory,struct LibAsset.AssetType memory)",
                              "value": "matchAssets"
                            },
                            "id": 576,
                            "name": "Identifier",
                            "src": "2193:11:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 565,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderLeft"
                            },
                            "id": 577,
                            "name": "Identifier",
                            "src": "2205:9:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 567,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderRight"
                            },
                            "id": 578,
                            "name": "Identifier",
                            "src": "2216:10:2"
                          }
                        ],
                        "id": 579,
                        "name": "FunctionCall",
                        "src": "2193:34:2"
                      }
                    ],
                    "id": 580,
                    "name": "VariableDeclarationStatement",
                    "src": "2116:111:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        582
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "leftOrderKeyHash",
                          "scope": 760,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 581,
                            "name": "ElementaryTypeName",
                            "src": "2237:7:2"
                          }
                        ],
                        "id": 582,
                        "name": "VariableDeclaration",
                        "src": "2237:24:2"
                      },
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "hashKey",
                              "referencedDeclaration": 1296,
                              "type": "function (struct LibOrder.Order memory) pure returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1372,
                                  "type": "type(library LibOrder)",
                                  "value": "LibOrder"
                                },
                                "id": 583,
                                "name": "Identifier",
                                "src": "2264:8:2"
                              }
                            ],
                            "id": 584,
                            "name": "MemberAccess",
                            "src": "2264:16:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 565,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderLeft"
                            },
                            "id": 585,
                            "name": "Identifier",
                            "src": "2281:9:2"
                          }
                        ],
                        "id": 586,
                        "name": "FunctionCall",
                        "src": "2264:27:2"
                      }
                    ],
                    "id": 587,
                    "name": "VariableDeclarationStatement",
                    "src": "2237:54:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        589
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "rightOrderKeyHash",
                          "scope": 760,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 588,
                            "name": "ElementaryTypeName",
                            "src": "2301:7:2"
                          }
                        ],
                        "id": 589,
                        "name": "VariableDeclaration",
                        "src": "2301:25:2"
                      },
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "hashKey",
                              "referencedDeclaration": 1296,
                              "type": "function (struct LibOrder.Order memory) pure returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1372,
                                  "type": "type(library LibOrder)",
                                  "value": "LibOrder"
                                },
                                "id": 590,
                                "name": "Identifier",
                                "src": "2329:8:2"
                              }
                            ],
                            "id": 591,
                            "name": "MemberAccess",
                            "src": "2329:16:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 567,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderRight"
                            },
                            "id": 592,
                            "name": "Identifier",
                            "src": "2346:10:2"
                          }
                        ],
                        "id": 593,
                        "name": "FunctionCall",
                        "src": "2329:28:2"
                      }
                    ],
                    "id": 594,
                    "name": "VariableDeclarationStatement",
                    "src": "2301:56:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        596
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "leftOrderFill",
                          "scope": 760,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 595,
                            "name": "ElementaryTypeName",
                            "src": "2367:4:2"
                          }
                        ],
                        "id": 596,
                        "name": "VariableDeclaration",
                        "src": "2367:18:2"
                      },
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 788,
                              "type": "function (struct LibOrder.Order memory,bytes32) view returns (uint256)",
                              "value": "getOrderFill"
                            },
                            "id": 597,
                            "name": "Identifier",
                            "src": "2388:12:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 565,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderLeft"
                            },
                            "id": 598,
                            "name": "Identifier",
                            "src": "2401:9:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 582,
                              "type": "bytes32",
                              "value": "leftOrderKeyHash"
                            },
                            "id": 599,
                            "name": "Identifier",
                            "src": "2412:16:2"
                          }
                        ],
                        "id": 600,
                        "name": "FunctionCall",
                        "src": "2388:41:2"
                      }
                    ],
                    "id": 601,
                    "name": "VariableDeclarationStatement",
                    "src": "2367:62:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        603
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "rightOrderFill",
                          "scope": 760,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 602,
                            "name": "ElementaryTypeName",
                            "src": "2439:4:2"
                          }
                        ],
                        "id": 603,
                        "name": "VariableDeclaration",
                        "src": "2439:19:2"
                      },
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 788,
                              "type": "function (struct LibOrder.Order memory,bytes32) view returns (uint256)",
                              "value": "getOrderFill"
                            },
                            "id": 604,
                            "name": "Identifier",
                            "src": "2461:12:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 567,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderRight"
                            },
                            "id": 605,
                            "name": "Identifier",
                            "src": "2474:10:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 589,
                              "type": "bytes32",
                              "value": "rightOrderKeyHash"
                            },
                            "id": 606,
                            "name": "Identifier",
                            "src": "2486:17:2"
                          }
                        ],
                        "id": 607,
                        "name": "FunctionCall",
                        "src": "2461:43:2"
                      }
                    ],
                    "id": 608,
                    "name": "VariableDeclarationStatement",
                    "src": "2439:65:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        612
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "newFill",
                          "scope": 760,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct LibFill.FillResult",
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "LibFill.FillResult",
                              "referencedDeclaration": 1068,
                              "type": "struct LibFill.FillResult"
                            },
                            "id": 611,
                            "name": "UserDefinedTypeName",
                            "src": "2514:18:2"
                          }
                        ],
                        "id": 612,
                        "name": "VariableDeclaration",
                        "src": "2514:33:2"
                      },
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "struct LibFill.FillResult memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                },
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "fillOrder",
                              "referencedDeclaration": 1130,
                              "type": "function (struct LibOrder.Order memory,struct LibOrder.Order memory,uint256,uint256) pure returns (struct LibFill.FillResult memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1201,
                                  "type": "type(library LibFill)",
                                  "value": "LibFill"
                                },
                                "id": 613,
                                "name": "Identifier",
                                "src": "2550:7:2"
                              }
                            ],
                            "id": 614,
                            "name": "MemberAccess",
                            "src": "2550:17:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 565,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderLeft"
                            },
                            "id": 615,
                            "name": "Identifier",
                            "src": "2568:9:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 567,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderRight"
                            },
                            "id": 616,
                            "name": "Identifier",
                            "src": "2579:10:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 596,
                              "type": "uint256",
                              "value": "leftOrderFill"
                            },
                            "id": 617,
                            "name": "Identifier",
                            "src": "2591:13:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 603,
                              "type": "uint256",
                              "value": "rightOrderFill"
                            },
                            "id": 618,
                            "name": "Identifier",
                            "src": "2606:14:2"
                          }
                        ],
                        "id": 619,
                        "name": "FunctionCall",
                        "src": "2550:71:2"
                      }
                    ],
                    "id": 620,
                    "name": "VariableDeclarationStatement",
                    "src": "2514:107:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_99c54eb9ed32adddd848a8e2315700764966121b5fb51bdbca14d8852017582f",
                                  "typeString": "literal_string \"nothing to fill\""
                                }
                              ],
                              "overloadedDeclarations": [
                                4294967278,
                                4294967278
                              ],
                              "referencedDeclaration": 4294967278,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 621,
                            "name": "Identifier",
                            "src": "2631:7:2"
                          },
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "takeValue",
                                  "referencedDeclaration": 1067,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 612,
                                      "type": "struct LibFill.FillResult memory",
                                      "value": "newFill"
                                    },
                                    "id": 622,
                                    "name": "Identifier",
                                    "src": "2639:7:2"
                                  }
                                ],
                                "id": 623,
                                "name": "MemberAccess",
                                "src": "2639:17:2"
                              },
                              {
                                "attributes": {
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 624,
                                "name": "Literal",
                                "src": "2659:1:2"
                              }
                            ],
                            "id": 625,
                            "name": "BinaryOperation",
                            "src": "2639:21:2"
                          },
                          {
                            "attributes": {
                              "hexvalue": "6e6f7468696e6720746f2066696c6c",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "string",
                              "type": "literal_string \"nothing to fill\"",
                              "value": "nothing to fill"
                            },
                            "id": 626,
                            "name": "Literal",
                            "src": "2662:17:2"
                          }
                        ],
                        "id": 627,
                        "name": "FunctionCall",
                        "src": "2631:49:2"
                      }
                    ],
                    "id": 628,
                    "name": "ExpressionStatement",
                    "src": "2631:49:2"
                  },
                  {
                    "attributes": {},
                    "children": [
                      {
                        "attributes": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "salt",
                              "referencedDeclaration": 1223,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 565,
                                  "type": "struct LibOrder.Order memory",
                                  "value": "orderLeft"
                                },
                                "id": 629,
                                "name": "Identifier",
                                "src": "2695:9:2"
                              }
                            ],
                            "id": 630,
                            "name": "MemberAccess",
                            "src": "2695:14:2"
                          },
                          {
                            "attributes": {
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 631,
                            "name": "Literal",
                            "src": "2713:1:2"
                          }
                        ],
                        "id": 632,
                        "name": "BinaryOperation",
                        "src": "2695:19:2"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 424,
                                          "type": "mapping(bytes32 => uint256)",
                                          "value": "fills"
                                        },
                                        "id": 633,
                                        "name": "Identifier",
                                        "src": "2730:5:2"
                                      },
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 582,
                                          "type": "bytes32",
                                          "value": "leftOrderKeyHash"
                                        },
                                        "id": 634,
                                        "name": "Identifier",
                                        "src": "2736:16:2"
                                      }
                                    ],
                                    "id": 635,
                                    "name": "IndexAccess",
                                    "src": "2730:23:2"
                                  },
                                  {
                                    "attributes": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "+",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 596,
                                          "type": "uint256",
                                          "value": "leftOrderFill"
                                        },
                                        "id": 636,
                                        "name": "Identifier",
                                        "src": "2756:13:2"
                                      },
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "takeValue",
                                          "referencedDeclaration": 1067,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 612,
                                              "type": "struct LibFill.FillResult memory",
                                              "value": "newFill"
                                            },
                                            "id": 637,
                                            "name": "Identifier",
                                            "src": "2772:7:2"
                                          }
                                        ],
                                        "id": 638,
                                        "name": "MemberAccess",
                                        "src": "2772:17:2"
                                      }
                                    ],
                                    "id": 639,
                                    "name": "BinaryOperation",
                                    "src": "2756:33:2"
                                  }
                                ],
                                "id": 640,
                                "name": "Assignment",
                                "src": "2730:59:2"
                              }
                            ],
                            "id": 641,
                            "name": "ExpressionStatement",
                            "src": "2730:59:2"
                          }
                        ],
                        "id": 642,
                        "name": "Block",
                        "src": "2716:84:2"
                      }
                    ],
                    "id": 643,
                    "name": "IfStatement",
                    "src": "2691:109:2"
                  },
                  {
                    "attributes": {},
                    "children": [
                      {
                        "attributes": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "salt",
                              "referencedDeclaration": 1223,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 567,
                                  "type": "struct LibOrder.Order memory",
                                  "value": "orderRight"
                                },
                                "id": 644,
                                "name": "Identifier",
                                "src": "2813:10:2"
                              }
                            ],
                            "id": 645,
                            "name": "MemberAccess",
                            "src": "2813:15:2"
                          },
                          {
                            "attributes": {
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 646,
                            "name": "Literal",
                            "src": "2832:1:2"
                          }
                        ],
                        "id": 647,
                        "name": "BinaryOperation",
                        "src": "2813:20:2"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 424,
                                          "type": "mapping(bytes32 => uint256)",
                                          "value": "fills"
                                        },
                                        "id": 648,
                                        "name": "Identifier",
                                        "src": "2849:5:2"
                                      },
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 589,
                                          "type": "bytes32",
                                          "value": "rightOrderKeyHash"
                                        },
                                        "id": 649,
                                        "name": "Identifier",
                                        "src": "2855:17:2"
                                      }
                                    ],
                                    "id": 650,
                                    "name": "IndexAccess",
                                    "src": "2849:24:2"
                                  },
                                  {
                                    "attributes": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "+",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 603,
                                          "type": "uint256",
                                          "value": "rightOrderFill"
                                        },
                                        "id": 651,
                                        "name": "Identifier",
                                        "src": "2876:14:2"
                                      },
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "makeValue",
                                          "referencedDeclaration": 1065,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 612,
                                              "type": "struct LibFill.FillResult memory",
                                              "value": "newFill"
                                            },
                                            "id": 652,
                                            "name": "Identifier",
                                            "src": "2893:7:2"
                                          }
                                        ],
                                        "id": 653,
                                        "name": "MemberAccess",
                                        "src": "2893:17:2"
                                      }
                                    ],
                                    "id": 654,
                                    "name": "BinaryOperation",
                                    "src": "2876:34:2"
                                  }
                                ],
                                "id": 655,
                                "name": "Assignment",
                                "src": "2849:61:2"
                              }
                            ],
                            "id": 656,
                            "name": "ExpressionStatement",
                            "src": "2849:61:2"
                          }
                        ],
                        "id": 657,
                        "name": "Block",
                        "src": "2835:86:2"
                      }
                    ],
                    "id": 658,
                    "name": "IfStatement",
                    "src": "2809:112:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        660,
                        662
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "totalMakeValue",
                          "scope": 760,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 659,
                            "name": "ElementaryTypeName",
                            "src": "2932:4:2"
                          }
                        ],
                        "id": 660,
                        "name": "VariableDeclaration",
                        "src": "2932:19:2"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "totalTakeValue",
                          "scope": 760,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 661,
                            "name": "ElementaryTypeName",
                            "src": "2953:4:2"
                          }
                        ],
                        "id": 662,
                        "name": "VariableDeclaration",
                        "src": "2953:19:2"
                      },
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple(uint256,uint256)",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                                  "typeString": "struct LibAsset.AssetType memory"
                                },
                                {
                                  "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                                  "typeString": "struct LibAsset.AssetType memory"
                                },
                                {
                                  "typeIdentifier": "t_struct$_FillResult_$1068_memory_ptr",
                                  "typeString": "struct LibFill.FillResult memory"
                                },
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                },
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 979,
                              "type": "function (struct LibAsset.AssetType memory,struct LibAsset.AssetType memory,struct LibFill.FillResult memory,struct LibOrder.Order memory,struct LibOrder.Order memory) returns (uint256,uint256)",
                              "value": "doTransfers"
                            },
                            "id": 663,
                            "name": "Identifier",
                            "src": "2976:11:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 573,
                              "type": "struct LibAsset.AssetType memory",
                              "value": "makeMatch"
                            },
                            "id": 664,
                            "name": "Identifier",
                            "src": "2988:9:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 575,
                              "type": "struct LibAsset.AssetType memory",
                              "value": "takeMatch"
                            },
                            "id": 665,
                            "name": "Identifier",
                            "src": "2999:9:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 612,
                              "type": "struct LibFill.FillResult memory",
                              "value": "newFill"
                            },
                            "id": 666,
                            "name": "Identifier",
                            "src": "3010:7:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 565,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderLeft"
                            },
                            "id": 667,
                            "name": "Identifier",
                            "src": "3019:9:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 567,
                              "type": "struct LibOrder.Order memory",
                              "value": "orderRight"
                            },
                            "id": 668,
                            "name": "Identifier",
                            "src": "3030:10:2"
                          }
                        ],
                        "id": 669,
                        "name": "FunctionCall",
                        "src": "2976:65:2"
                      }
                    ],
                    "id": 670,
                    "name": "VariableDeclarationStatement",
                    "src": "2931:110:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "assetClass",
                              "referencedDeclaration": 4644,
                              "type": "bytes4"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 573,
                                  "type": "struct LibAsset.AssetType memory",
                                  "value": "makeMatch"
                                },
                                "id": 671,
                                "name": "Identifier",
                                "src": "3055:9:2"
                              }
                            ],
                            "id": 672,
                            "name": "MemberAccess",
                            "src": "3055:20:2"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "ETH_ASSET_CLASS",
                              "referencedDeclaration": 4608,
                              "type": "bytes4"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4695,
                                  "type": "type(library LibAsset)",
                                  "value": "LibAsset"
                                },
                                "id": 673,
                                "name": "Identifier",
                                "src": "3079:8:2"
                              }
                            ],
                            "id": 674,
                            "name": "MemberAccess",
                            "src": "3079:24:2"
                          }
                        ],
                        "id": 675,
                        "name": "BinaryOperation",
                        "src": "3055:48:2"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        4294967278,
                                        4294967278
                                      ],
                                      "referencedDeclaration": 4294967278,
                                      "type": "function (bool) pure",
                                      "value": "require"
                                    },
                                    "id": 676,
                                    "name": "Identifier",
                                    "src": "3119:7:2"
                                  },
                                  {
                                    "attributes": {
                                      "commonType": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "!=",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "assetClass",
                                          "referencedDeclaration": 4644,
                                          "type": "bytes4"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 575,
                                              "type": "struct LibAsset.AssetType memory",
                                              "value": "takeMatch"
                                            },
                                            "id": 677,
                                            "name": "Identifier",
                                            "src": "3127:9:2"
                                          }
                                        ],
                                        "id": 678,
                                        "name": "MemberAccess",
                                        "src": "3127:20:2"
                                      },
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "ETH_ASSET_CLASS",
                                          "referencedDeclaration": 4608,
                                          "type": "bytes4"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 4695,
                                              "type": "type(library LibAsset)",
                                              "value": "LibAsset"
                                            },
                                            "id": 679,
                                            "name": "Identifier",
                                            "src": "3151:8:2"
                                          }
                                        ],
                                        "id": 680,
                                        "name": "MemberAccess",
                                        "src": "3151:24:2"
                                      }
                                    ],
                                    "id": 681,
                                    "name": "BinaryOperation",
                                    "src": "3127:48:2"
                                  }
                                ],
                                "id": 682,
                                "name": "FunctionCall",
                                "src": "3119:57:2"
                              }
                            ],
                            "id": 683,
                            "name": "ExpressionStatement",
                            "src": "3119:57:2"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        },
                                        {
                                          "typeIdentifier": "t_stringliteral_f38787fedbd8f1d66c237a0aae7262ee866033b9295a240f1f05b891b71df4a6",
                                          "typeString": "literal_string \"not enough eth\""
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        4294967278,
                                        4294967278
                                      ],
                                      "referencedDeclaration": 4294967278,
                                      "type": "function (bool,string memory) pure",
                                      "value": "require"
                                    },
                                    "id": 684,
                                    "name": "Identifier",
                                    "src": "3190:7:2"
                                  },
                                  {
                                    "attributes": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": ">=",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "value",
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 4294967281,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 685,
                                            "name": "Identifier",
                                            "src": "3198:3:2"
                                          }
                                        ],
                                        "id": 686,
                                        "name": "MemberAccess",
                                        "src": "3198:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 660,
                                          "type": "uint256",
                                          "value": "totalMakeValue"
                                        },
                                        "id": 687,
                                        "name": "Identifier",
                                        "src": "3211:14:2"
                                      }
                                    ],
                                    "id": 688,
                                    "name": "BinaryOperation",
                                    "src": "3198:27:2"
                                  },
                                  {
                                    "attributes": {
                                      "hexvalue": "6e6f7420656e6f75676820657468",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "token": "string",
                                      "type": "literal_string \"not enough eth\"",
                                      "value": "not enough eth"
                                    },
                                    "id": 689,
                                    "name": "Literal",
                                    "src": "3227:16:2"
                                  }
                                ],
                                "id": 690,
                                "name": "FunctionCall",
                                "src": "3190:54:2"
                              }
                            ],
                            "id": 691,
                            "name": "ExpressionStatement",
                            "src": "3190:54:2"
                          },
                          {
                            "attributes": {},
                            "children": [
                              {
                                "attributes": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": ">",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "value",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 4294967281,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 692,
                                        "name": "Identifier",
                                        "src": "3262:3:2"
                                      }
                                    ],
                                    "id": 693,
                                    "name": "MemberAccess",
                                    "src": "3262:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 660,
                                      "type": "uint256",
                                      "value": "totalMakeValue"
                                    },
                                    "id": 694,
                                    "name": "Identifier",
                                    "src": "3274:14:2"
                                  }
                                ],
                                "id": 695,
                                "name": "BinaryOperation",
                                "src": "3262:26:2"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "tryCall": false,
                                          "type": "tuple()",
                                          "type_conversion": false
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "transferEth",
                                              "referencedDeclaration": 3017,
                                              "type": "function (address,uint256)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "isStructConstructorCall": false,
                                                  "lValueRequested": false,
                                                  "names": [
                                                    null
                                                  ],
                                                  "tryCall": false,
                                                  "type": "address",
                                                  "type_conversion": true
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": [
                                                        {
                                                          "typeIdentifier": "t_address_payable",
                                                          "typeString": "address payable"
                                                        }
                                                      ],
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "lValueRequested": false,
                                                      "type": "type(address)"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "name": "address"
                                                        },
                                                        "id": 696,
                                                        "name": "ElementaryTypeName",
                                                        "src": "3308:7:2"
                                                      }
                                                    ],
                                                    "id": 697,
                                                    "name": "ElementaryTypeNameExpression",
                                                    "src": "3308:7:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "member_name": "sender",
                                                      "type": "address payable"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4294967281,
                                                          "type": "msg",
                                                          "value": "msg"
                                                        },
                                                        "id": 698,
                                                        "name": "Identifier",
                                                        "src": "3316:3:2"
                                                      }
                                                    ],
                                                    "id": 699,
                                                    "name": "MemberAccess",
                                                    "src": "3316:10:2"
                                                  }
                                                ],
                                                "id": 700,
                                                "name": "FunctionCall",
                                                "src": "3308:19:2"
                                              }
                                            ],
                                            "id": 701,
                                            "name": "MemberAccess",
                                            "src": "3308:31:2"
                                          },
                                          {
                                            "attributes": {
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "operator": "-",
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "value",
                                                  "type": "uint256"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 4294967281,
                                                      "type": "msg",
                                                      "value": "msg"
                                                    },
                                                    "id": 702,
                                                    "name": "Identifier",
                                                    "src": "3340:3:2"
                                                  }
                                                ],
                                                "id": 703,
                                                "name": "MemberAccess",
                                                "src": "3340:9:2"
                                              },
                                              {
                                                "attributes": {
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 660,
                                                  "type": "uint256",
                                                  "value": "totalMakeValue"
                                                },
                                                "id": 704,
                                                "name": "Identifier",
                                                "src": "3352:14:2"
                                              }
                                            ],
                                            "id": 705,
                                            "name": "BinaryOperation",
                                            "src": "3340:26:2"
                                          }
                                        ],
                                        "id": 706,
                                        "name": "FunctionCall",
                                        "src": "3308:59:2"
                                      }
                                    ],
                                    "id": 707,
                                    "name": "ExpressionStatement",
                                    "src": "3308:59:2"
                                  }
                                ],
                                "id": 708,
                                "name": "Block",
                                "src": "3290:92:2"
                              }
                            ],
                            "id": 709,
                            "name": "IfStatement",
                            "src": "3258:124:2"
                          }
                        ],
                        "id": 710,
                        "name": "Block",
                        "src": "3105:287:2"
                      },
                      {
                        "attributes": {},
                        "children": [
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "assetClass",
                                  "referencedDeclaration": 4644,
                                  "type": "bytes4"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 575,
                                      "type": "struct LibAsset.AssetType memory",
                                      "value": "takeMatch"
                                    },
                                    "id": 711,
                                    "name": "Identifier",
                                    "src": "3402:9:2"
                                  }
                                ],
                                "id": 712,
                                "name": "MemberAccess",
                                "src": "3402:20:2"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "ETH_ASSET_CLASS",
                                  "referencedDeclaration": 4608,
                                  "type": "bytes4"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4695,
                                      "type": "type(library LibAsset)",
                                      "value": "LibAsset"
                                    },
                                    "id": 713,
                                    "name": "Identifier",
                                    "src": "3426:8:2"
                                  }
                                ],
                                "id": 714,
                                "name": "MemberAccess",
                                "src": "3426:24:2"
                              }
                            ],
                            "id": 715,
                            "name": "BinaryOperation",
                            "src": "3402:48:2"
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "tryCall": false,
                                      "type": "tuple()",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_bool",
                                              "typeString": "bool"
                                            },
                                            {
                                              "typeIdentifier": "t_stringliteral_f38787fedbd8f1d66c237a0aae7262ee866033b9295a240f1f05b891b71df4a6",
                                              "typeString": "literal_string \"not enough eth\""
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            4294967278,
                                            4294967278
                                          ],
                                          "referencedDeclaration": 4294967278,
                                          "type": "function (bool,string memory) pure",
                                          "value": "require"
                                        },
                                        "id": 716,
                                        "name": "Identifier",
                                        "src": "3466:7:2"
                                      },
                                      {
                                        "attributes": {
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": ">=",
                                          "type": "bool"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "value",
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 4294967281,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 717,
                                                "name": "Identifier",
                                                "src": "3474:3:2"
                                              }
                                            ],
                                            "id": 718,
                                            "name": "MemberAccess",
                                            "src": "3474:9:2"
                                          },
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 662,
                                              "type": "uint256",
                                              "value": "totalTakeValue"
                                            },
                                            "id": 719,
                                            "name": "Identifier",
                                            "src": "3487:14:2"
                                          }
                                        ],
                                        "id": 720,
                                        "name": "BinaryOperation",
                                        "src": "3474:27:2"
                                      },
                                      {
                                        "attributes": {
                                          "hexvalue": "6e6f7420656e6f75676820657468",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "token": "string",
                                          "type": "literal_string \"not enough eth\"",
                                          "value": "not enough eth"
                                        },
                                        "id": 721,
                                        "name": "Literal",
                                        "src": "3503:16:2"
                                      }
                                    ],
                                    "id": 722,
                                    "name": "FunctionCall",
                                    "src": "3466:54:2"
                                  }
                                ],
                                "id": 723,
                                "name": "ExpressionStatement",
                                "src": "3466:54:2"
                              },
                              {
                                "attributes": {},
                                "children": [
                                  {
                                    "attributes": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": ">",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "value",
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 4294967281,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 724,
                                            "name": "Identifier",
                                            "src": "3538:3:2"
                                          }
                                        ],
                                        "id": 725,
                                        "name": "MemberAccess",
                                        "src": "3538:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 662,
                                          "type": "uint256",
                                          "value": "totalTakeValue"
                                        },
                                        "id": 726,
                                        "name": "Identifier",
                                        "src": "3550:14:2"
                                      }
                                    ],
                                    "id": 727,
                                    "name": "BinaryOperation",
                                    "src": "3538:26:2"
                                  },
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "isStructConstructorCall": false,
                                              "lValueRequested": false,
                                              "names": [
                                                null
                                              ],
                                              "tryCall": false,
                                              "type": "tuple()",
                                              "type_conversion": false
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  ],
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "transferEth",
                                                  "referencedDeclaration": 3017,
                                                  "type": "function (address,uint256)"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": false,
                                                      "isStructConstructorCall": false,
                                                      "lValueRequested": false,
                                                      "names": [
                                                        null
                                                      ],
                                                      "tryCall": false,
                                                      "type": "address",
                                                      "type_conversion": true
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": [
                                                            {
                                                              "typeIdentifier": "t_address_payable",
                                                              "typeString": "address payable"
                                                            }
                                                          ],
                                                          "isConstant": false,
                                                          "isLValue": false,
                                                          "isPure": true,
                                                          "lValueRequested": false,
                                                          "type": "type(address)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "name": "address"
                                                            },
                                                            "id": 728,
                                                            "name": "ElementaryTypeName",
                                                            "src": "3584:7:2"
                                                          }
                                                        ],
                                                        "id": 729,
                                                        "name": "ElementaryTypeNameExpression",
                                                        "src": "3584:7:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "isConstant": false,
                                                          "isLValue": false,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "member_name": "sender",
                                                          "type": "address payable"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 4294967281,
                                                              "type": "msg",
                                                              "value": "msg"
                                                            },
                                                            "id": 730,
                                                            "name": "Identifier",
                                                            "src": "3592:3:2"
                                                          }
                                                        ],
                                                        "id": 731,
                                                        "name": "MemberAccess",
                                                        "src": "3592:10:2"
                                                      }
                                                    ],
                                                    "id": 732,
                                                    "name": "FunctionCall",
                                                    "src": "3584:19:2"
                                                  }
                                                ],
                                                "id": 733,
                                                "name": "MemberAccess",
                                                "src": "3584:31:2"
                                              },
                                              {
                                                "attributes": {
                                                  "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  },
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "operator": "-",
                                                  "type": "uint256"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "member_name": "value",
                                                      "type": "uint256"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4294967281,
                                                          "type": "msg",
                                                          "value": "msg"
                                                        },
                                                        "id": 734,
                                                        "name": "Identifier",
                                                        "src": "3616:3:2"
                                                      }
                                                    ],
                                                    "id": 735,
                                                    "name": "MemberAccess",
                                                    "src": "3616:9:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 662,
                                                      "type": "uint256",
                                                      "value": "totalTakeValue"
                                                    },
                                                    "id": 736,
                                                    "name": "Identifier",
                                                    "src": "3628:14:2"
                                                  }
                                                ],
                                                "id": 737,
                                                "name": "BinaryOperation",
                                                "src": "3616:26:2"
                                              }
                                            ],
                                            "id": 738,
                                            "name": "FunctionCall",
                                            "src": "3584:59:2"
                                          }
                                        ],
                                        "id": 739,
                                        "name": "ExpressionStatement",
                                        "src": "3584:59:2"
                                      }
                                    ],
                                    "id": 740,
                                    "name": "Block",
                                    "src": "3566:92:2"
                                  }
                                ],
                                "id": 741,
                                "name": "IfStatement",
                                "src": "3534:124:2"
                              }
                            ],
                            "id": 742,
                            "name": "Block",
                            "src": "3452:216:2"
                          }
                        ],
                        "id": 743,
                        "name": "IfStatement",
                        "src": "3398:270:2"
                      }
                    ],
                    "id": 744,
                    "name": "IfStatement",
                    "src": "3051:617:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                                  "typeString": "struct LibAsset.AssetType memory"
                                },
                                {
                                  "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                                  "typeString": "struct LibAsset.AssetType memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 452,
                              "type": "function (bytes32,bytes32,address,address,uint256,uint256,struct LibAsset.AssetType memory,struct LibAsset.AssetType memory)",
                              "value": "Match"
                            },
                            "id": 745,
                            "name": "Identifier",
                            "src": "3682:5:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 582,
                              "type": "bytes32",
                              "value": "leftOrderKeyHash"
                            },
                            "id": 746,
                            "name": "Identifier",
                            "src": "3688:16:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 589,
                              "type": "bytes32",
                              "value": "rightOrderKeyHash"
                            },
                            "id": 747,
                            "name": "Identifier",
                            "src": "3706:17:2"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "maker",
                              "referencedDeclaration": 1215,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 565,
                                  "type": "struct LibOrder.Order memory",
                                  "value": "orderLeft"
                                },
                                "id": 748,
                                "name": "Identifier",
                                "src": "3725:9:2"
                              }
                            ],
                            "id": 749,
                            "name": "MemberAccess",
                            "src": "3725:15:2"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "maker",
                              "referencedDeclaration": 1215,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 567,
                                  "type": "struct LibOrder.Order memory",
                                  "value": "orderRight"
                                },
                                "id": 750,
                                "name": "Identifier",
                                "src": "3742:10:2"
                              }
                            ],
                            "id": 751,
                            "name": "MemberAccess",
                            "src": "3742:16:2"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "takeValue",
                              "referencedDeclaration": 1067,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 612,
                                  "type": "struct LibFill.FillResult memory",
                                  "value": "newFill"
                                },
                                "id": 752,
                                "name": "Identifier",
                                "src": "3760:7:2"
                              }
                            ],
                            "id": 753,
                            "name": "MemberAccess",
                            "src": "3760:17:2"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "makeValue",
                              "referencedDeclaration": 1065,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 612,
                                  "type": "struct LibFill.FillResult memory",
                                  "value": "newFill"
                                },
                                "id": 754,
                                "name": "Identifier",
                                "src": "3779:7:2"
                              }
                            ],
                            "id": 755,
                            "name": "MemberAccess",
                            "src": "3779:17:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 573,
                              "type": "struct LibAsset.AssetType memory",
                              "value": "makeMatch"
                            },
                            "id": 756,
                            "name": "Identifier",
                            "src": "3798:9:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 575,
                              "type": "struct LibAsset.AssetType memory",
                              "value": "takeMatch"
                            },
                            "id": 757,
                            "name": "Identifier",
                            "src": "3809:9:2"
                          }
                        ],
                        "id": 758,
                        "name": "FunctionCall",
                        "src": "3682:137:2"
                      }
                    ],
                    "id": 759,
                    "name": "EmitStatement",
                    "src": "3677:142:2"
                  }
                ],
                "id": 760,
                "name": "Block",
                "src": "2106:1720:2"
              }
            ],
            "id": 761,
            "name": "FunctionDefinition",
            "src": "2004:1822:2"
          },
          {
            "attributes": {
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getOrderFill",
              "scope": 862,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "order",
                      "scope": 788,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct LibOrder.Order",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibOrder.Order",
                          "referencedDeclaration": 1232,
                          "type": "struct LibOrder.Order"
                        },
                        "id": 762,
                        "name": "UserDefinedTypeName",
                        "src": "3854:14:2"
                      }
                    ],
                    "id": 763,
                    "name": "VariableDeclaration",
                    "src": "3854:27:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "hash",
                      "scope": 788,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 764,
                        "name": "ElementaryTypeName",
                        "src": "3883:7:2"
                      }
                    ],
                    "id": 765,
                    "name": "VariableDeclaration",
                    "src": "3883:12:2"
                  }
                ],
                "id": 766,
                "name": "ParameterList",
                "src": "3853:43:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "fill",
                      "scope": 788,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 767,
                        "name": "ElementaryTypeName",
                        "src": "3920:4:2"
                      }
                    ],
                    "id": 768,
                    "name": "VariableDeclaration",
                    "src": "3920:9:2"
                  }
                ],
                "id": 769,
                "name": "ParameterList",
                "src": "3919:11:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "salt",
                              "referencedDeclaration": 1223,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 763,
                                  "type": "struct LibOrder.Order memory",
                                  "value": "order"
                                },
                                "id": 770,
                                "name": "Identifier",
                                "src": "3945:5:2"
                              }
                            ],
                            "id": 771,
                            "name": "MemberAccess",
                            "src": "3945:10:2"
                          },
                          {
                            "attributes": {
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 772,
                            "name": "Literal",
                            "src": "3959:1:2"
                          }
                        ],
                        "id": 773,
                        "name": "BinaryOperation",
                        "src": "3945:15:2"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 768,
                                      "type": "uint256",
                                      "value": "fill"
                                    },
                                    "id": 774,
                                    "name": "Identifier",
                                    "src": "3976:4:2"
                                  },
                                  {
                                    "attributes": {
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 775,
                                    "name": "Literal",
                                    "src": "3983:1:2"
                                  }
                                ],
                                "id": 776,
                                "name": "Assignment",
                                "src": "3976:8:2"
                              }
                            ],
                            "id": 777,
                            "name": "ExpressionStatement",
                            "src": "3976:8:2"
                          }
                        ],
                        "id": 778,
                        "name": "Block",
                        "src": "3962:33:2"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 768,
                                      "type": "uint256",
                                      "value": "fill"
                                    },
                                    "id": 779,
                                    "name": "Identifier",
                                    "src": "4015:4:2"
                                  },
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 424,
                                          "type": "mapping(bytes32 => uint256)",
                                          "value": "fills"
                                        },
                                        "id": 780,
                                        "name": "Identifier",
                                        "src": "4022:5:2"
                                      },
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 765,
                                          "type": "bytes32",
                                          "value": "hash"
                                        },
                                        "id": 781,
                                        "name": "Identifier",
                                        "src": "4028:4:2"
                                      }
                                    ],
                                    "id": 782,
                                    "name": "IndexAccess",
                                    "src": "4022:11:2"
                                  }
                                ],
                                "id": 783,
                                "name": "Assignment",
                                "src": "4015:18:2"
                              }
                            ],
                            "id": 784,
                            "name": "ExpressionStatement",
                            "src": "4015:18:2"
                          }
                        ],
                        "id": 785,
                        "name": "Block",
                        "src": "4001:43:2"
                      }
                    ],
                    "id": 786,
                    "name": "IfStatement",
                    "src": "3941:103:2"
                  }
                ],
                "id": 787,
                "name": "Block",
                "src": "3931:119:2"
              }
            ],
            "id": 788,
            "name": "FunctionDefinition",
            "src": "3832:218:2"
          },
          {
            "attributes": {
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "matchAssets",
              "scope": 862,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "orderLeft",
                      "scope": 838,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct LibOrder.Order",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibOrder.Order",
                          "referencedDeclaration": 1232,
                          "type": "struct LibOrder.Order"
                        },
                        "id": 789,
                        "name": "UserDefinedTypeName",
                        "src": "4077:14:2"
                      }
                    ],
                    "id": 790,
                    "name": "VariableDeclaration",
                    "src": "4077:31:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "orderRight",
                      "scope": 838,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct LibOrder.Order",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibOrder.Order",
                          "referencedDeclaration": 1232,
                          "type": "struct LibOrder.Order"
                        },
                        "id": 791,
                        "name": "UserDefinedTypeName",
                        "src": "4110:14:2"
                      }
                    ],
                    "id": 792,
                    "name": "VariableDeclaration",
                    "src": "4110:32:2"
                  }
                ],
                "id": 793,
                "name": "ParameterList",
                "src": "4076:67:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "makeMatch",
                      "scope": 838,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct LibAsset.AssetType",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibAsset.AssetType",
                          "referencedDeclaration": 4647,
                          "type": "struct LibAsset.AssetType"
                        },
                        "id": 794,
                        "name": "UserDefinedTypeName",
                        "src": "4167:18:2"
                      }
                    ],
                    "id": 795,
                    "name": "VariableDeclaration",
                    "src": "4167:35:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "takeMatch",
                      "scope": 838,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct LibAsset.AssetType",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibAsset.AssetType",
                          "referencedDeclaration": 4647,
                          "type": "struct LibAsset.AssetType"
                        },
                        "id": 796,
                        "name": "UserDefinedTypeName",
                        "src": "4204:18:2"
                      }
                    ],
                    "id": 797,
                    "name": "VariableDeclaration",
                    "src": "4204:35:2"
                  }
                ],
                "id": 798,
                "name": "ParameterList",
                "src": "4166:74:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct LibAsset.AssetType memory"
                        },
                        "children": [
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 795,
                              "type": "struct LibAsset.AssetType memory",
                              "value": "makeMatch"
                            },
                            "id": 799,
                            "name": "Identifier",
                            "src": "4251:9:2"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "struct LibAsset.AssetType memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                                      "typeString": "struct LibAsset.AssetType memory"
                                    },
                                    {
                                      "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                                      "typeString": "struct LibAsset.AssetType memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    838,
                                    76
                                  ],
                                  "referencedDeclaration": 76,
                                  "type": "function (struct LibAsset.AssetType memory,struct LibAsset.AssetType memory) view returns (struct LibAsset.AssetType memory)",
                                  "value": "matchAssets"
                                },
                                "id": 800,
                                "name": "Identifier",
                                "src": "4263:11:2"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "assetType",
                                  "referencedDeclaration": 4649,
                                  "type": "struct LibAsset.AssetType memory"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "makeAsset",
                                      "referencedDeclaration": 1217,
                                      "type": "struct LibAsset.Asset memory"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 790,
                                          "type": "struct LibOrder.Order memory",
                                          "value": "orderLeft"
                                        },
                                        "id": 801,
                                        "name": "Identifier",
                                        "src": "4275:9:2"
                                      }
                                    ],
                                    "id": 802,
                                    "name": "MemberAccess",
                                    "src": "4275:19:2"
                                  }
                                ],
                                "id": 803,
                                "name": "MemberAccess",
                                "src": "4275:29:2"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "assetType",
                                  "referencedDeclaration": 4649,
                                  "type": "struct LibAsset.AssetType memory"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "takeAsset",
                                      "referencedDeclaration": 1221,
                                      "type": "struct LibAsset.Asset memory"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 792,
                                          "type": "struct LibOrder.Order memory",
                                          "value": "orderRight"
                                        },
                                        "id": 804,
                                        "name": "Identifier",
                                        "src": "4306:10:2"
                                      }
                                    ],
                                    "id": 805,
                                    "name": "MemberAccess",
                                    "src": "4306:20:2"
                                  }
                                ],
                                "id": 806,
                                "name": "MemberAccess",
                                "src": "4306:30:2"
                              }
                            ],
                            "id": 807,
                            "name": "FunctionCall",
                            "src": "4263:74:2"
                          }
                        ],
                        "id": 808,
                        "name": "Assignment",
                        "src": "4251:86:2"
                      }
                    ],
                    "id": 809,
                    "name": "ExpressionStatement",
                    "src": "4251:86:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_c48362a3fad4fc10587f361cd89d92c9a72c1a6e2fe4e5c5b5aabc0b03c74327",
                                  "typeString": "literal_string \"assets don't match\""
                                }
                              ],
                              "overloadedDeclarations": [
                                4294967278,
                                4294967278
                              ],
                              "referencedDeclaration": 4294967278,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 810,
                            "name": "Identifier",
                            "src": "4347:7:2"
                          },
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "assetClass",
                                  "referencedDeclaration": 4644,
                                  "type": "bytes4"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 795,
                                      "type": "struct LibAsset.AssetType memory",
                                      "value": "makeMatch"
                                    },
                                    "id": 811,
                                    "name": "Identifier",
                                    "src": "4355:9:2"
                                  }
                                ],
                                "id": 812,
                                "name": "MemberAccess",
                                "src": "4355:20:2"
                              },
                              {
                                "attributes": {
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 813,
                                "name": "Literal",
                                "src": "4379:1:2"
                              }
                            ],
                            "id": 814,
                            "name": "BinaryOperation",
                            "src": "4355:25:2"
                          },
                          {
                            "attributes": {
                              "hexvalue": "61737365747320646f6e2774206d61746368",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "string",
                              "type": "literal_string \"assets don't match\"",
                              "value": "assets don't match"
                            },
                            "id": 815,
                            "name": "Literal",
                            "src": "4382:20:2"
                          }
                        ],
                        "id": 816,
                        "name": "FunctionCall",
                        "src": "4347:56:2"
                      }
                    ],
                    "id": 817,
                    "name": "ExpressionStatement",
                    "src": "4347:56:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct LibAsset.AssetType memory"
                        },
                        "children": [
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 797,
                              "type": "struct LibAsset.AssetType memory",
                              "value": "takeMatch"
                            },
                            "id": 818,
                            "name": "Identifier",
                            "src": "4413:9:2"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "struct LibAsset.AssetType memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                                      "typeString": "struct LibAsset.AssetType memory"
                                    },
                                    {
                                      "typeIdentifier": "t_struct$_AssetType_$4647_memory_ptr",
                                      "typeString": "struct LibAsset.AssetType memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    838,
                                    76
                                  ],
                                  "referencedDeclaration": 76,
                                  "type": "function (struct LibAsset.AssetType memory,struct LibAsset.AssetType memory) view returns (struct LibAsset.AssetType memory)",
                                  "value": "matchAssets"
                                },
                                "id": 819,
                                "name": "Identifier",
                                "src": "4425:11:2"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "assetType",
                                  "referencedDeclaration": 4649,
                                  "type": "struct LibAsset.AssetType memory"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "takeAsset",
                                      "referencedDeclaration": 1221,
                                      "type": "struct LibAsset.Asset memory"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 790,
                                          "type": "struct LibOrder.Order memory",
                                          "value": "orderLeft"
                                        },
                                        "id": 820,
                                        "name": "Identifier",
                                        "src": "4437:9:2"
                                      }
                                    ],
                                    "id": 821,
                                    "name": "MemberAccess",
                                    "src": "4437:19:2"
                                  }
                                ],
                                "id": 822,
                                "name": "MemberAccess",
                                "src": "4437:29:2"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "assetType",
                                  "referencedDeclaration": 4649,
                                  "type": "struct LibAsset.AssetType memory"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "makeAsset",
                                      "referencedDeclaration": 1217,
                                      "type": "struct LibAsset.Asset memory"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 792,
                                          "type": "struct LibOrder.Order memory",
                                          "value": "orderRight"
                                        },
                                        "id": 823,
                                        "name": "Identifier",
                                        "src": "4468:10:2"
                                      }
                                    ],
                                    "id": 824,
                                    "name": "MemberAccess",
                                    "src": "4468:20:2"
                                  }
                                ],
                                "id": 825,
                                "name": "MemberAccess",
                                "src": "4468:30:2"
                              }
                            ],
                            "id": 826,
                            "name": "FunctionCall",
                            "src": "4425:74:2"
                          }
                        ],
                        "id": 827,
                        "name": "Assignment",
                        "src": "4413:86:2"
                      }
                    ],
                    "id": 828,
                    "name": "ExpressionStatement",
                    "src": "4413:86:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_c48362a3fad4fc10587f361cd89d92c9a72c1a6e2fe4e5c5b5aabc0b03c74327",
                                  "typeString": "literal_string \"assets don't match\""
                                }
                              ],
                              "overloadedDeclarations": [
                                4294967278,
                                4294967278
                              ],
                              "referencedDeclaration": 4294967278,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 829,
                            "name": "Identifier",
                            "src": "4509:7:2"
                          },
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "assetClass",
                                  "referencedDeclaration": 4644,
                                  "type": "bytes4"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 797,
                                      "type": "struct LibAsset.AssetType memory",
                                      "value": "takeMatch"
                                    },
                                    "id": 830,
                                    "name": "Identifier",
                                    "src": "4517:9:2"
                                  }
                                ],
                                "id": 831,
                                "name": "MemberAccess",
                                "src": "4517:20:2"
                              },
                              {
                                "attributes": {
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 832,
                                "name": "Literal",
                                "src": "4541:1:2"
                              }
                            ],
                            "id": 833,
                            "name": "BinaryOperation",
                            "src": "4517:25:2"
                          },
                          {
                            "attributes": {
                              "hexvalue": "61737365747320646f6e2774206d61746368",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "string",
                              "type": "literal_string \"assets don't match\"",
                              "value": "assets don't match"
                            },
                            "id": 834,
                            "name": "Literal",
                            "src": "4544:20:2"
                          }
                        ],
                        "id": 835,
                        "name": "FunctionCall",
                        "src": "4509:56:2"
                      }
                    ],
                    "id": 836,
                    "name": "ExpressionStatement",
                    "src": "4509:56:2"
                  }
                ],
                "id": 837,
                "name": "Block",
                "src": "4241:331:2"
              }
            ],
            "id": 838,
            "name": "FunctionDefinition",
            "src": "4056:516:2"
          },
          {
            "attributes": {
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "validateFull",
              "scope": 862,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "order",
                      "scope": 857,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct LibOrder.Order",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "LibOrder.Order",
                          "referencedDeclaration": 1232,
                          "type": "struct LibOrder.Order"
                        },
                        "id": 839,
                        "name": "UserDefinedTypeName",
                        "src": "4600:14:2"
                      }
                    ],
                    "id": 840,
                    "name": "VariableDeclaration",
                    "src": "4600:27:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "signature",
                      "scope": 857,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "bytes",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 841,
                        "name": "ElementaryTypeName",
                        "src": "4629:5:2"
                      }
                    ],
                    "id": 842,
                    "name": "VariableDeclaration",
                    "src": "4629:22:2"
                  }
                ],
                "id": 843,
                "name": "ParameterList",
                "src": "4599:53:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 844,
                "name": "ParameterList",
                "src": "4667:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "validate",
                              "referencedDeclaration": 1371,
                              "type": "function (struct LibOrder.Order memory) view"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1372,
                                  "type": "type(library LibOrder)",
                                  "value": "LibOrder"
                                },
                                "id": 845,
                                "name": "Identifier",
                                "src": "4677:8:2"
                              }
                            ],
                            "id": 847,
                            "name": "MemberAccess",
                            "src": "4677:17:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 840,
                              "type": "struct LibOrder.Order memory",
                              "value": "order"
                            },
                            "id": 848,
                            "name": "Identifier",
                            "src": "4695:5:2"
                          }
                        ],
                        "id": 849,
                        "name": "FunctionCall",
                        "src": "4677:24:2"
                      }
                    ],
                    "id": 850,
                    "name": "ExpressionStatement",
                    "src": "4677:24:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Order_$1232_memory_ptr",
                                  "typeString": "struct LibOrder.Order memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1660,
                              "type": "function (struct LibOrder.Order memory,bytes memory) view",
                              "value": "validate"
                            },
                            "id": 851,
                            "name": "Identifier",
                            "src": "4711:8:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 840,
                              "type": "struct LibOrder.Order memory",
                              "value": "order"
                            },
                            "id": 852,
                            "name": "Identifier",
                            "src": "4720:5:2"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 842,
                              "type": "bytes memory",
                              "value": "signature"
                            },
                            "id": 853,
                            "name": "Identifier",
                            "src": "4727:9:2"
                          }
                        ],
                        "id": 854,
                        "name": "FunctionCall",
                        "src": "4711:26:2"
                      }
                    ],
                    "id": 855,
                    "name": "ExpressionStatement",
                    "src": "4711:26:2"
                  }
                ],
                "id": 856,
                "name": "Block",
                "src": "4667:77:2"
              }
            ],
            "id": 857,
            "name": "FunctionDefinition",
            "src": "4578:166:2"
          },
          {
            "attributes": {
              "constant": false,
              "mutability": "mutable",
              "name": "__gap",
              "scope": 862,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256[49]",
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "type": "uint256[49]"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 858,
                    "name": "ElementaryTypeName",
                    "src": "4750:7:2"
                  },
                  {
                    "attributes": {
                      "hexvalue": "3439",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "token": "number",
                      "type": "int_const 49",
                      "value": "49"
                    },
                    "id": 859,
                    "name": "Literal",
                    "src": "4758:2:2"
                  }
                ],
                "id": 860,
                "name": "ArrayTypeName",
                "src": "4750:11:2"
              }
            ],
            "id": 861,
            "name": "VariableDeclaration",
            "src": "4750:25:2"
          }
        ],
        "id": 862,
        "name": "ContractDefinition",
        "src": "285:4493:2"
      }
    ],
    "id": 863,
    "name": "SourceUnit",
    "src": "33:4746:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.6+commit.7338295f.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.0",
  "updatedAt": "2021-06-08T13:19:13.367Z",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}
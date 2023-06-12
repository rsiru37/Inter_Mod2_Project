const jsonRpcURL = 'http://127.0.0.1:8545/'; 
const web3 = new Web3(jsonRpcURL)
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const abi=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_unlockTime",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "when",
				"type": "uint256"
			}
		],
		"name": "Withdrawal",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "m1",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "m2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlockTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const contract = new web3.eth.Contract(abi, contractAddress)
var val1 = await contract.methods.m1().call();
//console.log(yopi);
var val2 = await contract.methods.m2().call();
//console.log(val2)
document.getElementById("test1").innerText=val1+" -> from function m1()";
document.getElementById("test2").innerText=val2+" -> from function m2()";
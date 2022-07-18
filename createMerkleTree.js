const {MerkleTree} = require('merkletreejs');
const SHA256 = require('crypto-js/sha256');
const keccak256 = require('keccak256');
let userAddresses= [
    "0x79183f11c30B559E57c074624e792bA20Ad84010",
    "0x2e82Ab117e8879c7D5969Cf8C3b76031efDE1f93",
    "0xB4c3B6CF06e162857b96de1186a5A69901caEf3b",
    "0xfe2589D503696026C6e9e5596390809ac11Bb657"


]

const leafNodes = userAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes,keccak256,{sortPairs:true});
const rootHash = merkleTree.getRoot();
const leaf = keccak256('0x79183f11c30B559E57c074624e792bA20Ad84010')
const proof = merkleTree.getHexProof(leaf);

console.log('Merkle tree\n',merkleTree.toString('hex'));
console.log('Merkle root hash\n',rootHash.toString('hex'));
console.log('Merkle leaf\n',leaf.toString('hex')); 
console.log('Merkle proof\n',proof.toString()); 
/*let userAddresses= [
    "0x2e002B7C87144866B8b033f687c3632A9B36D4f1",
    "0x83A80A0748d74CB37a24AD85467bC273407465ac",
    "0x881dB1981024A447de677faf0434f9580012501C",
    "0xe29943A18B6940Ef8c16Ae29CF2210232F5cc561",
    "0x271d74407eCE116863c0C57e8dc6c4aE8e7F98a3",
    "0x80d6d46E4f112fE926d08443053cf3C281Cd3d84",
    "0x96864AAeFA676F773a7BAf9b54Ba114aF5061E7D"

]
ganache
let userAddresses= [
    "0x2e002B7C87144866B8b033f687c3632A9B36D4f1",
    "0x83A80A0748d74CB37a24AD85467bC273407465ac",
    "0x881dB1981024A447de677faf0434f9580012501C",
    "0xe29943A18B6940Ef8c16Ae29CF2210232F5cc561"

]
.///// javascript vm remix
let userAddresses= [
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
    "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB"

]
////////
///polygon testnet 
let userAddresses= [
    "0x79183f11c30B559E57c074624e792bA20Ad84010",
    "0x2e82Ab117e8879c7D5969Cf8C3b76031efDE1f93",
    "0xB4c3B6CF06e162857b96de1186a5A69901caEf3b",
    "0xfe2589D503696026C6e9e5596390809ac11Bb657"

]

*/
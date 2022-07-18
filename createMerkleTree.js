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

# votingv2

## Requirement

1. npm
2. truffle suite (blockchain environment)
3. Metamask(create or connect to blockchain wallet)
4. Infura(using infura API to connect to Infura blockchain network.

## Directory Structure

* contracts/ — Folder holding all of the Contracts. DO NOT DELETE Migrations.sol
* migrations/ — Folder holding Migration files, which help you deploy your smart contracts into the Blockchain.
* src/ — holds the HTML/CSS and Javascript files for the application
* truffle.js — Truffle Configuration file
* build/ — You won’t see this folder until you compile your contracts. This folder holds the build artifacts so don’t modify any of these files! Build artifacts describe the function and architecture of your contract and give Truffle Contracts and web3 information on how to interact with your Smart Contract in the Blockchain.

### Step untuk deploy smart contract blockchain

1. mkdir 'project name'
2. cd 'projectname'
3. npm install
4. truffle init
5. truffle compile
6. truffle migrate (deployed contract to local eth blockhain)/truffle migrate --reset --network ropsten 
7. truffle test
8. truffle migrate --reset
9. npm run dev 

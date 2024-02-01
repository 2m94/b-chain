# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

Config file (hardhat.config.js), smart contract (transactions.sol), plus a script (deploy.js) to use for deploying 

What command is used to deploy?
    npx hardhat run scripts/deploy.js --network (network name)
        Thereafter wait for it to say whether or not it compiled successfully. In a few more seconds it should give us the address where it was deployed to

ABI: Application Binary Interface- Standard way to interact between contracts in the Ethereum ecosystem. Both from outside the application and for contract to contract interaction.

1:34:35 Now we have a smart contract that'll save and store all of our transactions in the Blockchain. Now that we have created our welcome page and also deploeyed an entire Ethereum smart contract, we're now ready to connect our Ethereum contract to our react application and make it send Ethereum through the blockchain network

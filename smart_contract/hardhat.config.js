require("@nomiclabs/hardhat-waffle"); //Hardhat-waffle is a plugin for TESTING smart contracts

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/dWMI_rtJxovDTgyIAyVu9NOLor3V_7SQ',
      accounts:['51fdc17cbfebec06a8c1b88f1c4d9a1e343c71ddb55d484a80f49b33ed11d5b8']
    }
  }
};



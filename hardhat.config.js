require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x60fccc19c4f1a402459afeec6e15035d734db6fffb4956b0c597ec6a6c357a68`],
    },
  },
};

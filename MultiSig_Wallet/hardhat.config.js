require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.13",
  networks: {
    buildbear: {
      url: "https://rpc.buildbear.io/yummy-bail-prestor-organa-2eb15be3",
    },
  },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/FBQ78kiKfOGxccYAmbj6z6-fnSKVz15S",
      accounts: [`0xd05b0bd96f3c2f433725bdc59b32d63f5a90b406ca8aa40c12b6a9295b3ef982`],
    },
  },
};
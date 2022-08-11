require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        localhost: {
            chainId: 31337,
        },
        rinkeby: {
            chainId: 4,
            blockConfirmations: 6,
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
        },
    },
    gasReporter: {
        enabled: false,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    },
    solidity: { compilers: [{ version: "0.8.0" }, { version: "0.8.4" }, { version: "0.8.15" }] },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    mocha: {
        timeout: 200000, //200 sec max
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
}

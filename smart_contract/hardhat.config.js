require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks: {
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/35HzA9JrcTJFhem4mn4GGmHZgt58KvAV',
      accounts:['97846bbfdcbc3be7fa6fcfb75290a2112aff0cc2539cfe5d58abcf93590b458d']
    }
  }
}
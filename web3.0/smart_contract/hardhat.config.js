require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks: {
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/yWYLO2ZpKnBssTouOjvK4gmgbh4HQj7J',
      accounts:['eae3ca21ed68397c228e286f518a1a3f70554ba5abf1cf260da6d640fefa83cc']
    }
  }
}
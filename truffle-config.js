const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "morning differ diamond guess bleak lawsuit entire village seat what spend hamster";


module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "wss://ropsten.infura.io/ws/v3/ecf1556a8f944821910ddcb3b23be3d3")
        
      },
      
      network_id: 3
    }
  }
};


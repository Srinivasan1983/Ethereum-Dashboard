Template.accountBalanceComponent.helpers({
  accounts: function(){
    return EthAccounts.find({});
  }
});

Template.accountBalanceItem.helpers({
  name: function(){
    return this.name;
  },
  address: function(){
    return this.address;
  },
  balance: function(){
    var balanceEth = web3.fromWei(this.balance, "ether");
    return parseFloat(balanceEth).toFixed(3);
  }
});

Template.blockStatusComponent.helpers({

  latestBlockNum: function(){
    return EthBlocks.latest.number;
  },

  latestBlockHash: function(){
    return EthBlocks.latest.hash;
  },

  // address who mined recently block
  latestBlockMiner: function(){
    return EthBlocks.latest.miner;
  },

  // recent mined date
  //latestBlockDatetime: function(){
    //return unix2datetime(EthBlocks.latest.timestamp);
  //},

  // block Size
  blockSize: function(){
    return EthBlocks.latest.size;
  },

  // Transactions
  transactions: function(){
    var getTrn = EthBlocks.latest.transactions;
    if (getTrn.length == 0){
      return "Empty."
    }else{
      return getTrn;
    }
  },
  checks: function(){
    if (EthBlocks.latest.transactions.length == 0){
      return false;
    }else{
      return true;
    }
  }
});

Template.nodeStatusComponent.helpers({


  currentProvider: function(){
    return web3.currentProvider.host;
  },


  isMining: function(){
    //var isMining = web3.eth.mining;
    if (web3.eth.mining == true){
      return "True";
    }else{
      return "False";
    }
  },


  currentHashrate: function(){
    return Session.get('hashRate');
  },


  currentPeerCount: function(){
    return Session.get('peerCount');
  }

});

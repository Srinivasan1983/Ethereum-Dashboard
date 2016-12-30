initSessionVars = function(){

  Session.setDefault('isMining', false);
  Session.setDefault('hashRate', 0);
  Session.setDefault('peerCount', 0);

  var initialFundInfo = {
    amount:0,
    fAddr:0x0,
    tAddr:0x0,

};

Session.setDefault("sendEther.fundInfo", initialFundInfo);
Session.setDefault("sendEther.estimatedGas", 0);
Session.setDefault("sendEther.currentGasPrice", 0);

var initBlockInfo = {
   difficulty:0,
   extraData:0,
   gasLimit:0,
   gasUsed:0,
   hash:0x0,
   //LogsBloom:0,
   miner:0,
   nonce:0,
   number:0,
   parentHash:0x0,
   receiptRoot:0,
   sha3Uncle:0x0,
   size:0,
   stateRoot:0x0,
   timestamp:0,
   totalDifficulty:0,
   Transactions:0,
   transactionsRoot:0,
   uncles:0
}

Session.setDefault('getBlock.blockInfo', initBlockInfo)

};

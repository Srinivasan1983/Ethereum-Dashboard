Template.initProjectComponent.events({

  'click .submit': function(event) {
      event.preventDefault();

     name = projInit.projName.value;
     ownerAddress = projInit.ownerAddress.value;
     if(ownerAddress = null) {
         ownerAddress = web3.eth.defaultAccount;
     }
     amountToBeRaised = projInit.amountToBeRaised.value;
     deadlineTime = projInit.deadlineTime.value;

     projectContract = web3.eth.contract(ProjectABI);

     var n = projectContract.new(
       name,
       ownerAddress,
       amountToBeRaised,
       deadlineTime,
       {
         from: ownerAddress,
         data: projectdata,
         gas:4700000
       },function(e, contract) {
         if (typeof contract.address !== 'undefined') {
           console.log("Successfully created");
         }
       }
     )

  }
});

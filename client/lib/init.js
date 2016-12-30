web3 = new Web3();
if(!web3.currentProvider)
        web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));


        EthBlocks.init();

        EthAccounts.init();

        initSessionVars();

        observeNode();

ProjectABI = [
      {
        "constant": false,
        "inputs": [],
        "name": "getProjectParameters",
        "outputs": [
          {
            "name": "name",
            "type": "bytes32"
          },
          {
            "name": "ownerAddress",
            "type": "address"
          },
          {
            "name": "amountToBeRaised",
            "type": "uint256"
          },
          {
            "name": "deadlineTime",
            "type": "uint256"
          },
          {
            "name": "currentFundingTotal",
            "type": "uint256"
          },
          {
            "name": "stage",
            "type": "uint8"
          },
          {
            "name": "numberOfSponsors",
            "type": "uint256"
          }
        ],
        "payable": false,
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "_name",
            "type": "bytes32"
          },
          {
            "name": "_ownerAddress",
            "type": "address"
          },
          {
            "name": "_amountToBeRaised",
            "type": "uint256"
          },
          {
            "name": "_deadlineTime",
            "type": "uint256"
          }
        ],
        "payable": false,
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "projectOwnerAddress",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "sponsoredAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "sponsoredAmount",
            "type": "uint256"
          }
        ],
        "name": "SponsorshipMade",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "projectOwnerAddress",
            "type": "address"
          }
        ],
        "name": "TargetAchieved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "refundSponsoredAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "refundSponsoredAmount",
            "type": "uint256"
          }
        ],
        "name": "Refund",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "RefundAddress",
        "type": "event"
      }
    ]

web3.eth.defaultAccount  = web3.eth.accounts[0];
sponsorAddress1 = web3.eth.accounts[1];
sponsorAddress2 = web3.eth.accounts[2];

projectdata = "6060604052346100005760405160808061016383398101604090815281516020830151918301516060909301519092905b600880546c01000000000000000000000000338102819004600160a060020a03199283161790925560018690556002805486840293909304929091169190911790556003829055600481905560006005556006805460ff191690555b505050505b60c58061009e6000396000f3606060405260e060020a6000350463e5add0f38114601c575b6000565b3460005760266087565b60405180886000191681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018481526020018360038111600057815260200182815260200197505050505050505060405180910390f35b60015460025460035460045460055460065460075473ffffffffffffffffffffffffffffffffffffffff9095169460ff909116905b9091929394959656";

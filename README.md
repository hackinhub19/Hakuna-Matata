# Hakuna-Matata

Installing Dependencies:

1.Ganache
  Use Ganache as your personal blockchain for Ethereum development.It will allow you to deploy smart contracts, develop applications, and run tests.

2.Node.JS
  you need to configure your environment for developing smart contracts. The first dependency you'll need is Node Package Manager, or NPM, which comes with Node.js.
  Go to your terminal and type:
  $ node -v

3.Truffle Framework 
   Truffle Framework, which provides a suite of tools for developing Ethereum smart contacts with the Solidity programming language.
   To install truffle:
   $ npm install -g truffle@5.0.2

4.Metamask Ethereum Wallet
    to turn your web browser into a blockchain browser. Most major web browsers do not currently connect to blockchain networks, so we'll have to install a browser extension that allows them to do this. To install Metamask, visit this link or search for the Metamask Chrome plugin in the Google Chrome web store.
   
   
PROJECT SETUP:

create a project directory, and enter into it like this:

$ mkdir eth-todo-list
$ cd eth-todo-list

Now we initialize a new truffle project to develop our project like this:

$ truffle init

Now let's create a package.json file to install some development dependencies that will need for the project. You can do that from the command line like this:

$ touch package.json

You can bootstrap all of the dependencies for your project by simply copy-and-pasting the code below into your package.json file:

{
  "name": "eth-todo-list",
  "version": "1.0.0",
  "description": "Blockchain Todo List Powered By Ethereum",
  "main": "truffle-config.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "dev": "lite-server",
    "test": "echo \"Error: no test specified\" && sexit 1"
  },
  "author": "gregory@dappuniversity.com",
  "license": "ISC",
  "devDependencies": {
    "bootstrap": "4.1.3",
    "chai": "^4.1.2",
    "chai-as-promised": "^7.1.1",
    "chai-bignumber": "^2.0.2",
    "lite-server": "^2.3.0",
    "nodemon": "^1.17.3",
    "truffle": "5.0.2",
    "truffle-contract": "3.0.6"
  }
}

Now you can install the dependencies from the command line like this:

$ npm install

Now let's start developing the smart contract that will manage our todo list. We can do this by creating a new file in the contracts directory like this:

$ touch ./contracts/TodoList.sol

Inside here, let's develop our todo list smart contract. First, we'll start by specifying the version like this:

pragma solidity ^0.5.0;
Now we can declare the smart contract like this:

pragma solidity ^0.5.0;

contract TodoList {
    // Code goes here...
}

We'll simply create a state variable called taskCount to track the number of tasks like this:

pragma solidity ^0.5.0;

contract TodoList {
  uint taskCount;
}

 We can set a default value of 0 for this state variable like this:

pragma solidity ^0.5.0;

contract TodoList {
  uint taskCount = 0;
}

Now let's compile the smart contract and ensure that there are no errors:

$ truffle compile

Find the file truffle-config.js and paste the following code:

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}

Next, we'll create a migration script inside the migrations directory to deploy the smart contract to the personal blockchain network. From your project root, create a new file from the command line like this:

$ touch migrations/2_deploy_contracts.js

Inside this newly created migration file, you can use this code to deploy the smart contract:

var TodoList = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};

Now let's run this migration script from the command line like this:

$ truffle migrate
   
   
    
   
  
  

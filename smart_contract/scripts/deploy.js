//This script is used to deploy our contract
/*
const main = async ()=> {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy()

  await Transactions.deployed();

  console.log("Transactions deployed to:", transactions.address); //It's deployed, then we're given an address
  };

const runMain = async ()=>{

  try{

    await main();
    process.exit(0);
  }catch(error){
    console.error(error)
    process.exit(1)
  }
}

runMain();
*/
/*Meant to execute and deploy our contract by first calling runMain which calls "main" method 
that executes and deploys our contract*/
const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
const hre = require("hardhat");

async function main() {
    const chai=await hre.ethers.getContractFactory("chai");
    const contract=await chai.deploy(); // instance of contract 
 
    await contract.deployed();
    console.log("Address of contract:",contract.address);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  
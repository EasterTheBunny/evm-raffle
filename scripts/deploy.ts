import { ethers } from "hardhat";

async function main() {
  const SimpleRaffle = await ethers.getContractFactory("SimpleRaffle");
  const raffle = await SimpleRaffle.deploy(20);

  await raffle.deployed();

  console.log("SimpleRaffle deployed to:", raffle.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

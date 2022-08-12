import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SimpleRaffle", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshopt in every test.
  async function deployFixture() {
    const rafflePrice = 20;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const SimpleRaffle = await ethers.getContractFactory("SimpleRaffle");
    const raffle = await SimpleRaffle.deploy(rafflePrice);

    return { raffle, rafflePrice, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the correct raffle entry price", async function () {
      const { raffle, rafflePrice } = await loadFixture(deployFixture);

      expect(await raffle.price()).to.equal(rafflePrice);
    });
  });

  describe("Pick Winner", function () {
    describe("Events", function () {
      it("Should emit an event on entry", async function () {
        const { raffle, otherAccount } = await loadFixture(deployFixture);

        await expect(raffle.enter(1, { value: 20, from: otherAccount.address }))
          .to.emit(raffle, "RaffleEntry")
          .withArgs(otherAccount.address, anyValue); // We accept any value as `when` arg
      });
    });
  });
});

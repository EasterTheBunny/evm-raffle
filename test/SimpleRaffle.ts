import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SimpleRaffle", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshopt in every test.
  async function deployFixture() {
    const rafflePrice = ethers.utils.parseEther("0.00002");

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

  describe("Entries", function () {
    describe("Payable", function() {
      it("Should default to one entry when sending direct to contract", async function() {
        const { raffle, otherAccount } = await loadFixture(deployFixture);

        await expect(await otherAccount.sendTransaction({ to: raffle.address, value: ethers.utils.parseEther("0.00002") }))
          .to.emit(raffle, "RaffleEntry")
          .withArgs(otherAccount.address, 1);
      });

      it("Should revert payment for multiple entries when sending direct to contract", async function() {
        const { raffle, otherAccount } = await loadFixture(deployFixture);

        await expect(otherAccount.sendTransaction({ to: raffle.address, value: ethers.utils.parseEther("0.00004") }))
          .to.be.revertedWith("amount sent must match quantity times price");
      });

      it("Should revert payment for multiple entries not matching quantity", async function() {
        const { raffle, otherAccount } = await loadFixture(deployFixture);

        await expect(raffle.connect(otherAccount).enter(3, { value: ethers.utils.parseEther("0.00004") }))
          .to.be.revertedWith("amount sent must match quantity times price");
      });

      it("Should accept payment for multiple entries matching quantity", async function() {
        const { raffle, otherAccount } = await loadFixture(deployFixture);

        await expect(await raffle.connect(otherAccount).enter(2, { value: ethers.utils.parseEther("0.00004") }))
          .to.emit(raffle, "RaffleEntry")
          .withArgs(otherAccount.address, 2);
      });

      it("Should indicate an accurate count of entries", async function () {
        const { raffle, otherAccount } = await loadFixture(deployFixture);

        await raffle.connect(otherAccount).enter(5, { value: ethers.utils.parseEther("0.0001") })

        expect(await raffle.entryCount()).to.equal(5);
      });
    });

    describe("Events", function () {
      it("Should emit an event on entry", async function () {
        const { raffle, otherAccount } = await loadFixture(deployFixture);

        await expect(raffle.connect(otherAccount).enter(1, { value: ethers.utils.parseEther("0.00002") }))
          .to.emit(raffle, "RaffleEntry")
          .withArgs(otherAccount.address, anyValue); // We accept any value as `when` arg
      });
    });
  });

  describe("Prizes", function() {
    describe("Raffle", function () {
      it("Should increase the balance for each entry purchase", async function() {
        const { raffle, otherAccount } = await loadFixture(deployFixture);

        await raffle.connect(otherAccount).enter(2, { value: ethers.utils.parseEther("0.00004") });
        await raffle.connect(otherAccount).enter(2, { value: ethers.utils.parseEther("0.00004") });
        await raffle.connect(otherAccount).enter(2, { value: ethers.utils.parseEther("0.00004") });

        expect(await raffle.balance()).to.equal(ethers.utils.parseEther("0.00012"));
      });
      
      it("Should transfer complete balance to winner", async function() {
        const { raffle, otherAccount } = await loadFixture(deployFixture);

        await raffle.connect(otherAccount).enter(2, { value: ethers.utils.parseEther("0.00004") });
        await raffle.connect(otherAccount).enter(2, { value: ethers.utils.parseEther("0.00004") });

        await expect(await raffle.pickWinner(0))
          .to.changeEtherBalance(otherAccount, ethers.utils.parseEther("0.00008"));
      });
    });

    describe("Events", function () {
      it("Should emit an event on pick winner", async function () {
        const { raffle, otherAccount } = await loadFixture(deployFixture);

        await raffle.connect(otherAccount).enter(1, { value: ethers.utils.parseEther("0.00002") })

        await expect(await raffle.pickWinner(0))
          .to.emit(raffle, "RaffleWinner")
          .withArgs(otherAccount.address);
      });
    });
  });
});

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "KeeperCompatibleInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KeeperCompatibleInterface__factory>;
    getContractFactory(
      name: "VRFCoordinatorV2Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFCoordinatorV2Interface__factory>;
    getContractFactory(
      name: "KeeperBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KeeperBase__factory>;
    getContractFactory(
      name: "KeeperCompatible",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KeeperCompatible__factory>;
    getContractFactory(
      name: "VRFConsumerBaseV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFConsumerBaseV2__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "RaffleAutomatable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RaffleAutomatable__factory>;
    getContractFactory(
      name: "RaffleERC721Winnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RaffleERC721Winnable__factory>;
    getContractFactory(
      name: "RaffleLimitable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RaffleLimitable__factory>;
    getContractFactory(
      name: "RafflePurchaseable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RafflePurchaseable__factory>;
    getContractFactory(
      name: "RaffleVRFRandomPick",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RaffleVRFRandomPick__factory>;
    getContractFactory(
      name: "AutomatedVRFRaffle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomatedVRFRaffle__factory>;
    getContractFactory(
      name: "ERC721Raffle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Raffle__factory>;
    getContractFactory(
      name: "SimpleRaffle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleRaffle__factory>;
    getContractFactory(
      name: "VRFRaffle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFRaffle__factory>;
    getContractFactory(
      name: "Raffle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Raffle__factory>;

    getContractAt(
      name: "KeeperCompatibleInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KeeperCompatibleInterface>;
    getContractAt(
      name: "VRFCoordinatorV2Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFCoordinatorV2Interface>;
    getContractAt(
      name: "KeeperBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KeeperBase>;
    getContractAt(
      name: "KeeperCompatible",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KeeperCompatible>;
    getContractAt(
      name: "VRFConsumerBaseV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFConsumerBaseV2>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "RaffleAutomatable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RaffleAutomatable>;
    getContractAt(
      name: "RaffleERC721Winnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RaffleERC721Winnable>;
    getContractAt(
      name: "RaffleLimitable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RaffleLimitable>;
    getContractAt(
      name: "RafflePurchaseable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RafflePurchaseable>;
    getContractAt(
      name: "RaffleVRFRandomPick",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RaffleVRFRandomPick>;
    getContractAt(
      name: "AutomatedVRFRaffle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomatedVRFRaffle>;
    getContractAt(
      name: "ERC721Raffle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Raffle>;
    getContractAt(
      name: "SimpleRaffle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleRaffle>;
    getContractAt(
      name: "VRFRaffle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFRaffle>;
    getContractAt(
      name: "Raffle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Raffle>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}

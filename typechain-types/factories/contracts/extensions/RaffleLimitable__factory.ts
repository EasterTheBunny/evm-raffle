/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  RaffleLimitable,
  RaffleLimitableInterface,
} from "../../../contracts/extensions/RaffleLimitable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "purchaser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "RaffleEntry",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    name: "RaffleWinner",
    type: "event",
  },
  {
    inputs: [],
    name: "entryCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "entryLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class RaffleLimitable__factory {
  static readonly abi = _abi;
  static createInterface(): RaffleLimitableInterface {
    return new utils.Interface(_abi) as RaffleLimitableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RaffleLimitable {
    return new Contract(address, _abi, signerOrProvider) as RaffleLimitable;
  }
}

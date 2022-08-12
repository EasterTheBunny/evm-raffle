/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  RafflePurchaseable,
  RafflePurchaseableInterface,
} from "../../../contracts/extensions/RafflePurchaseable";

const _abi = [
  {
    inputs: [],
    name: "balance",
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
    name: "price",
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

export class RafflePurchaseable__factory {
  static readonly abi = _abi;
  static createInterface(): RafflePurchaseableInterface {
    return new utils.Interface(_abi) as RafflePurchaseableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RafflePurchaseable {
    return new Contract(address, _abi, signerOrProvider) as RafflePurchaseable;
  }
}

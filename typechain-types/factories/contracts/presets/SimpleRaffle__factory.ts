/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleRaffle,
  SimpleRaffleInterface,
} from "../../../contracts/presets/SimpleRaffle";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entryCost_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
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
    stateMutability: "payable",
    type: "fallback",
  },
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
    inputs: [
      {
        internalType: "uint256",
        name: "qnty",
        type: "uint256",
      },
    ],
    name: "enter",
    outputs: [],
    stateMutability: "payable",
    type: "function",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
    ],
    name: "pickWinner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610d65380380610d6583398181016040528101906100329190610162565b61004e61004361005b60201b60201c565b61006360201b60201c565b806004819055505061018f565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b6000819050919050565b61013f8161012c565b811461014a57600080fd5b50565b60008151905061015c81610136565b92915050565b60006020828403121561017857610177610127565b5b60006101868482850161014d565b91505092915050565b610bc78061019e6000396000f3fe60806040526004361061007f5760003560e01c8063a59f3e0c1161004e578063a59f3e0c14610134578063b69ef8a814610150578063f2fde38b1461017b578063f737d21d146101a457610090565b80630cbb0f831461009c578063715018a6146100c75780638da5cb5b146100de578063a035b1fe1461010957610090565b366100905761008e60016101e1565b005b61009a60016101e1565b005b3480156100a857600080fd5b506100b16101f6565b6040516100be91906107b4565b60405180910390f35b3480156100d357600080fd5b506100dc610203565b005b3480156100ea57600080fd5b506100f3610217565b6040516101009190610810565b60405180910390f35b34801561011557600080fd5b5061011e610240565b60405161012b91906107b4565b60405180910390f35b61014e6004803603810190610149919061085c565b610246565b005b34801561015c57600080fd5b50610165610252565b60405161017291906107b4565b60405180910390f35b34801561018757600080fd5b506101a2600480360381019061019d91906108b5565b610258565b005b3480156101b057600080fd5b506101cb60048036038101906101c6919061085c565b6102db565b6040516101d89190610810565b60405180910390f35b6101ea81610304565b6101f381610339565b50565b6000600280549050905090565b61020b61043e565b61021560006104bc565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60045481565b61024f816101e1565b50565b60035481565b61026061043e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036102cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c690610965565b60405180910390fd5b6102d8816104bc565b50565b60006102e561043e565b60006102f083610580565b90506102fb81610680565b80915050919050565b6004548161031291906109b4565b341461031d57600080fd5b346003600082825461032f9190610a0e565b9250508190555050565b60005b818110156103ec57600260405180602001604052803373ffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505080806103e490610a42565b91505061033c565b503373ffffffffffffffffffffffffffffffffffffffff167f412ce78c3d80a4d700404d6b23bd33bc193f83ac3caeefb9cdd3003aceb09f6a8260405161043391906107b4565b60405180910390a250565b6104466106ea565b73ffffffffffffffffffffffffffffffffffffffff16610464610217565b73ffffffffffffffffffffffffffffffffffffffff16146104ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b190610ad6565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808210158015610596575060028054905082105b6105d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105cc90610b42565b60405180910390fd5b6000600283815481106105eb576105ea610b62565b5b906000526020600020016040518060200160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905060026000610666919061073c565b61067381600001516106f2565b8060000151915050919050565b610688610738565b6000600354905060006003819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156106dd573d6000803e3d6000fd5b506106e661073a565b5050565b600033905090565b8073ffffffffffffffffffffffffffffffffffffffff167f16d6ae18ca26331fba5a8b53b0749a009d33b172b68a49d64a767782f5b6010360405160405180910390a250565b565b565b508054600082559060005260206000209081019061075a919061075d565b50565b5b8082111561079757600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555060010161075e565b5090565b6000819050919050565b6107ae8161079b565b82525050565b60006020820190506107c960008301846107a5565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107fa826107cf565b9050919050565b61080a816107ef565b82525050565b60006020820190506108256000830184610801565b92915050565b600080fd5b6108398161079b565b811461084457600080fd5b50565b60008135905061085681610830565b92915050565b6000602082840312156108725761087161082b565b5b600061088084828501610847565b91505092915050565b610892816107ef565b811461089d57600080fd5b50565b6000813590506108af81610889565b92915050565b6000602082840312156108cb576108ca61082b565b5b60006108d9848285016108a0565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061094f6026836108e2565b915061095a826108f3565b604082019050919050565b6000602082019050818103600083015261097e81610942565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006109bf8261079b565b91506109ca8361079b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610a0357610a02610985565b5b828202905092915050565b6000610a198261079b565b9150610a248361079b565b9250828201905080821115610a3c57610a3b610985565b5b92915050565b6000610a4d8261079b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610a7f57610a7e610985565b5b600182019050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610ac06020836108e2565b9150610acb82610a8a565b602082019050919050565b60006020820190508181036000830152610aef81610ab3565b9050919050565b7f77696e6e6572206f7574206f6620626f756e6473000000000000000000000000600082015250565b6000610b2c6014836108e2565b9150610b3782610af6565b602082019050919050565b60006020820190508181036000830152610b5b81610b1f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220cf1114ca343f4d389d707433c0f1c2c3fb9eff18431676ae15491f0876063fd164736f6c63430008100033";

type SimpleRaffleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleRaffleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleRaffle__factory extends ContractFactory {
  constructor(...args: SimpleRaffleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    entryCost_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleRaffle> {
    return super.deploy(entryCost_, overrides || {}) as Promise<SimpleRaffle>;
  }
  override getDeployTransaction(
    entryCost_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(entryCost_, overrides || {});
  }
  override attach(address: string): SimpleRaffle {
    return super.attach(address) as SimpleRaffle;
  }
  override connect(signer: Signer): SimpleRaffle__factory {
    return super.connect(signer) as SimpleRaffle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleRaffleInterface {
    return new utils.Interface(_abi) as SimpleRaffleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleRaffle {
    return new Contract(address, _abi, signerOrProvider) as SimpleRaffle;
  }
}

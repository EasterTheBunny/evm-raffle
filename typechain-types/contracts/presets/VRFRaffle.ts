/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface VRFRaffleInterface extends utils.Interface {
  functions: {
    "balance()": FunctionFragment;
    "callbackGasLimit()": FunctionFragment;
    "enter(uint256)": FunctionFragment;
    "entryCount()": FunctionFragment;
    "gasLane()": FunctionFragment;
    "owner()": FunctionFragment;
    "pickWinner()": FunctionFragment;
    "price()": FunctionFragment;
    "randomWords(uint256)": FunctionFragment;
    "rawFulfillRandomWords(uint256,uint256[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestConfirmations()": FunctionFragment;
    "requestId()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vrfCoordinator()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "balance"
      | "callbackGasLimit"
      | "enter"
      | "entryCount"
      | "gasLane"
      | "owner"
      | "pickWinner"
      | "price"
      | "randomWords"
      | "rawFulfillRandomWords"
      | "renounceOwnership"
      | "requestConfirmations"
      | "requestId"
      | "transferOwnership"
      | "vrfCoordinator"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "balance", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "callbackGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enter",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "entryCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gasLane", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pickWinner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "price", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "randomWords",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestConfirmations",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "requestId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "vrfCoordinator",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "callbackGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "enter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entryCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gasLane", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pickWinner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "randomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestConfirmations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requestId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vrfCoordinator",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "RaffleEntry(address,uint256)": EventFragment;
    "RaffleWinner(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RaffleEntry"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RaffleWinner"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RaffleEntryEventObject {
  purchaser: string;
  quantity: BigNumber;
}
export type RaffleEntryEvent = TypedEvent<
  [string, BigNumber],
  RaffleEntryEventObject
>;

export type RaffleEntryEventFilter = TypedEventFilter<RaffleEntryEvent>;

export interface RaffleWinnerEventObject {
  winner: string;
}
export type RaffleWinnerEvent = TypedEvent<[string], RaffleWinnerEventObject>;

export type RaffleWinnerEventFilter = TypedEventFilter<RaffleWinnerEvent>;

export interface VRFRaffle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VRFRaffleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balance(overrides?: CallOverrides): Promise<[BigNumber]>;

    callbackGasLimit(overrides?: CallOverrides): Promise<[number]>;

    enter(
      qnty: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    entryCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    gasLane(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pickWinner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    price(overrides?: CallOverrides): Promise<[BigNumber]>;

    randomWords(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rawFulfillRandomWords(
      requestId: PromiseOrValue<BigNumberish>,
      randomWords: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestConfirmations(overrides?: CallOverrides): Promise<[number]>;

    requestId(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vrfCoordinator(overrides?: CallOverrides): Promise<[string]>;
  };

  balance(overrides?: CallOverrides): Promise<BigNumber>;

  callbackGasLimit(overrides?: CallOverrides): Promise<number>;

  enter(
    qnty: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  entryCount(overrides?: CallOverrides): Promise<BigNumber>;

  gasLane(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pickWinner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  price(overrides?: CallOverrides): Promise<BigNumber>;

  randomWords(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rawFulfillRandomWords(
    requestId: PromiseOrValue<BigNumberish>,
    randomWords: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestConfirmations(overrides?: CallOverrides): Promise<number>;

  requestId(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vrfCoordinator(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    balance(overrides?: CallOverrides): Promise<BigNumber>;

    callbackGasLimit(overrides?: CallOverrides): Promise<number>;

    enter(
      qnty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    entryCount(overrides?: CallOverrides): Promise<BigNumber>;

    gasLane(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pickWinner(overrides?: CallOverrides): Promise<void>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    randomWords(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: PromiseOrValue<BigNumberish>,
      randomWords: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requestConfirmations(overrides?: CallOverrides): Promise<number>;

    requestId(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    vrfCoordinator(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "RaffleEntry(address,uint256)"(
      purchaser?: PromiseOrValue<string> | null,
      quantity?: null
    ): RaffleEntryEventFilter;
    RaffleEntry(
      purchaser?: PromiseOrValue<string> | null,
      quantity?: null
    ): RaffleEntryEventFilter;

    "RaffleWinner(address)"(
      winner?: PromiseOrValue<string> | null
    ): RaffleWinnerEventFilter;
    RaffleWinner(
      winner?: PromiseOrValue<string> | null
    ): RaffleWinnerEventFilter;
  };

  estimateGas: {
    balance(overrides?: CallOverrides): Promise<BigNumber>;

    callbackGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    enter(
      qnty: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    entryCount(overrides?: CallOverrides): Promise<BigNumber>;

    gasLane(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pickWinner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    randomWords(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: PromiseOrValue<BigNumberish>,
      randomWords: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestConfirmations(overrides?: CallOverrides): Promise<BigNumber>;

    requestId(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vrfCoordinator(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callbackGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enter(
      qnty: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    entryCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gasLane(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pickWinner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    randomWords(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rawFulfillRandomWords(
      requestId: PromiseOrValue<BigNumberish>,
      randomWords: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestConfirmations(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vrfCoordinator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

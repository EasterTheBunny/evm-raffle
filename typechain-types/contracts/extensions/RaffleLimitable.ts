/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface RaffleLimitableInterface extends utils.Interface {
  functions: {
    "entryCount()": FunctionFragment;
    "entryLimit()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "entryCount" | "entryLimit"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "entryCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "entryLimit",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "entryCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entryLimit", data: BytesLike): Result;

  events: {
    "RaffleEntry(address,uint256)": EventFragment;
    "RaffleWinner(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RaffleEntry"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RaffleWinner"): EventFragment;
}

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

export interface RaffleLimitable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RaffleLimitableInterface;

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
    entryCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    entryLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  entryCount(overrides?: CallOverrides): Promise<BigNumber>;

  entryLimit(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    entryCount(overrides?: CallOverrides): Promise<BigNumber>;

    entryLimit(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
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
    entryCount(overrides?: CallOverrides): Promise<BigNumber>;

    entryLimit(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    entryCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    entryLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

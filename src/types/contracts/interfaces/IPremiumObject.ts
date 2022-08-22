/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
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

export declare namespace IPremiumObject {
  export type SizeStruct = {
    x: BigNumberish;
    y: BigNumberish;
    z: BigNumberish;
  };

  export type SizeStructOutput = [number, number, number] & {
    x: number;
    y: number;
    z: number;
  };
}

export interface IPremiumObjectInterface extends utils.Interface {
  functions: {
    "balanceOf(address,uint256)": FunctionFragment;
    "batchBuyObjectFromShop(address,uint256[])": FunctionFragment;
    "getObjectsPrice(uint256[])": FunctionFragment;
    "getSize(uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "balanceOf"
      | "batchBuyObjectFromShop"
      | "getObjectsPrice"
      | "getSize"
      | "safeTransferFrom"
      | "setOwner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchBuyObjectFromShop",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getObjectsPrice",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getSize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchBuyObjectFromShop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getObjectsPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;

  events: {};
}

export interface IPremiumObject extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPremiumObjectInterface;

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
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    batchBuyObjectFromShop(
      to: string,
      tokenIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getObjectsPrice(
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSize(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[IPremiumObject.SizeStructOutput]>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOf(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  batchBuyObjectFromShop(
    to: string,
    tokenIds: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getObjectsPrice(
    tokenIds: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSize(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IPremiumObject.SizeStructOutput>;

  safeTransferFrom(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    batchBuyObjectFromShop(
      to: string,
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    getObjectsPrice(
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSize(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IPremiumObject.SizeStructOutput>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    batchBuyObjectFromShop(
      to: string,
      tokenIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getObjectsPrice(
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSize(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    batchBuyObjectFromShop(
      to: string,
      tokenIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getObjectsPrice(
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSize(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
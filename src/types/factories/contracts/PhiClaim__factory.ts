/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../common";
import type { PhiClaim, PhiClaimInterface } from "../../contracts/PhiClaim";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "AllreadyClaimedObject",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "digest",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
        ],
        internalType: "struct PhiClaim.Coupon",
        name: "coupon",
        type: "tuple",
      },
    ],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "NotAdminCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Hello",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenid",
        type: "uint256",
      },
    ],
    name: "LogClaimObject",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "verifierAddress",
        type: "address",
      },
    ],
    name: "SetAdminSigner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "condition",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenid",
        type: "uint256",
      },
    ],
    name: "SetCoupon",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "checkClaimedStatus",
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
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "condition",
        type: "string",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
        ],
        internalType: "struct PhiClaim.Coupon",
        name: "coupon",
        type: "tuple",
      },
    ],
    name: "claimQuestObject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdminSigner",
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
        internalType: "string",
        name: "condition",
        type: "string",
      },
    ],
    name: "getCouponType",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "adminSigner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "phiClaimedLists",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "verifierAdderss",
        type: "address",
      },
    ],
    name: "setAdminSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "condition",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "setCouponType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600054610100900460ff16158080156100315750600054600160ff909116105b8061005c575061004a3061013260201b6109281760201c565b15801561005c575060005460ff166001145b6100c35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff1916600117905580156100e6576000805461ff0019166101001790555b801561012c576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50610141565b6001600160a01b03163b151590565b61130a806101506000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806391d1485411610097578063b6e9201011610066578063b6e9201014610223578063cb568fd414610254578063d547741f14610267578063d61108331461027a57600080fd5b806391d14854146101b457806392ca3180146101ed578063a217fddf14610200578063a4cfd20a1461020857600080fd5b8063248a9ca3116100d3578063248a9ca31461014a5780632f2ff15d1461017b57806336568abe1461018e578063485cc955146101a157600080fd5b806301ffc9a7146100fa5780630c01a2fd14610122578063183bbe8014610137575b600080fd5b61010d610108366004610e11565b6102ba565b60405190151581526020015b60405180910390f35b610135610130366004610e96565b6102f1565b005b610135610145366004610f70565b6104e1565b61016d610158366004610f8b565b60009081526065602052604090206001015490565b604051908152602001610119565b610135610189366004610fa4565b6105df565b61013561019c366004610fa4565b610609565b6101356101af366004610fd0565b610695565b61010d6101c2366004610fa4565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b61016d6101fb366004611087565b61082a565b61016d600081565b6097546040516001600160a01b039091168152602001610119565b61016d6102313660046110c4565b609960209081526000938452604080852082529284528284209052825290205481565b610135610262366004611100565b610852565b610135610275366004610fa4565b610903565b61016d6102883660046110c4565b6001600160a01b0392831660009081526099602090815260408083209490951682529283528381209181529152205490565b60006001600160e01b03198216637965db0b60e01b14806102eb57506301ffc9a760e01b6001600160e01b03198316145b92915050565b3360009081526099602090815260408083206001600160a01b03891684528252808320878452909152902054859085906000190161035057604051636ed7bf2b60e11b8152336004820152602481018290526044015b60405180910390fd5b33321461035c57600080fd5b6000879050600088609a8888604051610376929190611145565b908152604080519182900360209081018320546001600160a01b03909416908301528101919091523360608201526080016040516020818303038152906040528051906020012090506103c98186610937565b6104155760405162461bcd60e51b815260206004820152600e60248201527f496e76616c696420636f75706f6e0000000000000000000000000000000000006044820152606401610347565b3360008181526099602090815260408083206001600160a01b038e811685529083528184208d8552909252918290206001905590516303e09ed960e21b81526004810192909252602482018a9052831690630f827b6490604401600060405180830381600087803b15801561048957600080fd5b505af115801561049d573d6000803e3d6000fd5b50506040518a81523392507fa7257a8b02d81b3fb6715b360a5b4f02dcdc4a4b36e79108b7738ee77706d8cb915060200160405180910390a2505050505050505050565b3360009081527fffdfc1249c027f9191656349feb0761381bb32c9f557e01f419fd08754bf5a1b602052604090205460ff1661053257604051631a35241360e31b8152336004820152602401610347565b6001600160a01b0381166105885760405162461bcd60e51b815260206004820152601360248201527f63616e74207365742061646472657373283029000000000000000000000000006044820152606401610347565b6097805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040517fe962aa622975becd620ca7b16db507022a2b43cc5657b30c4b907a7ecfb8042590600090a250565b6000828152606560205260409020600101546105fa81610a26565b6106048383610a33565b505050565b6001600160a01b03811633146106875760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610347565b6106918282610ad5565b5050565b600054610100900460ff16158080156106b55750600054600160ff909116105b806106cf5750303b1580156106cf575060005460ff166001145b6107415760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610347565b6000805460ff191660011790558015610764576000805461ff0019166101001790555b6001600160a01b03821661077757600080fd5b6097805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384161790556107a7610b58565b6107b2600084610bd7565b600060988190556040517fbcdfe0d5b27dd186282e187525415c57ea3077c34efb39148111e4d342e7ab0e9190a18015610604576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b6000609a8260405161083c9190611185565b9081526020016040518091039020549050919050565b3360009081527fffdfc1249c027f9191656349feb0761381bb32c9f557e01f419fd08754bf5a1b602052604090205460ff166108a357604051631a35241360e31b8152336004820152602401610347565b80609a836040516108b49190611185565b9081526020016040518091039020819055507fd48ea628c05cf728666ea64aa7f8a243f1b39c14c572c1bfffb231d92cba27f182826040516108f79291906111cd565b60405180910390a15050565b60008281526065602052604090206001015461091e81610a26565b6106048383610ad5565b6001600160a01b03163b151590565b60008060018484604001518560000151866020015160405160008152602001604052604051610982949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa1580156109a4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610a0e576040805163d1c36d9d60e01b81523360048201526001600160a01b03831660248201526044810186905284516064820152602085015160848201529084015160ff1660a482015260c401610347565b6097546001600160a01b039081169116149392505050565b610a308133610be1565b50565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff166106915760008281526065602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610a913390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff16156106915760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600054610100900460ff16610bd55760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610347565b565b6106918282610a33565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff1661069157610c1f816001600160a01b03166014610c61565b610c2a836020610c61565b604051602001610c3b9291906111ef565b60408051601f198184030181529082905262461bcd60e51b825261034791600401611270565b60606000610c70836002611299565b610c7b9060026112b8565b67ffffffffffffffff811115610c9357610c93610e57565b6040519080825280601f01601f191660200182016040528015610cbd576020820181803683370190505b509050600360fc1b81600081518110610cd857610cd86112d0565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610d0757610d076112d0565b60200101906001600160f81b031916908160001a9053506000610d2b846002611299565b610d369060016112b8565b90505b6001811115610dbb577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110610d7757610d776112d0565b1a60f81b828281518110610d8d57610d8d6112d0565b60200101906001600160f81b031916908160001a90535060049490941c93610db4816112e6565b9050610d39565b508315610e0a5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610347565b9392505050565b600060208284031215610e2357600080fd5b81356001600160e01b031981168114610e0a57600080fd5b80356001600160a01b0381168114610e5257600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610e9057610e90610e57565b60405290565b600080600080600085870360c0811215610eaf57600080fd5b610eb887610e3b565b955060208701359450604087013567ffffffffffffffff80821115610edc57600080fd5b818901915089601f830112610ef057600080fd5b813581811115610eff57600080fd5b8a6020828501011115610f1157600080fd5b6020929092019550909350506060605f1982011215610f2f57600080fd5b50610f38610e6d565b606087013581526080870135602082015260a087013560ff81168114610f5d57600080fd5b6040820152949793965091945092919050565b600060208284031215610f8257600080fd5b610e0a82610e3b565b600060208284031215610f9d57600080fd5b5035919050565b60008060408385031215610fb757600080fd5b82359150610fc760208401610e3b565b90509250929050565b60008060408385031215610fe357600080fd5b610fec83610e3b565b9150610fc760208401610e3b565b600082601f83011261100b57600080fd5b813567ffffffffffffffff8082111561102657611026610e57565b604051601f8301601f19908116603f0116810190828211818310171561104e5761104e610e57565b8160405283815286602085880101111561106757600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561109957600080fd5b813567ffffffffffffffff8111156110b057600080fd5b6110bc84828501610ffa565b949350505050565b6000806000606084860312156110d957600080fd5b6110e284610e3b565b92506110f060208501610e3b565b9150604084013590509250925092565b6000806040838503121561111357600080fd5b823567ffffffffffffffff81111561112a57600080fd5b61113685828601610ffa565b95602094909401359450505050565b8183823760009101908152919050565b60005b83811015611170578181015183820152602001611158565b8381111561117f576000848401525b50505050565b60008251611197818460208701611155565b9190910192915050565b600081518084526111b9816020860160208601611155565b601f01601f19169290920160200192915050565b6040815260006111e060408301856111a1565b90508260208301529392505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611227816017850160208801611155565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351611264816028840160208801611155565b01602801949350505050565b602081526000610e0a60208301846111a1565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156112b3576112b3611283565b500290565b600082198211156112cb576112cb611283565b500190565b634e487b7160e01b600052603260045260246000fd5b6000816112f5576112f5611283565b50600019019056fea164736f6c634300080d000a";

type PhiClaimConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PhiClaimConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PhiClaim__factory extends ContractFactory {
  constructor(...args: PhiClaimConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PhiClaim> {
    return super.deploy(overrides || {}) as Promise<PhiClaim>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PhiClaim {
    return super.attach(address) as PhiClaim;
  }
  override connect(signer: Signer): PhiClaim__factory {
    return super.connect(signer) as PhiClaim__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PhiClaimInterface {
    return new utils.Interface(_abi) as PhiClaimInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PhiClaim {
    return new Contract(address, _abi, signerOrProvider) as PhiClaim;
  }
}

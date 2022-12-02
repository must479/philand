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
  "0x608060405234801561001057600080fd5b50600054610100900460ff16158080156100315750600054600160ff909116105b8061005c575061004a3061013260201b610a041760201c565b15801561005c575060005460ff166001145b6100c35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff1916600117905580156100e6576000805461ff0019166101001790555b801561012c576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50610141565b6001600160a01b03163b151590565b6114b580620001516000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806391d1485411610097578063b6e9201011610066578063b6e9201014610223578063cb568fd414610254578063d547741f14610267578063d61108331461027a57600080fd5b806391d14854146101b457806392ca3180146101ed578063a217fddf14610200578063a4cfd20a1461020857600080fd5b8063248a9ca3116100d3578063248a9ca31461014a5780632f2ff15d1461017b57806336568abe1461018e578063485cc955146101a157600080fd5b806301ffc9a7146100fa5780630c01a2fd14610122578063183bbe8014610137575b600080fd5b61010d610108366004610f86565b6102ba565b60405190151581526020015b60405180910390f35b610135610130366004611023565b610353565b005b61013561014536600461111b565b610575565b61016d610158366004611136565b60009081526065602052604090206001015490565b604051908152602001610119565b61013561018936600461114f565b610697565b61013561019c36600461114f565b6106c1565b6101356101af36600461117b565b61074d565b61010d6101c236600461114f565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b61016d6101fb366004611232565b6108ed565b61016d600081565b6097546040516001600160a01b039091168152602001610119565b61016d61023136600461126f565b609960209081526000938452604080852082529284528284209052825290205481565b6101356102623660046112ab565b610915565b61013561027536600461114f565b6109df565b61016d61028836600461126f565b6001600160a01b0392831660009081526099602090815260408083209490951682529283528381209181529152205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061034d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b3360009081526099602090815260408083206001600160a01b0389168452825280832087845290915290205485908590600019016103cb576040517fddaf7e56000000000000000000000000000000000000000000000000000000008152336004820152602481018290526044015b60405180910390fd5b3332146103d757600080fd5b6000879050600088609a88886040516103f19291906112f0565b908152604080519182900360209081018320546001600160a01b03909416908301528101919091523360608201526080016040516020818303038152906040528051906020012090506104448186610a13565b6104905760405162461bcd60e51b815260206004820152600e60248201527f496e76616c696420636f75706f6e00000000000000000000000000000000000060448201526064016103c2565b3360008181526099602090815260408083206001600160a01b038e811685529083528184208d8552909252918290206001905590517f0f827b640000000000000000000000000000000000000000000000000000000081526004810192909252602482018a9052831690630f827b6490604401600060405180830381600087803b15801561051d57600080fd5b505af1158015610531573d6000803e3d6000fd5b50506040518a81523392507fa7257a8b02d81b3fb6715b360a5b4f02dcdc4a4b36e79108b7738ee77706d8cb915060200160405180910390a2505050505050505050565b3360009081527fffdfc1249c027f9191656349feb0761381bb32c9f557e01f419fd08754bf5a1b602052604090205460ff166105df576040517fd1a920980000000000000000000000000000000000000000000000000000000081523360048201526024016103c2565b6001600160a01b0381166106355760405162461bcd60e51b815260206004820152601360248201527f63616e742073657420616464726573732830290000000000000000000000000060448201526064016103c2565b609780547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040517fe962aa622975becd620ca7b16db507022a2b43cc5657b30c4b907a7ecfb8042590600090a250565b6000828152606560205260409020600101546106b281610b1b565b6106bc8383610b28565b505050565b6001600160a01b038116331461073f5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084016103c2565b6107498282610bca565b5050565b600054610100900460ff161580801561076d5750600054600160ff909116105b806107875750303b158015610787575060005460ff166001145b6107f95760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016103c2565b6000805460ff19166001179055801561081c576000805461ff0019166101001790555b6001600160a01b03821661082f57600080fd5b609780547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03841617905561086a610c4d565b610875600084610ccc565b600060988190556040517fbcdfe0d5b27dd186282e187525415c57ea3077c34efb39148111e4d342e7ab0e9190a180156106bc576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b6000609a826040516108ff9190611330565b9081526020016040518091039020549050919050565b3360009081527fffdfc1249c027f9191656349feb0761381bb32c9f557e01f419fd08754bf5a1b602052604090205460ff1661097f576040517fd1a920980000000000000000000000000000000000000000000000000000000081523360048201526024016103c2565b80609a836040516109909190611330565b9081526020016040518091039020819055507fd48ea628c05cf728666ea64aa7f8a243f1b39c14c572c1bfffb231d92cba27f182826040516109d3929190611378565b60405180910390a15050565b6000828152606560205260409020600101546109fa81610b1b565b6106bc8383610bca565b6001600160a01b03163b151590565b60008060018484604001518560000151866020015160405160008152602001604052604051610a5e949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa158015610a80573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610b0357604080517fd1c36d9d0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03831660248201526044810186905284516064820152602085015160848201529084015160ff1660a482015260c4016103c2565b6097546001600160a01b039081169116149392505050565b610b258133610cd6565b50565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff166107495760008281526065602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610b863390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff16156107495760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600054610100900460ff16610cca5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016103c2565b565b6107498282610b28565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff1661074957610d14816001600160a01b03166014610d56565b610d1f836020610d56565b604051602001610d3092919061139a565b60408051601f198184030181529082905262461bcd60e51b82526103c29160040161141b565b60606000610d65836002611444565b610d70906002611463565b67ffffffffffffffff811115610d8857610d88610fe4565b6040519080825280601f01601f191660200182016040528015610db2576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610de957610de961147b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610e4c57610e4c61147b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000610e88846002611444565b610e93906001611463565b90505b6001811115610f30577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110610ed457610ed461147b565b1a60f81b828281518110610eea57610eea61147b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93610f2981611491565b9050610e96565b508315610f7f5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016103c2565b9392505050565b600060208284031215610f9857600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610f7f57600080fd5b80356001600160a01b0381168114610fdf57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561101d5761101d610fe4565b60405290565b600080600080600085870360c081121561103c57600080fd5b61104587610fc8565b955060208701359450604087013567ffffffffffffffff8082111561106957600080fd5b818901915089601f83011261107d57600080fd5b81358181111561108c57600080fd5b8a602082850101111561109e57600080fd5b60208301965080955050505060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0820112156110da57600080fd5b506110e3610ffa565b606087013581526080870135602082015260a087013560ff8116811461110857600080fd5b6040820152949793965091945092919050565b60006020828403121561112d57600080fd5b610f7f82610fc8565b60006020828403121561114857600080fd5b5035919050565b6000806040838503121561116257600080fd5b8235915061117260208401610fc8565b90509250929050565b6000806040838503121561118e57600080fd5b61119783610fc8565b915061117260208401610fc8565b600082601f8301126111b657600080fd5b813567ffffffffffffffff808211156111d1576111d1610fe4565b604051601f8301601f19908116603f011681019082821181831017156111f9576111f9610fe4565b8160405283815286602085880101111561121257600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561124457600080fd5b813567ffffffffffffffff81111561125b57600080fd5b611267848285016111a5565b949350505050565b60008060006060848603121561128457600080fd5b61128d84610fc8565b925061129b60208501610fc8565b9150604084013590509250925092565b600080604083850312156112be57600080fd5b823567ffffffffffffffff8111156112d557600080fd5b6112e1858286016111a5565b95602094909401359450505050565b8183823760009101908152919050565b60005b8381101561131b578181015183820152602001611303565b8381111561132a576000848401525b50505050565b60008251611342818460208701611300565b9190910192915050565b60008151808452611364816020860160208601611300565b601f01601f19169290920160200192915050565b60408152600061138b604083018561134c565b90508260208301529392505050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516113d2816017850160208801611300565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161140f816028840160208801611300565b01602801949350505050565b602081526000610f7f602083018461134c565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561145e5761145e61142e565b500290565b600082198211156114765761147661142e565b500190565b634e487b7160e01b600052603260045260246000fd5b6000816114a0576114a061142e565b50600019019056fea164736f6c634300080d000a";

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

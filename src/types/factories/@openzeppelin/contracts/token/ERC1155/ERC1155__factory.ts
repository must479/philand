/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ERC1155,
  ERC1155Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC1155/ERC1155";
import type { PromiseOrValue } from "../../../../../common";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
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
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620016e8380380620016e883398101604081905262000034916200011b565b6200003f8162000046565b5062000233565b80516200005b9060029060208401906200005f565b5050565b8280546200006d90620001f7565b90600052602060002090601f016020900481019282620000915760008555620000dc565b82601f10620000ac57805160ff1916838001178555620000dc565b82800160010185558215620000dc579182015b82811115620000dc578251825591602001919060010190620000bf565b50620000ea929150620000ee565b5090565b5b80821115620000ea5760008155600101620000ef565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200012f57600080fd5b82516001600160401b03808211156200014757600080fd5b818501915085601f8301126200015c57600080fd5b81518181111562000171576200017162000105565b604051601f8201601f19908116603f011681019083821181831017156200019c576200019c62000105565b816040528281528886848701011115620001b557600080fd5b600093505b82841015620001d95784840186015181850187015292850192620001ba565b82841115620001eb5760008684830101525b98975050505050505050565b600181811c908216806200020c57607f821691505b6020821081036200022d57634e487b7160e01b600052602260045260246000fd5b50919050565b6114a580620002436000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461017957600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610dac565b61018c565b6040519081526020015b60405180910390f35b6100c56100c0366004610def565b610235565b60405190151581526020016100a9565b6100e86100e3366004610e13565b610287565b6040516100a99190610e79565b610108610103366004610fd8565b61031b565b005b61011d610118366004611082565b6103af565b6040516100a99190611188565b61010861013836600461119b565b6104ed565b6100c561014b3660046111d7565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b61010861018736600461120a565b6104fc565b60006001600160a01b03831661020f5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061026657506001600160e01b031982166303a24d0760e21b145b8061028157506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600280546102969061126f565b80601f01602080910402602001604051908101604052809291908181526020018280546102c29061126f565b801561030f5780601f106102e45761010080835404028352916020019161030f565b820191906000526020600020905b8154815290600101906020018083116102f257829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103375750610337853361014b565b61039b5760405162461bcd60e51b815260206004820152602f60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201526e195c881b9bdc88185c1c1c9bdd9959608a1b6064820152608401610206565b6103a88585858585610589565b5050505050565b606081518351146104285760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d6174636800000000000000000000000000000000000000000000006064820152608401610206565b6000835167ffffffffffffffff81111561044457610444610e8c565b60405190808252806020026020018201604052801561046d578160200160208202803683370190505b50905060005b84518110156104e5576104b8858281518110610491576104916112a9565b60200260200101518583815181106104ab576104ab6112a9565b602002602001015161018c565b8282815181106104ca576104ca6112a9565b60209081029190910101526104de816112d5565b9050610473565b509392505050565b6104f83383836107fc565b5050565b6001600160a01b0385163314806105185750610518853361014b565b61057c5760405162461bcd60e51b815260206004820152602f60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201526e195c881b9bdc88185c1c1c9bdd9959608a1b6064820152608401610206565b6103a885858585856108f0565b81518351146106005760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d617463680000000000000000000000000000000000000000000000006064820152608401610206565b6001600160a01b0384166106645760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b6064820152608401610206565b3360005b845181101561078e576000858281518110610685576106856112a9565b6020026020010151905060008583815181106106a3576106a36112a9565b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156107365760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b6064820152608401610206565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906107739084906112ee565b9250508190555050505080610787906112d5565b9050610668565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516107de929190611306565b60405180910390a46107f4818787878787610a9b565b505050505050565b816001600160a01b0316836001600160a01b0316036108835760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c6600000000000000000000000000000000000000000000006064820152608401610206565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166109545760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b6064820152608401610206565b33600061096085610c49565b9050600061096d85610c49565b90506000868152602081815260408083206001600160a01b038c168452909152902054858110156109f35760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b6064820152608401610206565b6000878152602081815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290610a309084906112ee565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610a90848a8a8a8a8a610c94565b505050505050505050565b6001600160a01b0384163b156107f45760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610adf9089908990889088908890600401611334565b6020604051808303816000875af1925050508015610b1a575060408051601f3d908101601f19168201909252610b1791810190611392565b60015b610bcf57610b266113af565b806308c379a003610b5f5750610b3a6113cb565b80610b455750610b61565b8060405162461bcd60e51b81526004016102069190610e79565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e7465720000000000000000000000006064820152608401610206565b6001600160e01b0319811663bc197c8160e01b14610c405760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b6064820152608401610206565b50505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610c8357610c836112a9565b602090810291909101015292915050565b6001600160a01b0384163b156107f45760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610cd89089908990889088908890600401611455565b6020604051808303816000875af1925050508015610d13575060408051601f3d908101601f19168201909252610d1091810190611392565b60015b610d1f57610b266113af565b6001600160e01b0319811663f23a6e6160e01b14610c405760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b6064820152608401610206565b80356001600160a01b0381168114610da757600080fd5b919050565b60008060408385031215610dbf57600080fd5b610dc883610d90565b946020939093013593505050565b6001600160e01b031981168114610dec57600080fd5b50565b600060208284031215610e0157600080fd5b8135610e0c81610dd6565b9392505050565b600060208284031215610e2557600080fd5b5035919050565b6000815180845260005b81811015610e5257602081850181015186830182015201610e36565b81811115610e64576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610e0c6020830184610e2c565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715610ec857610ec8610e8c565b6040525050565b600067ffffffffffffffff821115610ee957610ee9610e8c565b5060051b60200190565b600082601f830112610f0457600080fd5b81356020610f1182610ecf565b604051610f1e8282610ea2565b83815260059390931b8501820192828101915086841115610f3e57600080fd5b8286015b84811015610f595780358352918301918301610f42565b509695505050505050565b600082601f830112610f7557600080fd5b813567ffffffffffffffff811115610f8f57610f8f610e8c565b604051610fa6601f8301601f191660200182610ea2565b818152846020838601011115610fbb57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610ff057600080fd5b610ff986610d90565b945061100760208701610d90565b9350604086013567ffffffffffffffff8082111561102457600080fd5b61103089838a01610ef3565b9450606088013591508082111561104657600080fd5b61105289838a01610ef3565b9350608088013591508082111561106857600080fd5b5061107588828901610f64565b9150509295509295909350565b6000806040838503121561109557600080fd5b823567ffffffffffffffff808211156110ad57600080fd5b818501915085601f8301126110c157600080fd5b813560206110ce82610ecf565b6040516110db8282610ea2565b83815260059390931b85018201928281019150898411156110fb57600080fd5b948201945b838610156111205761111186610d90565b82529482019490820190611100565b9650508601359250508082111561113657600080fd5b5061114385828601610ef3565b9150509250929050565b600081518084526020808501945080840160005b8381101561117d57815187529582019590820190600101611161565b509495945050505050565b602081526000610e0c602083018461114d565b600080604083850312156111ae57600080fd5b6111b783610d90565b9150602083013580151581146111cc57600080fd5b809150509250929050565b600080604083850312156111ea57600080fd5b6111f383610d90565b915061120160208401610d90565b90509250929050565b600080600080600060a0868803121561122257600080fd5b61122b86610d90565b945061123960208701610d90565b93506040860135925060608601359150608086013567ffffffffffffffff81111561126357600080fd5b61107588828901610f64565b600181811c9082168061128357607f821691505b6020821081036112a357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016112e7576112e76112bf565b5060010190565b60008219821115611301576113016112bf565b500190565b604081526000611319604083018561114d565b828103602084015261132b818561114d565b95945050505050565b60006001600160a01b03808816835280871660208401525060a0604083015261136060a083018661114d565b8281036060840152611372818661114d565b905082810360808401526113868185610e2c565b98975050505050505050565b6000602082840312156113a457600080fd5b8151610e0c81610dd6565b600060033d11156113c85760046000803e5060005160e01c5b90565b600060443d10156113d95790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561140957505050505090565b82850191508151818111156114215750505050505090565b843d870101602082850101111561143b5750505050505090565b61144a60208286010187610ea2565b509095945050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a0608083015261148d60a0830184610e2c565b97965050505050505056fea164736f6c634300080d000a";

type ERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155__factory extends ContractFactory {
  constructor(...args: ERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  override getDeployTransaction(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  override attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  override connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}

export const getPositionManagerAbi = () => {
  const unijson = {
    _format: 'hh-sol-artifact-1',
    contractName: 'NonfungiblePositionManager',
    sourceName: 'contracts/NonfungiblePositionManager.sol',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '_factory',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_WETH9',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_tokenDescriptor_',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'approved',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'ApprovalForAll',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        name: 'Collect',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'liquidity',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        name: 'DecreaseLiquidity',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'liquidity',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        name: 'IncreaseLiquidity',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [],
        name: 'DOMAIN_SEPARATOR',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'PERMIT_TYPEHASH',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'WETH9',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'baseURI',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'recipient',
                type: 'address',
              },
              {
                internalType: 'uint128',
                name: 'amount0Max',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'amount1Max',
                type: 'uint128',
              },
            ],
            internalType: 'struct INonfungiblePositionManager.CollectParams',
            name: 'params',
            type: 'tuple',
          },
        ],
        name: 'collect',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token0',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'token1',
            type: 'address',
          },
          {
            internalType: 'uint24',
            name: 'fee',
            type: 'uint24',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96',
            type: 'uint160',
          },
        ],
        name: 'createAndInitializePoolIfNecessary',
        outputs: [
          {
            internalType: 'address',
            name: 'pool',
            type: 'address',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'liquidity',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'amount0Min',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amount1Min',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256',
              },
            ],
            internalType:
              'struct INonfungiblePositionManager.DecreaseLiquidityParams',
            name: 'params',
            type: 'tuple',
          },
        ],
        name: 'decreaseLiquidity',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'factory',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'getApproved',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amount0Desired',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amount1Desired',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amount0Min',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amount1Min',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256',
              },
            ],
            internalType:
              'struct INonfungiblePositionManager.IncreaseLiquidityParams',
            name: 'params',
            type: 'tuple',
          },
        ],
        name: 'increaseLiquidity',
        outputs: [
          {
            internalType: 'uint128',
            name: 'liquidity',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
        ],
        name: 'isApprovedForAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'token0',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'token1',
                type: 'address',
              },
              {
                internalType: 'uint24',
                name: 'fee',
                type: 'uint24',
              },
              {
                internalType: 'int24',
                name: 'tickLower',
                type: 'int24',
              },
              {
                internalType: 'int24',
                name: 'tickUpper',
                type: 'int24',
              },
              {
                internalType: 'uint256',
                name: 'amount0Desired',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amount1Desired',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amount0Min',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amount1Min',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'recipient',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256',
              },
            ],
            internalType: 'struct INonfungiblePositionManager.MintParams',
            name: 'params',
            type: 'tuple',
          },
        ],
        name: 'mint',
        outputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'liquidity',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes[]',
            name: 'data',
            type: 'bytes[]',
          },
        ],
        name: 'multicall',
        outputs: [
          {
            internalType: 'bytes[]',
            name: 'results',
            type: 'bytes[]',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'ownerOf',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'v',
            type: 'uint8',
          },
          {
            internalType: 'bytes32',
            name: 'r',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 's',
            type: 'bytes32',
          },
        ],
        name: 'permit',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'positions',
        outputs: [
          {
            internalType: 'uint96',
            name: 'nonce',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'token0',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'token1',
            type: 'address',
          },
          {
            internalType: 'uint24',
            name: 'fee',
            type: 'uint24',
          },
          {
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
          {
            internalType: 'uint128',
            name: 'liquidity',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'feeGrowthInside0LastX128',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'feeGrowthInside1LastX128',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'tokensOwed0',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'tokensOwed1',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'refundETH',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'v',
            type: 'uint8',
          },
          {
            internalType: 'bytes32',
            name: 'r',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 's',
            type: 'bytes32',
          },
        ],
        name: 'selfPermit',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'expiry',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'v',
            type: 'uint8',
          },
          {
            internalType: 'bytes32',
            name: 'r',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 's',
            type: 'bytes32',
          },
        ],
        name: 'selfPermitAllowed',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'expiry',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'v',
            type: 'uint8',
          },
          {
            internalType: 'bytes32',
            name: 'r',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 's',
            type: 'bytes32',
          },
        ],
        name: 'selfPermitAllowedIfNecessary',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'v',
            type: 'uint8',
          },
          {
            internalType: 'bytes32',
            name: 'r',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 's',
            type: 'bytes32',
          },
        ],
        name: 'selfPermitIfNecessary',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amountMinimum',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
        ],
        name: 'sweepToken',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'tokenByIndex',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'tokenURI',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount0Owed',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount1Owed',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'uniswapV3MintCallback',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amountMinimum',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
        ],
        name: 'unwrapWETH9',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        stateMutability: 'payable',
        type: 'receive',
      },
    ],
    bytecode:
      '0x610120604052600d80546001600160b01b0319166001176001600160b01b0316600160b01b1790553480156200003457600080fd5b50604051620062e9380380620062e98339810160408190526200005791620002db565b82826040518060400160405280601b81526020017f556e697377617020563320506f736974696f6e73204e46542d563100000000008152506040518060400160405280600a815260200169554e492d56332d504f5360b01b815250604051806040016040528060018152602001603160f81b8152508282620000e66301ffc9a760e01b6200018d60201b60201c565b8151620000fb90600690602085019062000212565b5080516200011190600790602084019062000212565b50620001246380ac58cd60e01b6200018d565b62000136635b5e139f60e01b6200018d565b6200014863780e9d6360e01b6200018d565b50508251602093840120608052805192019190912060a052506001600160601b0319606092831b811660c05290821b811660e05291901b166101005250620003249050565b6001600160e01b03198082161415620001ed576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200024a576000855562000295565b82601f106200026557805160ff191683800117855562000295565b8280016001018555821562000295579182015b828111156200029557825182559160200191906001019062000278565b50620002a3929150620002a7565b5090565b5b80821115620002a35760008155600101620002a8565b80516001600160a01b0381168114620002d657600080fd5b919050565b600080600060608486031215620002f0578283fd5b620002fb84620002be565b92506200030b60208501620002be565b91506200031b60408501620002be565b90509250925092565b60805160a05160c05160601c60e05160601c6101005160601c615f40620003a960003980612a835250806102995280611718528061180e52806118965280613e5d5280613ea35280613f17525080610aa75280610dde5280610ea55280612a1d5280612b235280612e4452806136e15250806114ff5250806114de5250615f406000f3fe6080604052600436106102895760003560e01c80636352211e11610153578063ac9650d8116100cb578063d34879971161007f578063e985e9c511610064578063e985e9c5146106f5578063f3995c6714610715578063fc6f7865146107285761030d565b8063d3487997146106c2578063df2ab5bb146106e25761030d565b8063c2e3140a116100b0578063c2e3140a1461067a578063c45a01551461068d578063c87b56dd146106a25761030d565b8063ac9650d81461063a578063b88d4fde1461065a5761030d565b8063883164561161012257806399fbab881161010757806399fbab88146105cf578063a22cb46514610607578063a4a78f0c146106275761030d565b8063883164561461059757806395d89b41146105ba5761030d565b80636352211e1461052f5780636c0360eb1461054f57806370a08231146105645780637ac2ff7b146105845761030d565b806323b872dd1161020157806342966c68116101b557806349404b7c1161019a57806349404b7c146104e75780634aa4a4fc146104fa5780634f6ccce71461050f5761030d565b806342966c68146104c15780634659a494146104d45761030d565b806330adf81f116101e657806330adf81f146104775780633644e5151461048c57806342842e0e146104a15761030d565b806323b872dd146104375780632f745c59146104575761030d565b80630c49ccbe1161025857806313ead5621161023d57806313ead562146103e057806318160ddd146103f3578063219f5d17146104155761030d565b80630c49ccbe146103b757806312210e8a146103d85761030d565b806301ffc9a71461031257806306fdde0314610348578063081812fc1461036a578063095ea7b3146103975761030d565b3661030d57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461030b576040805162461bcd60e51b815260206004820152600960248201527f4e6f742057455448390000000000000000000000000000000000000000000000604482015290519081900360640190fd5b005b600080fd5b34801561031e57600080fd5b5061033261032d3660046153a6565b61073b565b60405161033f919061591e565b60405180910390f35b34801561035457600080fd5b5061035d610776565b60405161033f9190615971565b34801561037657600080fd5b5061038a6103853660046156b8565b61080c565b60405161033f91906157e2565b3480156103a357600080fd5b5061030b6103b2366004615270565b610868565b6103ca6103c5366004615483565b61093e565b60405161033f929190615b42565b61030b610daa565b61038a6103ee366004615103565b610dbc565b3480156103ff57600080fd5b506104086110c9565b60405161033f9190615929565b610428610423366004615494565b6110da565b60405161033f93929190615afd565b34801561044357600080fd5b5061030b61045236600461515c565b611413565b34801561046357600080fd5b50610408610472366004615270565b61146a565b34801561048357600080fd5b50610408611495565b34801561049857600080fd5b506104086114b9565b3480156104ad57600080fd5b5061030b6104bc36600461515c565b611577565b61030b6104cf3660046156b8565b611592565b61030b6104e23660046152dc565b611661565b61030b6104f53660046156d0565b611714565b34801561050657600080fd5b5061038a611894565b34801561051b57600080fd5b5061040861052a3660046156b8565b6118b8565b34801561053b57600080fd5b5061038a61054a3660046156b8565b6118ce565b34801561055b57600080fd5b5061035d6118f6565b34801561057057600080fd5b5061040861057f3660046150af565b6118fb565b61030b6105923660046152dc565b611963565b6105aa6105a5366004615550565b611e0f565b60405161033f9493929190615b1e565b3480156105c657600080fd5b5061035d612370565b3480156105db57600080fd5b506105ef6105ea3660046156b8565b6123d1565b60405161033f9c9b9a99989796959493929190615b50565b34801561061357600080fd5b5061030b610622366004615243565b612600565b61030b6106353660046152dc565b612723565b61064d610648366004615337565b6127d5565b60405161033f91906158a0565b34801561066657600080fd5b5061030b61067536600461519c565b612915565b61030b6106883660046152dc565b612973565b34801561069957600080fd5b5061038a612a1b565b3480156106ae57600080fd5b5061035d6106bd3660046156b8565b612a3f565b3480156106ce57600080fd5b5061030b6106dd366004615717565b612b0e565b61030b6106f036600461529b565b612b8c565b34801561070157600080fd5b506103326107103660046150cb565b612c6f565b61030b6107233660046152dc565b612c9d565b6103ca61073636600461546c565b612d28565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108025780601f106107d757610100808354040283529160200191610802565b820191906000526020600020905b8154815290600101906020018083116107e557829003601f168201915b5050505050905090565b600061081782613246565b61083c5760405162461bcd60e51b8152600401610833906159bb565b60405180910390fd5b506000908152600c60205260409020546c0100000000000000000000000090046001600160a01b031690565b6000610873826118ce565b9050806001600160a01b0316836001600160a01b031614156108c65760405162461bcd60e51b8152600401808060200182810382526021815260200180615ee26021913960400191505060405180910390fd5b806001600160a01b03166108d8613253565b6001600160a01b031614806108f457506108f481610710613253565b61092f5760405162461bcd60e51b8152600401808060200182810382526038815260200180615e0c6038913960400191505060405180910390fd5b6109398383613257565b505050565b600080823561094d33826132db565b6109695760405162461bcd60e51b815260040161083390615984565b836080013580610977613377565b11156109ca576040805162461bcd60e51b815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b60006109dc6040870160208801615562565b6001600160801b0316116109ef57600080fd5b84356000908152600c602090815260409182902060018101549092600160801b9091046001600160801b031691610a2a918901908901615562565b6001600160801b0316816001600160801b03161015610a4857600080fd5b60018281015469ffffffffffffffffffff166000908152600b60209081526040808320815160608101835281546001600160a01b039081168252919095015490811692850192909252600160a01b90910462ffffff1690830152610acc7f00000000000000000000000000000000000000000000000000000000000000008361337b565b60018501549091506001600160a01b0382169063a34123a7906a01000000000000000000008104600290810b91600160681b9004900b610b1260408e0160208f01615562565b6040518463ffffffff1660e01b8152600401610b309392919061594b565b6040805180830381600087803b158015610b4957600080fd5b505af1158015610b5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8191906156f4565b909850965060408901358810801590610b9e575088606001358710155b610bba5760405162461bcd60e51b815260040161083390615a18565b6001840154600090610bea9030906a01000000000000000000008104600290810b91600160681b9004900b613477565b9050600080836001600160a01b031663514ea4bf846040518263ffffffff1660e01b8152600401610c1b9190615929565b60a06040518083038186803b158015610c3357600080fd5b505afa158015610c47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6b91906155ac565b50509250925050610c9087600201548303876001600160801b0316600160801b6134d1565b6004880180546fffffffffffffffffffffffffffffffff198116928e016001600160801b039182160181169290921790556003880154610cda91908303908816600160801b6134d1565b6004880180546001600160801b03808216938e01600160801b9283900482160116029190911790556002870182905560038701819055610d2060408d0160208e01615562565b86038760010160106101000a8154816001600160801b0302191690836001600160801b031602179055508b600001357f26f6a048ee9138f2c0ce266f322cb99228e8d619ae2bff30c67f8dcf9d2377b48d6020016020810190610d839190615562565b8d8d604051610d9493929190615afd565b60405180910390a2505050505050505050915091565b4715610dba57610dba3347613580565b565b6000836001600160a01b0316856001600160a01b031610610ddc57600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631698ee828686866040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018262ffffff168152602001935050505060206040518083038186803b158015610e6757600080fd5b505afa158015610e7b573d6000803e3d6000fd5b505050506040513d6020811015610e9157600080fd5b505190506001600160a01b038116610fe0577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a16712958686866040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018262ffffff1681526020019350505050602060405180830381600087803b158015610f3057600080fd5b505af1158015610f44573d6000803e3d6000fd5b505050506040513d6020811015610f5a57600080fd5b5051604080517ff637731d0000000000000000000000000000000000000000000000000000000081526001600160a01b03858116600483015291519293509083169163f637731d9160248082019260009290919082900301818387803b158015610fc357600080fd5b505af1158015610fd7573d6000803e3d6000fd5b505050506110c1565b6000816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b15801561101b57600080fd5b505afa15801561102f573d6000803e3d6000fd5b505050506040513d60e081101561104557600080fd5b505190506001600160a01b0381166110bf57816001600160a01b031663f637731d846040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156110a657600080fd5b505af11580156110ba573d6000803e3d6000fd5b505050505b505b949350505050565b60006110d56002613689565b905090565b60008060008360a00135806110ed613377565b1115611140576040805162461bcd60e51b815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b84356000908152600c6020908152604080832060018082015469ffffffffffffffffffff81168652600b855283862084516060808201875282546001600160a01b039081168352929094015480831682890190815262ffffff600160a01b9092048216838901908152885161014081018a528451861681529151909416818a01529251168287015230828501526a01000000000000000000008304600290810b810b608080850191909152600160681b909404810b900b60a0830152958c013560c0820152938b013560e0850152908a0135610100840152890135610120830152929061122c90613694565b6001870154939a50919850965091506000906112669030906a01000000000000000000008104600290810b91600160681b9004900b613477565b9050600080836001600160a01b031663514ea4bf846040518263ffffffff1660e01b81526004016112979190615929565b60a06040518083038186803b1580156112af57600080fd5b505afa1580156112c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e791906155ac565b50509250925050611323866002015483038760010160109054906101000a90046001600160801b03166001600160801b0316600160801b6134d1565b6004870180546001600160801b0380821690930183166fffffffffffffffffffffffffffffffff19909116179055600387015460018801546113739291840391600160801b9182900416906134d1565b6004870180546001600160801b03600160801b80830482169094018116840291811691909117909155600288018490556003880183905560018801805483810483168e018316909302929091169190911790556040518b35907f3067048beee31b25b2f1681f88dac838c8bba36af25bfb2b7cf7473a5847e35f906113fd908d908d908d90615afd565b60405180910390a2505050505050509193909250565b61142461141e613253565b826132db565b61145f5760405162461bcd60e51b8152600401808060200182810382526031815260200180615f036031913960400191505060405180910390fd5b6109398383836138cf565b6001600160a01b038216600090815260016020526040812061148c9083613a1b565b90505b92915050565b7f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad81565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611526613a27565b3060405160200180868152602001858152602001848152602001838152602001826001600160a01b031681526020019550505050505060405160208183030381529060405280519060200120905090565b61093983838360405180602001604052806000815250612915565b8061159d33826132db565b6115b95760405162461bcd60e51b815260040161083390615984565b6000828152600c602052604090206001810154600160801b90046001600160801b03161580156115f4575060048101546001600160801b0316155b801561161257506004810154600160801b90046001600160801b0316155b61162e5760405162461bcd60e51b815260040161083390615a86565b6000838152600c602052604081208181556001810182905560028101829055600381018290556004015561093983613a2b565b604080517f8fcbaf0c00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101879052606481018690526001608482015260ff851660a482015260c4810184905260e4810183905290516001600160a01b03881691638fcbaf0c9161010480830192600092919082900301818387803b1580156116f457600080fd5b505af1158015611708573d6000803e3d6000fd5b50505050505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561178357600080fd5b505afa158015611797573d6000803e3d6000fd5b505050506040513d60208110156117ad57600080fd5b5051905082811015611806576040805162461bcd60e51b815260206004820152601260248201527f496e73756666696369656e742057455448390000000000000000000000000000604482015290519081900360640190fd5b8015610939577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561187257600080fd5b505af1158015611886573d6000803e3d6000fd5b505050506109398282613580565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806118c6600284613af8565b509392505050565b600061148f82604051806060016040528060298152602001615e6e6029913960029190613b16565b606090565b60006001600160a01b0382166119425760405162461bcd60e51b815260040180806020018281038252602a815260200180615e44602a913960400191505060405180910390fd5b6001600160a01b038216600090815260016020526040902061148f90613689565b8361196c613377565b11156119bf576040805162461bcd60e51b815260206004820152600e60248201527f5065726d69742065787069726564000000000000000000000000000000000000604482015290519081900360640190fd5b60006119c96114b9565b7f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad88886119f581613b23565b604080516020808201969096526001600160a01b03909416848201526060840192909252608083015260a08083018a90528151808403909101815260c0830182528051908401207f190100000000000000000000000000000000000000000000000000000000000060e084015260e283019490945261010280830194909452805180830390940184526101229091019052815191012090506000611a98876118ce565b9050806001600160a01b0316886001600160a01b03161415611aeb5760405162461bcd60e51b8152600401808060200182810382526027815260200180615d6f6027913960400191505060405180910390fd5b611af481613b62565b15611ccf576040805160208082018790528183018690527fff0000000000000000000000000000000000000000000000000000000000000060f889901b16606083015282516041818403018152606183018085527f1626ba7e0000000000000000000000000000000000000000000000000000000090526065830186815260858401948552815160a585015281516001600160a01b03871695631626ba7e958995919260c59091019185019080838360005b83811015611bbe578181015183820152602001611ba6565b50505050905090810190601f168015611beb5780820380516001836020036101000a031916815260200191505b50935050505060206040518083038186803b158015611c0957600080fd5b505afa158015611c1d573d6000803e3d6000fd5b505050506040513d6020811015611c3357600080fd5b50517fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e0000000000000000000000000000000000000000000000000000000014611cca576040805162461bcd60e51b815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b611dfb565b600060018387878760405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611d2b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611d93576040805162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e6174757265000000000000000000000000000000604482015290519081900360640190fd5b816001600160a01b0316816001600160a01b031614611df9576040805162461bcd60e51b815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b505b611e058888613257565b5050505050505050565b60008060008084610140013580611e24613377565b1115611e77576040805162461bcd60e51b815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b604080516101408101909152600090611f439080611e9860208b018b6150af565b6001600160a01b03168152602001896020016020810190611eb991906150af565b6001600160a01b03168152602001611ed760608b0160408c0161569e565b62ffffff168152306020820152604001611ef760808b0160608c016153e6565b60020b8152602001611f0f60a08b0160808c016153e6565b60020b81526020018960a0013581526020018960c0013581526020018960e001358152602001896101000135815250613694565b92975090955093509050611fb7611f6261014089016101208a016150af565b600d80547fffffffffffffffffffff000000000000000000000000000000000000000000008116600175ffffffffffffffffffffffffffffffffffffffffffff92831690810190921617909155975087613b68565b6000611fe230611fcd60808b0160608c016153e6565b611fdd60a08c0160808d016153e6565b613477565b9050600080836001600160a01b031663514ea4bf846040518263ffffffff1660e01b81526004016120139190615929565b60a06040518083038186803b15801561202b57600080fd5b505afa15801561203f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061206391906155ac565b5050925092505060006120dc8560405180606001604052808e600001602081019061208e91906150af565b6001600160a01b031681526020018e60200160208101906120af91906150af565b6001600160a01b031681526020018e60400160208101906120d0919061569e565b62ffffff169052613c96565b905060405180610140016040528060006bffffffffffffffffffffffff16815260200160006001600160a01b031681526020018269ffffffffffffffffffff1681526020018c606001602081019061213491906153e6565b60020b815260200161214c60a08e0160808f016153e6565b60020b81526020018a6001600160801b0316815260200184815260200183815260200160006001600160801b0316815260200160006001600160801b0316815250600c60008c815260200190815260200160002060008201518160000160006101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550602082015181600001600c6101000a8154816001600160a01b0302191690836001600160a01b0316021790555060408201518160010160006101000a81548169ffffffffffffffffffff021916908369ffffffffffffffffffff160217905550606082015181600101600a6101000a81548162ffffff021916908360020b62ffffff160217905550608082015181600101600d6101000a81548162ffffff021916908360020b62ffffff16021790555060a08201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060c0820151816002015560e082015181600301556101008201518160040160006101000a8154816001600160801b0302191690836001600160801b031602179055506101208201518160040160106101000a8154816001600160801b0302191690836001600160801b03160217905550905050897f3067048beee31b25b2f1681f88dac838c8bba36af25bfb2b7cf7473a5847e35f8a8a8a60405161235b93929190615afd565b60405180910390a25050505050509193509193565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108025780601f106107d757610100808354040283529160200191610802565b6000818152600c6020908152604080832081516101408101835281546bffffffffffffffffffffffff811682526001600160a01b036c010000000000000000000000009091041693810193909352600181015469ffffffffffffffffffff81169284018390526a01000000000000000000008104600290810b810b810b6060860152600160681b8204810b810b810b60808601526001600160801b03600160801b92839004811660a08701529083015460c0860152600383015460e0860152600490920154808316610100860152041661012083015282918291829182918291829182918291829182918291906124da5760405162461bcd60e51b815260040161083390615a4f565b6000600b6000836040015169ffffffffffffffffffff1669ffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160149054906101000a900462ffffff1662ffffff1662ffffff1681525050905081600001518260200151826000015183602001518460400151866060015187608001518860a001518960c001518a60e001518b61010001518c61012001519d509d509d509d509d509d509d509d509d509d509d509d50505091939597999b5091939597999b565b612608613253565b6001600160a01b0316826001600160a01b0316141561266e576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b806005600061267b613253565b6001600160a01b0390811682526020808301939093526040918201600090812091871680825291909352912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016921515929092179091556126dd613253565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b604080517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201529051600019916001600160a01b0389169163dd62ed3e91604480820192602092909190829003018186803b15801561278d57600080fd5b505afa1580156127a1573d6000803e3d6000fd5b505050506040513d60208110156127b757600080fd5b505110156127cd576127cd868686868686611661565b505050505050565b60608167ffffffffffffffff811180156127ee57600080fd5b5060405190808252806020026020018201604052801561282257816020015b606081526020019060019003908161280d5790505b50905060005b8281101561290e576000803086868581811061284057fe5b90506020028101906128529190615bef565b6040516128609291906157d2565b600060405180830381855af49150503d806000811461289b576040519150601f19603f3d011682016040523d82523d6000602084013e6128a0565b606091505b5091509150816128ec576044815110156128b957600080fd5b600481019050808060200190518101906128d39190615402565b60405162461bcd60e51b81526004016108339190615971565b808484815181106128f957fe5b60209081029190910101525050600101612828565b5092915050565b612926612920613253565b836132db565b6129615760405162461bcd60e51b8152600401808060200182810382526031815260200180615f036031913960400191505060405180910390fd5b61296d84848484613de6565b50505050565b604080517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152905186916001600160a01b0389169163dd62ed3e91604480820192602092909190829003018186803b1580156129db57600080fd5b505afa1580156129ef573d6000803e3d6000fd5b505050506040513d6020811015612a0557600080fd5b505110156127cd576127cd868686868686612c9d565b7f000000000000000000000000000000000000000000000000000000000000000081565b6060612a4a82613246565b612a5357600080fd5b6040517fe9dc63750000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e9dc637590612aba9030908690600401615932565b60006040518083038186803b158015612ad257600080fd5b505afa158015612ae6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261148f9190810190615402565b6000612b1c828401846154a5565b9050612b4c7f00000000000000000000000000000000000000000000000000000000000000008260000151613e38565b508415612b67578051516020820151612b6791903388613e5b565b8315612b8557612b8581600001516020015182602001513387613e5b565b5050505050565b6000836001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015612bdb57600080fd5b505afa158015612bef573d6000803e3d6000fd5b505050506040513d6020811015612c0557600080fd5b5051905082811015612c5e576040805162461bcd60e51b815260206004820152601260248201527f496e73756666696369656e7420746f6b656e0000000000000000000000000000604482015290519081900360640190fd5b801561296d5761296d848383613feb565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b604080517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018790526064810186905260ff8516608482015260a4810184905260c4810183905290516001600160a01b0388169163d505accf9160e480830192600092919082900301818387803b1580156116f457600080fd5b6000808235612d3733826132db565b612d535760405162461bcd60e51b815260040161083390615984565b6000612d656060860160408701615562565b6001600160801b03161180612d9257506000612d876080860160608701615562565b6001600160801b0316115b612d9b57600080fd5b600080612dae60408701602088016150af565b6001600160a01b031614612dd157612dcc60408601602087016150af565b612dd3565b305b85356000908152600c6020908152604080832060018082015469ffffffffffffffffffff168552600b8452828520835160608101855281546001600160a01b039081168252919092015490811694820194909452600160a01b90930462ffffff169183019190915292935090612e697f00000000000000000000000000000000000000000000000000000000000000008361337b565b600484015460018501549192506001600160801b0380821692600160801b92839004821692900416156130865760018501546040517fa34123a70000000000000000000000000000000000000000000000000000000081526001600160a01b0385169163a34123a791612f00916a01000000000000000000008104600290810b92600160681b909204900b9060009060040161594b565b6040805180830381600087803b158015612f1957600080fd5b505af1158015612f2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f5191906156f4565b5050600185015460009081906001600160a01b0386169063514ea4bf90612f969030906a01000000000000000000008104600290810b91600160681b9004900b613477565b6040518263ffffffff1660e01b8152600401612fb29190615929565b60a06040518083038186803b158015612fca57600080fd5b505afa158015612fde573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061300291906155ac565b5050925092505061303e876002015483038860010160109054906101000a90046001600160801b03166001600160801b0316600160801b6134d1565b84019350613077876003015482038860010160109054906101000a90046001600160801b03166001600160801b0316600160801b6134d1565b60028801929092556003870155015b6000806001600160801b0384166130a360608e0160408f01615562565b6001600160801b0316116130c6576130c160608d0160408e01615562565b6130c8565b835b836001600160801b03168d60600160208101906130e59190615562565b6001600160801b0316116131085761310360808e0160608f01615562565b61310a565b835b60018901546040517f4f1eb3d80000000000000000000000000000000000000000000000000000000081529294509092506001600160a01b03871691634f1eb3d89161317d918c916a01000000000000000000008104600290810b92600160681b909204900b9088908890600401615839565b6040805180830381600087803b15801561319657600080fd5b505af11580156131aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131ce919061557e565b6004890180546fffffffffffffffffffffffffffffffff196001600160801b03918216600160801b878a0384160217168689038216179091556040519281169d50169a508c35907f40d0efd1a53d60ecbf40971b9daf7dc90178c3aadc7aab1765632738fa8b8f0190610d94908b9086908690615876565b600061148f60028361417b565b3390565b6000818152600c6020526040902080546bffffffffffffffffffffffff166c010000000000000000000000006001600160a01b0385169081029190911790915581906132a2826118ce565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006132e682613246565b6133215760405162461bcd60e51b815260040180806020018281038252602c815260200180615de0602c913960400191505060405180910390fd5b600061332c836118ce565b9050806001600160a01b0316846001600160a01b031614806133675750836001600160a01b031661335c8461080c565b6001600160a01b0316145b806110c157506110c18185612c6f565b4290565b600081602001516001600160a01b031682600001516001600160a01b0316106133a357600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b6bffffffffffffffffffffffff191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b604080516bffffffffffffffffffffffff19606086901b16602080830191909152600285810b60e890811b60348501529085900b901b60378301528251601a818403018152603a90920190925280519101205b9392505050565b600080806000198587098686029250828110908390030390508061350757600084116134fc57600080fd5b5082900490506134ca565b80841161351357600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b604080516000808252602082019092526001600160a01b0384169083906040518082805190602001908083835b602083106135cc5780518252601f1990920191602091820191016135ad565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461362e576040519150601f19603f3d011682016040523d82523d6000602084013e613633565b606091505b5050905080610939576040805162461bcd60e51b815260206004820152600360248201527f5354450000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600061148f82614187565b6000806000806000604051806060016040528087600001516001600160a01b0316815260200187602001516001600160a01b03168152602001876040015162ffffff1681525090506137067f00000000000000000000000000000000000000000000000000000000000000008261337b565b91506000826001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b15801561374357600080fd5b505afa158015613757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061377b919061560d565b50505050505090506000613792886080015161418b565b905060006137a38960a0015161418b565b90506137ba8383838c60c001518d60e001516144d9565b9750505050816001600160a01b0316633c8a7d8d876060015188608001518960a00151896040518060400160405280888152602001336001600160a01b031681525060405160200161380c9190615abd565b6040516020818303038152906040526040518663ffffffff1660e01b815260040161383b9594939291906157f6565b6040805180830381600087803b15801561385457600080fd5b505af1158015613868573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061388c91906156f4565b610100880151919550935084108015906138ab57508561012001518310155b6138c75760405162461bcd60e51b815260040161083390615a18565b509193509193565b826001600160a01b03166138e2826118ce565b6001600160a01b0316146139275760405162461bcd60e51b8152600401808060200182810382526029815260200180615eb96029913960400191505060405180910390fd5b6001600160a01b03821661396c5760405162461bcd60e51b8152600401808060200182810382526024815260200180615d966024913960400191505060405180910390fd5b613977838383610939565b613982600082613257565b6001600160a01b03831660009081526001602052604090206139a4908261459d565b506001600160a01b03821660009081526001602052604090206139c790826145a9565b506139d4600282846145b5565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061148c83836145cb565b4690565b6000613a36826118ce565b9050613a4481600084610939565b613a4f600083613257565b6000828152600860205260409020546002600019610100600184161502019091160415613a8d576000828152600860205260408120613a8d9161501f565b6001600160a01b0381166000908152600160205260409020613aaf908361459d565b50613abb60028361462f565b5060405182906000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6000808080613b07868661463b565b909450925050505b9250929050565b60006110c18484846146b6565b6000908152600c6020526040902080546bffffffffffffffffffffffff19811660016bffffffffffffffffffffffff9283169081019092161790915590565b3b151590565b6001600160a01b038216613bc3576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b613bcc81613246565b15613c1e576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b613c2a60008383610939565b6001600160a01b0382166000908152600160205260409020613c4c90826145a9565b50613c59600282846145b5565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160a01b0382166000908152600a602052604090205469ffffffffffffffffffff168061148f5750600d8054600169ffffffffffffffffffff76010000000000000000000000000000000000000000000080840482168381019092160275ffffffffffffffffffffffffffffffffffffffffffff909316929092179092556001600160a01b038085166000908152600a6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001686179055848352600b825291829020865181549085167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617825591870151950180549287015162ffffff16600160a01b027fffffffffffffffffff000000ffffffffffffffffffffffffffffffffffffffff969094169290911691909117939093161790915592915050565b613df18484846138cf565b613dfd84848484614780565b61296d5760405162461bcd60e51b8152600401808060200182810382526032815260200180615d3d6032913960400191505060405180910390fd5b6000613e44838361337b565b9050336001600160a01b0382161461148f57600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b0316148015613e9c5750804710155b15613fbe577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015613efc57600080fd5b505af1158015613f10573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb83836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015613f8c57600080fd5b505af1158015613fa0573d6000803e3d6000fd5b505050506040513d6020811015613fb657600080fd5b5061296d9050565b6001600160a01b038316301415613fdf57613fda848383613feb565b61296d565b61296d8484848461495c565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251825160009485949389169392918291908083835b602083106140955780518252601f199092019160209182019101614076565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146140f7576040519150601f19603f3d011682016040523d82523d6000602084013e6140fc565b606091505b509150915081801561412a57508051158061412a575080806020019051602081101561412757600080fd5b50515b612b85576040805162461bcd60e51b815260206004820152600260248201527f5354000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600061148c8383614af4565b5490565b60008060008360020b126141a2578260020b6141aa565b8260020b6000035b9050620d89e8811115614204576040805162461bcd60e51b815260206004820152600160248201527f5400000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001821661421857600160801b61422a565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561425e576ffff97272373d413259a46990580e213a0260801c5b600482161561427d576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b600882161561429c576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156142bb576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156142da576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156142f9576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615614318576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615614338576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615614358576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615614378576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615614398576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156143b8576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156143d8576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156143f8576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615614418576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615614439576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615614459576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615614478576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615614495576b048a170391f7dc42444e8fa20260801c5b60008460020b13156144b05780600019816144ac57fe5b0490505b6401000000008106156144c45760016144c7565b60005b60ff16602082901c0192505050919050565b6000836001600160a01b0316856001600160a01b031611156144f9579293925b846001600160a01b0316866001600160a01b0316116145245761451d858585614b0c565b9050614594565b836001600160a01b0316866001600160a01b0316101561458657600061454b878686614b0c565b9050600061455a878986614b78565b9050806001600160801b0316826001600160801b03161061457b578061457d565b815b92505050614594565b614591858584614b78565b90505b95945050505050565b600061148c8383614bbe565b600061148c8383614c84565b60006110c184846001600160a01b038516614cce565b8154600090821061460d5760405162461bcd60e51b8152600401808060200182810382526022815260200180615d1b6022913960400191505060405180910390fd5b82600001828154811061461c57fe5b9060005260206000200154905092915050565b600061148c8383614d65565b81546000908190831061467f5760405162461bcd60e51b8152600401808060200182810382526022815260200180615e976022913960400191505060405180910390fd5b600084600001848154811061469057fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600082815260018401602052604081205482816147515760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156147165781810151838201526020016146fe565b50505050905090810190601f1680156147435780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061476457fe5b9060005260206000209060020201600101549150509392505050565b6000614794846001600160a01b0316613b62565b6147a0575060016110c1565b60006148f17f150b7a02000000000000000000000000000000000000000000000000000000006147ce613253565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561483557818101518382015260200161481d565b50505050905090810190601f1680156148625780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001615d3d603291396001600160a01b0388169190614e39565b9050600081806020019051602081101561490a57600080fd5b50517fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001492505050949350505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000178152925182516000948594938a169392918291908083835b60208310614a0e5780518252601f1990920191602091820191016149ef565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114614a70576040519150601f19603f3d011682016040523d82523d6000602084013e614a75565b606091505b5091509150818015614aa3575080511580614aa35750808060200190516020811015614aa057600080fd5b50515b6127cd576040805162461bcd60e51b815260206004820152600360248201527f5354460000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60009081526001919091016020526040902054151590565b6000826001600160a01b0316846001600160a01b03161115614b2c579192915b6000614b58856001600160a01b0316856001600160a01b03166c010000000000000000000000006134d1565b9050614594614b7384838888036001600160a01b03166134d1565b614e48565b6000826001600160a01b0316846001600160a01b03161115614b98579192915b6110c1614b73836c010000000000000000000000008787036001600160a01b03166134d1565b60008181526001830160205260408120548015614c7a5783546000198083019190810190600090879083908110614bf157fe5b9060005260206000200154905080876000018481548110614c0e57fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080614c3e57fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061148f565b600091505061148f565b6000614c908383614af4565b614cc65750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561148f565b50600061148f565b600082815260018401602052604081205480614d335750506040805180820182528381526020808201848152865460018181018955600089815284812095516002909302909501918255915190820155865486845281880190925292909120556134ca565b82856000016001830381548110614d4657fe5b90600052602060002090600202016001018190555060009150506134ca565b60008181526001830160205260408120548015614c7a5783546000198083019190810190600090879083908110614d9857fe5b9060005260206000209060020201905080876000018481548110614db857fe5b600091825260208083208454600290930201918255600193840154918401919091558354825289830190526040902090840190558654879080614df757fe5b600082815260208082206002600019909401938402018281556001908101839055929093558881528982019092526040822091909155945061148f9350505050565b60606110c18484600085614e5e565b806001600160801b038116811461077157600080fd5b606082471015614e9f5760405162461bcd60e51b8152600401808060200182810382526026815260200180615dba6026913960400191505060405180910390fd5b614ea885613b62565b614ef9576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b60208310614f375780518252601f199092019160209182019101614f18565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114614f99576040519150601f19603f3d011682016040523d82523d6000602084013e614f9e565b606091505b5091509150614fae828286614fb9565b979650505050505050565b60608315614fc85750816134ca565b825115614fd85782518084602001fd5b60405162461bcd60e51b81526020600482018181528451602484015284518593919283926044019190850190808383600083156147165781810151838201526020016146fe565b50805460018160011615610100020316600290046000825580601f106150455750615063565b601f0160209004906000526020600020908101906150639190615066565b50565b5b8082111561507b5760008155600101615067565b5090565b803561077181615cc4565b805161ffff8116811461077157600080fd5b803562ffffff8116811461077157600080fd5b6000602082840312156150c0578081fd5b81356134ca81615cc4565b600080604083850312156150dd578081fd5b82356150e881615cc4565b915060208301356150f881615cc4565b809150509250929050565b60008060008060808587031215615118578182fd5b843561512381615cc4565b9350602085013561513381615cc4565b92506151416040860161509c565b9150606085013561515181615cc4565b939692955090935050565b600080600060608486031215615170578081fd5b833561517b81615cc4565b9250602084013561518b81615cc4565b929592945050506040919091013590565b600080600080608085870312156151b1578182fd5b84356151bc81615cc4565b935060208501356151cc81615cc4565b925060408501359150606085013567ffffffffffffffff8111156151ee578182fd5b8501601f810187136151fe578182fd5b803561521161520c82615c76565b615c52565b818152886020838501011115615225578384fd5b81602084016020830137908101602001929092525092959194509250565b60008060408385031215615255578182fd5b823561526081615cc4565b915060208301356150f881615cd9565b60008060408385031215615282578182fd5b823561528d81615cc4565b946020939093013593505050565b6000806000606084860312156152af578081fd5b83356152ba81615cc4565b92506020840135915060408401356152d181615cc4565b809150509250925092565b60008060008060008060c087890312156152f4578384fd5b86356152ff81615cc4565b95506020870135945060408701359350606087013561531d81615d0b565b9598949750929560808101359460a0909101359350915050565b60008060208385031215615349578182fd5b823567ffffffffffffffff80821115615360578384fd5b818501915085601f830112615373578384fd5b813581811115615381578485fd5b8660208083028501011115615394578485fd5b60209290920196919550909350505050565b6000602082840312156153b7578081fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146134ca578182fd5b6000602082840312156153f7578081fd5b81356134ca81615ce7565b600060208284031215615413578081fd5b815167ffffffffffffffff811115615429578182fd5b8201601f81018413615439578182fd5b805161544761520c82615c76565b81815285602083850101111561545b578384fd5b614594826020830160208601615c98565b60006080828403121561547d578081fd5b50919050565b600060a0828403121561547d578081fd5b600060c0828403121561547d578081fd5b600081830360808112156154b7578182fd5b6040516040810167ffffffffffffffff82821081831117156154d557fe5b8160405260608412156154e6578485fd5b60a08301935081841081851117156154fa57fe5b50826040528435925061550c83615cc4565b91825260208401359161551e83615cc4565b8260608301526155306040860161509c565b608083015281526155436060850161507f565b6020820152949350505050565b6000610160828403121561547d578081fd5b600060208284031215615573578081fd5b81356134ca81615cf6565b60008060408385031215615590578182fd5b825161559b81615cf6565b60208401519092506150f881615cf6565b600080600080600060a086880312156155c3578283fd5b85516155ce81615cf6565b80955050602086015193506040860151925060608601516155ee81615cf6565b60808701519092506155ff81615cf6565b809150509295509295909350565b600080600080600080600060e0888a031215615627578485fd5b875161563281615cc4565b602089015190975061564381615ce7565b95506156516040890161508a565b945061565f6060890161508a565b935061566d6080890161508a565b925060a088015161567d81615d0b565b60c089015190925061568e81615cd9565b8091505092959891949750929550565b6000602082840312156156af578081fd5b61148c8261509c565b6000602082840312156156c9578081fd5b5035919050565b600080604083850312156156e2578182fd5b8235915060208301356150f881615cc4565b60008060408385031215615706578182fd5b505080516020909101519092909150565b6000806000806060858703121561572c578182fd5b8435935060208501359250604085013567ffffffffffffffff80821115615751578384fd5b818701915087601f830112615764578384fd5b813581811115615772578485fd5b886020828501011115615783578485fd5b95989497505060200194505050565b600081518084526157aa816020860160208601615c98565b601f01601f19169290920160200192915050565b60020b9052565b6001600160801b03169052565b6000828483379101908152919050565b6001600160a01b0391909116815260200190565b60006001600160a01b03871682528560020b60208301528460020b60408301526001600160801b038416606083015260a06080830152614fae60a0830184615792565b6001600160a01b03959095168552600293840b60208601529190920b60408401526001600160801b03918216606084015216608082015260a00190565b6001600160a01b039390931683526001600160801b03918216602084015216604082015260600190565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015615911577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08886030184526158ff858351615792565b945092850192908501906001016158c5565b5092979650505050505050565b901515815260200190565b90815260200190565b6001600160a01b03929092168252602082015260400190565b600293840b81529190920b60208201526001600160801b03909116604082015260600190565b60006020825261148c6020830184615792565b6020808252600c908201527f4e6f7420617070726f7665640000000000000000000000000000000000000000604082015260600190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606082015260800190565b60208082526014908201527f507269636520736c69707061676520636865636b000000000000000000000000604082015260600190565b60208082526010908201527f496e76616c696420746f6b656e20494400000000000000000000000000000000604082015260600190565b6020808252600b908201527f4e6f7420636c6561726564000000000000000000000000000000000000000000604082015260600190565b815180516001600160a01b03908116835260208083015182168185015260409283015162ffffff1692840192909252920151909116606082015260800190565b6001600160801b039390931683526020830191909152604082015260600190565b9384526001600160801b039290921660208401526040830152606082015260800190565b918252602082015260400190565b6bffffffffffffffffffffffff8d1681526001600160a01b038c811660208301528b811660408301528a16606082015262ffffff89166080820152600288900b60a08201526101808101615ba760c08301896157be565b615bb460e08301886157c5565b8561010083015284610120830152615bd06101408301856157c5565b615bde6101608301846157c5565b9d9c50505050505050505050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112615c23578283fd5b83018035915067ffffffffffffffff821115615c3d578283fd5b602001915036819003821315613b0f57600080fd5b60405181810167ffffffffffffffff81118282101715615c6e57fe5b604052919050565b600067ffffffffffffffff821115615c8a57fe5b50601f01601f191660200190565b60005b83811015615cb3578181015183820152602001615c9b565b8381111561296d5750506000910152565b6001600160a01b038116811461506357600080fd5b801515811461506357600080fd5b8060020b811461506357600080fd5b6001600160801b038116811461506357600080fd5b60ff8116811461506357600080fdfe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732315065726d69743a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a164736f6c6343000706000a',
    deployedBytecode:
      '0x6080604052600436106102895760003560e01c80636352211e11610153578063ac9650d8116100cb578063d34879971161007f578063e985e9c511610064578063e985e9c5146106f5578063f3995c6714610715578063fc6f7865146107285761030d565b8063d3487997146106c2578063df2ab5bb146106e25761030d565b8063c2e3140a116100b0578063c2e3140a1461067a578063c45a01551461068d578063c87b56dd146106a25761030d565b8063ac9650d81461063a578063b88d4fde1461065a5761030d565b8063883164561161012257806399fbab881161010757806399fbab88146105cf578063a22cb46514610607578063a4a78f0c146106275761030d565b8063883164561461059757806395d89b41146105ba5761030d565b80636352211e1461052f5780636c0360eb1461054f57806370a08231146105645780637ac2ff7b146105845761030d565b806323b872dd1161020157806342966c68116101b557806349404b7c1161019a57806349404b7c146104e75780634aa4a4fc146104fa5780634f6ccce71461050f5761030d565b806342966c68146104c15780634659a494146104d45761030d565b806330adf81f116101e657806330adf81f146104775780633644e5151461048c57806342842e0e146104a15761030d565b806323b872dd146104375780632f745c59146104575761030d565b80630c49ccbe1161025857806313ead5621161023d57806313ead562146103e057806318160ddd146103f3578063219f5d17146104155761030d565b80630c49ccbe146103b757806312210e8a146103d85761030d565b806301ffc9a71461031257806306fdde0314610348578063081812fc1461036a578063095ea7b3146103975761030d565b3661030d57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461030b576040805162461bcd60e51b815260206004820152600960248201527f4e6f742057455448390000000000000000000000000000000000000000000000604482015290519081900360640190fd5b005b600080fd5b34801561031e57600080fd5b5061033261032d3660046153a6565b61073b565b60405161033f919061591e565b60405180910390f35b34801561035457600080fd5b5061035d610776565b60405161033f9190615971565b34801561037657600080fd5b5061038a6103853660046156b8565b61080c565b60405161033f91906157e2565b3480156103a357600080fd5b5061030b6103b2366004615270565b610868565b6103ca6103c5366004615483565b61093e565b60405161033f929190615b42565b61030b610daa565b61038a6103ee366004615103565b610dbc565b3480156103ff57600080fd5b506104086110c9565b60405161033f9190615929565b610428610423366004615494565b6110da565b60405161033f93929190615afd565b34801561044357600080fd5b5061030b61045236600461515c565b611413565b34801561046357600080fd5b50610408610472366004615270565b61146a565b34801561048357600080fd5b50610408611495565b34801561049857600080fd5b506104086114b9565b3480156104ad57600080fd5b5061030b6104bc36600461515c565b611577565b61030b6104cf3660046156b8565b611592565b61030b6104e23660046152dc565b611661565b61030b6104f53660046156d0565b611714565b34801561050657600080fd5b5061038a611894565b34801561051b57600080fd5b5061040861052a3660046156b8565b6118b8565b34801561053b57600080fd5b5061038a61054a3660046156b8565b6118ce565b34801561055b57600080fd5b5061035d6118f6565b34801561057057600080fd5b5061040861057f3660046150af565b6118fb565b61030b6105923660046152dc565b611963565b6105aa6105a5366004615550565b611e0f565b60405161033f9493929190615b1e565b3480156105c657600080fd5b5061035d612370565b3480156105db57600080fd5b506105ef6105ea3660046156b8565b6123d1565b60405161033f9c9b9a99989796959493929190615b50565b34801561061357600080fd5b5061030b610622366004615243565b612600565b61030b6106353660046152dc565b612723565b61064d610648366004615337565b6127d5565b60405161033f91906158a0565b34801561066657600080fd5b5061030b61067536600461519c565b612915565b61030b6106883660046152dc565b612973565b34801561069957600080fd5b5061038a612a1b565b3480156106ae57600080fd5b5061035d6106bd3660046156b8565b612a3f565b3480156106ce57600080fd5b5061030b6106dd366004615717565b612b0e565b61030b6106f036600461529b565b612b8c565b34801561070157600080fd5b506103326107103660046150cb565b612c6f565b61030b6107233660046152dc565b612c9d565b6103ca61073636600461546c565b612d28565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108025780601f106107d757610100808354040283529160200191610802565b820191906000526020600020905b8154815290600101906020018083116107e557829003601f168201915b5050505050905090565b600061081782613246565b61083c5760405162461bcd60e51b8152600401610833906159bb565b60405180910390fd5b506000908152600c60205260409020546c0100000000000000000000000090046001600160a01b031690565b6000610873826118ce565b9050806001600160a01b0316836001600160a01b031614156108c65760405162461bcd60e51b8152600401808060200182810382526021815260200180615ee26021913960400191505060405180910390fd5b806001600160a01b03166108d8613253565b6001600160a01b031614806108f457506108f481610710613253565b61092f5760405162461bcd60e51b8152600401808060200182810382526038815260200180615e0c6038913960400191505060405180910390fd5b6109398383613257565b505050565b600080823561094d33826132db565b6109695760405162461bcd60e51b815260040161083390615984565b836080013580610977613377565b11156109ca576040805162461bcd60e51b815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b60006109dc6040870160208801615562565b6001600160801b0316116109ef57600080fd5b84356000908152600c602090815260409182902060018101549092600160801b9091046001600160801b031691610a2a918901908901615562565b6001600160801b0316816001600160801b03161015610a4857600080fd5b60018281015469ffffffffffffffffffff166000908152600b60209081526040808320815160608101835281546001600160a01b039081168252919095015490811692850192909252600160a01b90910462ffffff1690830152610acc7f00000000000000000000000000000000000000000000000000000000000000008361337b565b60018501549091506001600160a01b0382169063a34123a7906a01000000000000000000008104600290810b91600160681b9004900b610b1260408e0160208f01615562565b6040518463ffffffff1660e01b8152600401610b309392919061594b565b6040805180830381600087803b158015610b4957600080fd5b505af1158015610b5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8191906156f4565b909850965060408901358810801590610b9e575088606001358710155b610bba5760405162461bcd60e51b815260040161083390615a18565b6001840154600090610bea9030906a01000000000000000000008104600290810b91600160681b9004900b613477565b9050600080836001600160a01b031663514ea4bf846040518263ffffffff1660e01b8152600401610c1b9190615929565b60a06040518083038186803b158015610c3357600080fd5b505afa158015610c47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6b91906155ac565b50509250925050610c9087600201548303876001600160801b0316600160801b6134d1565b6004880180546fffffffffffffffffffffffffffffffff198116928e016001600160801b039182160181169290921790556003880154610cda91908303908816600160801b6134d1565b6004880180546001600160801b03808216938e01600160801b9283900482160116029190911790556002870182905560038701819055610d2060408d0160208e01615562565b86038760010160106101000a8154816001600160801b0302191690836001600160801b031602179055508b600001357f26f6a048ee9138f2c0ce266f322cb99228e8d619ae2bff30c67f8dcf9d2377b48d6020016020810190610d839190615562565b8d8d604051610d9493929190615afd565b60405180910390a2505050505050505050915091565b4715610dba57610dba3347613580565b565b6000836001600160a01b0316856001600160a01b031610610ddc57600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631698ee828686866040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018262ffffff168152602001935050505060206040518083038186803b158015610e6757600080fd5b505afa158015610e7b573d6000803e3d6000fd5b505050506040513d6020811015610e9157600080fd5b505190506001600160a01b038116610fe0577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a16712958686866040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018262ffffff1681526020019350505050602060405180830381600087803b158015610f3057600080fd5b505af1158015610f44573d6000803e3d6000fd5b505050506040513d6020811015610f5a57600080fd5b5051604080517ff637731d0000000000000000000000000000000000000000000000000000000081526001600160a01b03858116600483015291519293509083169163f637731d9160248082019260009290919082900301818387803b158015610fc357600080fd5b505af1158015610fd7573d6000803e3d6000fd5b505050506110c1565b6000816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b15801561101b57600080fd5b505afa15801561102f573d6000803e3d6000fd5b505050506040513d60e081101561104557600080fd5b505190506001600160a01b0381166110bf57816001600160a01b031663f637731d846040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156110a657600080fd5b505af11580156110ba573d6000803e3d6000fd5b505050505b505b949350505050565b60006110d56002613689565b905090565b60008060008360a00135806110ed613377565b1115611140576040805162461bcd60e51b815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b84356000908152600c6020908152604080832060018082015469ffffffffffffffffffff81168652600b855283862084516060808201875282546001600160a01b039081168352929094015480831682890190815262ffffff600160a01b9092048216838901908152885161014081018a528451861681529151909416818a01529251168287015230828501526a01000000000000000000008304600290810b810b608080850191909152600160681b909404810b900b60a0830152958c013560c0820152938b013560e0850152908a0135610100840152890135610120830152929061122c90613694565b6001870154939a50919850965091506000906112669030906a01000000000000000000008104600290810b91600160681b9004900b613477565b9050600080836001600160a01b031663514ea4bf846040518263ffffffff1660e01b81526004016112979190615929565b60a06040518083038186803b1580156112af57600080fd5b505afa1580156112c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e791906155ac565b50509250925050611323866002015483038760010160109054906101000a90046001600160801b03166001600160801b0316600160801b6134d1565b6004870180546001600160801b0380821690930183166fffffffffffffffffffffffffffffffff19909116179055600387015460018801546113739291840391600160801b9182900416906134d1565b6004870180546001600160801b03600160801b80830482169094018116840291811691909117909155600288018490556003880183905560018801805483810483168e018316909302929091169190911790556040518b35907f3067048beee31b25b2f1681f88dac838c8bba36af25bfb2b7cf7473a5847e35f906113fd908d908d908d90615afd565b60405180910390a2505050505050509193909250565b61142461141e613253565b826132db565b61145f5760405162461bcd60e51b8152600401808060200182810382526031815260200180615f036031913960400191505060405180910390fd5b6109398383836138cf565b6001600160a01b038216600090815260016020526040812061148c9083613a1b565b90505b92915050565b7f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad81565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611526613a27565b3060405160200180868152602001858152602001848152602001838152602001826001600160a01b031681526020019550505050505060405160208183030381529060405280519060200120905090565b61093983838360405180602001604052806000815250612915565b8061159d33826132db565b6115b95760405162461bcd60e51b815260040161083390615984565b6000828152600c602052604090206001810154600160801b90046001600160801b03161580156115f4575060048101546001600160801b0316155b801561161257506004810154600160801b90046001600160801b0316155b61162e5760405162461bcd60e51b815260040161083390615a86565b6000838152600c602052604081208181556001810182905560028101829055600381018290556004015561093983613a2b565b604080517f8fcbaf0c00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101879052606481018690526001608482015260ff851660a482015260c4810184905260e4810183905290516001600160a01b03881691638fcbaf0c9161010480830192600092919082900301818387803b1580156116f457600080fd5b505af1158015611708573d6000803e3d6000fd5b50505050505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561178357600080fd5b505afa158015611797573d6000803e3d6000fd5b505050506040513d60208110156117ad57600080fd5b5051905082811015611806576040805162461bcd60e51b815260206004820152601260248201527f496e73756666696369656e742057455448390000000000000000000000000000604482015290519081900360640190fd5b8015610939577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561187257600080fd5b505af1158015611886573d6000803e3d6000fd5b505050506109398282613580565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806118c6600284613af8565b509392505050565b600061148f82604051806060016040528060298152602001615e6e6029913960029190613b16565b606090565b60006001600160a01b0382166119425760405162461bcd60e51b815260040180806020018281038252602a815260200180615e44602a913960400191505060405180910390fd5b6001600160a01b038216600090815260016020526040902061148f90613689565b8361196c613377565b11156119bf576040805162461bcd60e51b815260206004820152600e60248201527f5065726d69742065787069726564000000000000000000000000000000000000604482015290519081900360640190fd5b60006119c96114b9565b7f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad88886119f581613b23565b604080516020808201969096526001600160a01b03909416848201526060840192909252608083015260a08083018a90528151808403909101815260c0830182528051908401207f190100000000000000000000000000000000000000000000000000000000000060e084015260e283019490945261010280830194909452805180830390940184526101229091019052815191012090506000611a98876118ce565b9050806001600160a01b0316886001600160a01b03161415611aeb5760405162461bcd60e51b8152600401808060200182810382526027815260200180615d6f6027913960400191505060405180910390fd5b611af481613b62565b15611ccf576040805160208082018790528183018690527fff0000000000000000000000000000000000000000000000000000000000000060f889901b16606083015282516041818403018152606183018085527f1626ba7e0000000000000000000000000000000000000000000000000000000090526065830186815260858401948552815160a585015281516001600160a01b03871695631626ba7e958995919260c59091019185019080838360005b83811015611bbe578181015183820152602001611ba6565b50505050905090810190601f168015611beb5780820380516001836020036101000a031916815260200191505b50935050505060206040518083038186803b158015611c0957600080fd5b505afa158015611c1d573d6000803e3d6000fd5b505050506040513d6020811015611c3357600080fd5b50517fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e0000000000000000000000000000000000000000000000000000000014611cca576040805162461bcd60e51b815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b611dfb565b600060018387878760405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611d2b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611d93576040805162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e6174757265000000000000000000000000000000604482015290519081900360640190fd5b816001600160a01b0316816001600160a01b031614611df9576040805162461bcd60e51b815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b505b611e058888613257565b5050505050505050565b60008060008084610140013580611e24613377565b1115611e77576040805162461bcd60e51b815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b604080516101408101909152600090611f439080611e9860208b018b6150af565b6001600160a01b03168152602001896020016020810190611eb991906150af565b6001600160a01b03168152602001611ed760608b0160408c0161569e565b62ffffff168152306020820152604001611ef760808b0160608c016153e6565b60020b8152602001611f0f60a08b0160808c016153e6565b60020b81526020018960a0013581526020018960c0013581526020018960e001358152602001896101000135815250613694565b92975090955093509050611fb7611f6261014089016101208a016150af565b600d80547fffffffffffffffffffff000000000000000000000000000000000000000000008116600175ffffffffffffffffffffffffffffffffffffffffffff92831690810190921617909155975087613b68565b6000611fe230611fcd60808b0160608c016153e6565b611fdd60a08c0160808d016153e6565b613477565b9050600080836001600160a01b031663514ea4bf846040518263ffffffff1660e01b81526004016120139190615929565b60a06040518083038186803b15801561202b57600080fd5b505afa15801561203f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061206391906155ac565b5050925092505060006120dc8560405180606001604052808e600001602081019061208e91906150af565b6001600160a01b031681526020018e60200160208101906120af91906150af565b6001600160a01b031681526020018e60400160208101906120d0919061569e565b62ffffff169052613c96565b905060405180610140016040528060006bffffffffffffffffffffffff16815260200160006001600160a01b031681526020018269ffffffffffffffffffff1681526020018c606001602081019061213491906153e6565b60020b815260200161214c60a08e0160808f016153e6565b60020b81526020018a6001600160801b0316815260200184815260200183815260200160006001600160801b0316815260200160006001600160801b0316815250600c60008c815260200190815260200160002060008201518160000160006101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550602082015181600001600c6101000a8154816001600160a01b0302191690836001600160a01b0316021790555060408201518160010160006101000a81548169ffffffffffffffffffff021916908369ffffffffffffffffffff160217905550606082015181600101600a6101000a81548162ffffff021916908360020b62ffffff160217905550608082015181600101600d6101000a81548162ffffff021916908360020b62ffffff16021790555060a08201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060c0820151816002015560e082015181600301556101008201518160040160006101000a8154816001600160801b0302191690836001600160801b031602179055506101208201518160040160106101000a8154816001600160801b0302191690836001600160801b03160217905550905050897f3067048beee31b25b2f1681f88dac838c8bba36af25bfb2b7cf7473a5847e35f8a8a8a60405161235b93929190615afd565b60405180910390a25050505050509193509193565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108025780601f106107d757610100808354040283529160200191610802565b6000818152600c6020908152604080832081516101408101835281546bffffffffffffffffffffffff811682526001600160a01b036c010000000000000000000000009091041693810193909352600181015469ffffffffffffffffffff81169284018390526a01000000000000000000008104600290810b810b810b6060860152600160681b8204810b810b810b60808601526001600160801b03600160801b92839004811660a08701529083015460c0860152600383015460e0860152600490920154808316610100860152041661012083015282918291829182918291829182918291829182918291906124da5760405162461bcd60e51b815260040161083390615a4f565b6000600b6000836040015169ffffffffffffffffffff1669ffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160149054906101000a900462ffffff1662ffffff1662ffffff1681525050905081600001518260200151826000015183602001518460400151866060015187608001518860a001518960c001518a60e001518b61010001518c61012001519d509d509d509d509d509d509d509d509d509d509d509d50505091939597999b5091939597999b565b612608613253565b6001600160a01b0316826001600160a01b0316141561266e576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b806005600061267b613253565b6001600160a01b0390811682526020808301939093526040918201600090812091871680825291909352912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016921515929092179091556126dd613253565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b604080517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201529051600019916001600160a01b0389169163dd62ed3e91604480820192602092909190829003018186803b15801561278d57600080fd5b505afa1580156127a1573d6000803e3d6000fd5b505050506040513d60208110156127b757600080fd5b505110156127cd576127cd868686868686611661565b505050505050565b60608167ffffffffffffffff811180156127ee57600080fd5b5060405190808252806020026020018201604052801561282257816020015b606081526020019060019003908161280d5790505b50905060005b8281101561290e576000803086868581811061284057fe5b90506020028101906128529190615bef565b6040516128609291906157d2565b600060405180830381855af49150503d806000811461289b576040519150601f19603f3d011682016040523d82523d6000602084013e6128a0565b606091505b5091509150816128ec576044815110156128b957600080fd5b600481019050808060200190518101906128d39190615402565b60405162461bcd60e51b81526004016108339190615971565b808484815181106128f957fe5b60209081029190910101525050600101612828565b5092915050565b612926612920613253565b836132db565b6129615760405162461bcd60e51b8152600401808060200182810382526031815260200180615f036031913960400191505060405180910390fd5b61296d84848484613de6565b50505050565b604080517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152905186916001600160a01b0389169163dd62ed3e91604480820192602092909190829003018186803b1580156129db57600080fd5b505afa1580156129ef573d6000803e3d6000fd5b505050506040513d6020811015612a0557600080fd5b505110156127cd576127cd868686868686612c9d565b7f000000000000000000000000000000000000000000000000000000000000000081565b6060612a4a82613246565b612a5357600080fd5b6040517fe9dc63750000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e9dc637590612aba9030908690600401615932565b60006040518083038186803b158015612ad257600080fd5b505afa158015612ae6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261148f9190810190615402565b6000612b1c828401846154a5565b9050612b4c7f00000000000000000000000000000000000000000000000000000000000000008260000151613e38565b508415612b67578051516020820151612b6791903388613e5b565b8315612b8557612b8581600001516020015182602001513387613e5b565b5050505050565b6000836001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015612bdb57600080fd5b505afa158015612bef573d6000803e3d6000fd5b505050506040513d6020811015612c0557600080fd5b5051905082811015612c5e576040805162461bcd60e51b815260206004820152601260248201527f496e73756666696369656e7420746f6b656e0000000000000000000000000000604482015290519081900360640190fd5b801561296d5761296d848383613feb565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b604080517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018790526064810186905260ff8516608482015260a4810184905260c4810183905290516001600160a01b0388169163d505accf9160e480830192600092919082900301818387803b1580156116f457600080fd5b6000808235612d3733826132db565b612d535760405162461bcd60e51b815260040161083390615984565b6000612d656060860160408701615562565b6001600160801b03161180612d9257506000612d876080860160608701615562565b6001600160801b0316115b612d9b57600080fd5b600080612dae60408701602088016150af565b6001600160a01b031614612dd157612dcc60408601602087016150af565b612dd3565b305b85356000908152600c6020908152604080832060018082015469ffffffffffffffffffff168552600b8452828520835160608101855281546001600160a01b039081168252919092015490811694820194909452600160a01b90930462ffffff169183019190915292935090612e697f00000000000000000000000000000000000000000000000000000000000000008361337b565b600484015460018501549192506001600160801b0380821692600160801b92839004821692900416156130865760018501546040517fa34123a70000000000000000000000000000000000000000000000000000000081526001600160a01b0385169163a34123a791612f00916a01000000000000000000008104600290810b92600160681b909204900b9060009060040161594b565b6040805180830381600087803b158015612f1957600080fd5b505af1158015612f2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f5191906156f4565b5050600185015460009081906001600160a01b0386169063514ea4bf90612f969030906a01000000000000000000008104600290810b91600160681b9004900b613477565b6040518263ffffffff1660e01b8152600401612fb29190615929565b60a06040518083038186803b158015612fca57600080fd5b505afa158015612fde573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061300291906155ac565b5050925092505061303e876002015483038860010160109054906101000a90046001600160801b03166001600160801b0316600160801b6134d1565b84019350613077876003015482038860010160109054906101000a90046001600160801b03166001600160801b0316600160801b6134d1565b60028801929092556003870155015b6000806001600160801b0384166130a360608e0160408f01615562565b6001600160801b0316116130c6576130c160608d0160408e01615562565b6130c8565b835b836001600160801b03168d60600160208101906130e59190615562565b6001600160801b0316116131085761310360808e0160608f01615562565b61310a565b835b60018901546040517f4f1eb3d80000000000000000000000000000000000000000000000000000000081529294509092506001600160a01b03871691634f1eb3d89161317d918c916a01000000000000000000008104600290810b92600160681b909204900b9088908890600401615839565b6040805180830381600087803b15801561319657600080fd5b505af11580156131aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131ce919061557e565b6004890180546fffffffffffffffffffffffffffffffff196001600160801b03918216600160801b878a0384160217168689038216179091556040519281169d50169a508c35907f40d0efd1a53d60ecbf40971b9daf7dc90178c3aadc7aab1765632738fa8b8f0190610d94908b9086908690615876565b600061148f60028361417b565b3390565b6000818152600c6020526040902080546bffffffffffffffffffffffff166c010000000000000000000000006001600160a01b0385169081029190911790915581906132a2826118ce565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006132e682613246565b6133215760405162461bcd60e51b815260040180806020018281038252602c815260200180615de0602c913960400191505060405180910390fd5b600061332c836118ce565b9050806001600160a01b0316846001600160a01b031614806133675750836001600160a01b031661335c8461080c565b6001600160a01b0316145b806110c157506110c18185612c6f565b4290565b600081602001516001600160a01b031682600001516001600160a01b0316106133a357600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b6bffffffffffffffffffffffff191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b604080516bffffffffffffffffffffffff19606086901b16602080830191909152600285810b60e890811b60348501529085900b901b60378301528251601a818403018152603a90920190925280519101205b9392505050565b600080806000198587098686029250828110908390030390508061350757600084116134fc57600080fd5b5082900490506134ca565b80841161351357600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b604080516000808252602082019092526001600160a01b0384169083906040518082805190602001908083835b602083106135cc5780518252601f1990920191602091820191016135ad565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461362e576040519150601f19603f3d011682016040523d82523d6000602084013e613633565b606091505b5050905080610939576040805162461bcd60e51b815260206004820152600360248201527f5354450000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600061148f82614187565b6000806000806000604051806060016040528087600001516001600160a01b0316815260200187602001516001600160a01b03168152602001876040015162ffffff1681525090506137067f00000000000000000000000000000000000000000000000000000000000000008261337b565b91506000826001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b15801561374357600080fd5b505afa158015613757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061377b919061560d565b50505050505090506000613792886080015161418b565b905060006137a38960a0015161418b565b90506137ba8383838c60c001518d60e001516144d9565b9750505050816001600160a01b0316633c8a7d8d876060015188608001518960a00151896040518060400160405280888152602001336001600160a01b031681525060405160200161380c9190615abd565b6040516020818303038152906040526040518663ffffffff1660e01b815260040161383b9594939291906157f6565b6040805180830381600087803b15801561385457600080fd5b505af1158015613868573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061388c91906156f4565b610100880151919550935084108015906138ab57508561012001518310155b6138c75760405162461bcd60e51b815260040161083390615a18565b509193509193565b826001600160a01b03166138e2826118ce565b6001600160a01b0316146139275760405162461bcd60e51b8152600401808060200182810382526029815260200180615eb96029913960400191505060405180910390fd5b6001600160a01b03821661396c5760405162461bcd60e51b8152600401808060200182810382526024815260200180615d966024913960400191505060405180910390fd5b613977838383610939565b613982600082613257565b6001600160a01b03831660009081526001602052604090206139a4908261459d565b506001600160a01b03821660009081526001602052604090206139c790826145a9565b506139d4600282846145b5565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061148c83836145cb565b4690565b6000613a36826118ce565b9050613a4481600084610939565b613a4f600083613257565b6000828152600860205260409020546002600019610100600184161502019091160415613a8d576000828152600860205260408120613a8d9161501f565b6001600160a01b0381166000908152600160205260409020613aaf908361459d565b50613abb60028361462f565b5060405182906000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6000808080613b07868661463b565b909450925050505b9250929050565b60006110c18484846146b6565b6000908152600c6020526040902080546bffffffffffffffffffffffff19811660016bffffffffffffffffffffffff9283169081019092161790915590565b3b151590565b6001600160a01b038216613bc3576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b613bcc81613246565b15613c1e576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b613c2a60008383610939565b6001600160a01b0382166000908152600160205260409020613c4c90826145a9565b50613c59600282846145b5565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160a01b0382166000908152600a602052604090205469ffffffffffffffffffff168061148f5750600d8054600169ffffffffffffffffffff76010000000000000000000000000000000000000000000080840482168381019092160275ffffffffffffffffffffffffffffffffffffffffffff909316929092179092556001600160a01b038085166000908152600a6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001686179055848352600b825291829020865181549085167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617825591870151950180549287015162ffffff16600160a01b027fffffffffffffffffff000000ffffffffffffffffffffffffffffffffffffffff969094169290911691909117939093161790915592915050565b613df18484846138cf565b613dfd84848484614780565b61296d5760405162461bcd60e51b8152600401808060200182810382526032815260200180615d3d6032913960400191505060405180910390fd5b6000613e44838361337b565b9050336001600160a01b0382161461148f57600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b0316148015613e9c5750804710155b15613fbe577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015613efc57600080fd5b505af1158015613f10573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb83836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015613f8c57600080fd5b505af1158015613fa0573d6000803e3d6000fd5b505050506040513d6020811015613fb657600080fd5b5061296d9050565b6001600160a01b038316301415613fdf57613fda848383613feb565b61296d565b61296d8484848461495c565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251825160009485949389169392918291908083835b602083106140955780518252601f199092019160209182019101614076565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146140f7576040519150601f19603f3d011682016040523d82523d6000602084013e6140fc565b606091505b509150915081801561412a57508051158061412a575080806020019051602081101561412757600080fd5b50515b612b85576040805162461bcd60e51b815260206004820152600260248201527f5354000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600061148c8383614af4565b5490565b60008060008360020b126141a2578260020b6141aa565b8260020b6000035b9050620d89e8811115614204576040805162461bcd60e51b815260206004820152600160248201527f5400000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001821661421857600160801b61422a565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561425e576ffff97272373d413259a46990580e213a0260801c5b600482161561427d576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b600882161561429c576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156142bb576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156142da576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156142f9576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615614318576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615614338576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615614358576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615614378576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615614398576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156143b8576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156143d8576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156143f8576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615614418576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615614439576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615614459576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615614478576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615614495576b048a170391f7dc42444e8fa20260801c5b60008460020b13156144b05780600019816144ac57fe5b0490505b6401000000008106156144c45760016144c7565b60005b60ff16602082901c0192505050919050565b6000836001600160a01b0316856001600160a01b031611156144f9579293925b846001600160a01b0316866001600160a01b0316116145245761451d858585614b0c565b9050614594565b836001600160a01b0316866001600160a01b0316101561458657600061454b878686614b0c565b9050600061455a878986614b78565b9050806001600160801b0316826001600160801b03161061457b578061457d565b815b92505050614594565b614591858584614b78565b90505b95945050505050565b600061148c8383614bbe565b600061148c8383614c84565b60006110c184846001600160a01b038516614cce565b8154600090821061460d5760405162461bcd60e51b8152600401808060200182810382526022815260200180615d1b6022913960400191505060405180910390fd5b82600001828154811061461c57fe5b9060005260206000200154905092915050565b600061148c8383614d65565b81546000908190831061467f5760405162461bcd60e51b8152600401808060200182810382526022815260200180615e976022913960400191505060405180910390fd5b600084600001848154811061469057fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600082815260018401602052604081205482816147515760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156147165781810151838201526020016146fe565b50505050905090810190601f1680156147435780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061476457fe5b9060005260206000209060020201600101549150509392505050565b6000614794846001600160a01b0316613b62565b6147a0575060016110c1565b60006148f17f150b7a02000000000000000000000000000000000000000000000000000000006147ce613253565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561483557818101518382015260200161481d565b50505050905090810190601f1680156148625780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001615d3d603291396001600160a01b0388169190614e39565b9050600081806020019051602081101561490a57600080fd5b50517fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001492505050949350505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000178152925182516000948594938a169392918291908083835b60208310614a0e5780518252601f1990920191602091820191016149ef565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114614a70576040519150601f19603f3d011682016040523d82523d6000602084013e614a75565b606091505b5091509150818015614aa3575080511580614aa35750808060200190516020811015614aa057600080fd5b50515b6127cd576040805162461bcd60e51b815260206004820152600360248201527f5354460000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60009081526001919091016020526040902054151590565b6000826001600160a01b0316846001600160a01b03161115614b2c579192915b6000614b58856001600160a01b0316856001600160a01b03166c010000000000000000000000006134d1565b9050614594614b7384838888036001600160a01b03166134d1565b614e48565b6000826001600160a01b0316846001600160a01b03161115614b98579192915b6110c1614b73836c010000000000000000000000008787036001600160a01b03166134d1565b60008181526001830160205260408120548015614c7a5783546000198083019190810190600090879083908110614bf157fe5b9060005260206000200154905080876000018481548110614c0e57fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080614c3e57fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061148f565b600091505061148f565b6000614c908383614af4565b614cc65750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561148f565b50600061148f565b600082815260018401602052604081205480614d335750506040805180820182528381526020808201848152865460018181018955600089815284812095516002909302909501918255915190820155865486845281880190925292909120556134ca565b82856000016001830381548110614d4657fe5b90600052602060002090600202016001018190555060009150506134ca565b60008181526001830160205260408120548015614c7a5783546000198083019190810190600090879083908110614d9857fe5b9060005260206000209060020201905080876000018481548110614db857fe5b600091825260208083208454600290930201918255600193840154918401919091558354825289830190526040902090840190558654879080614df757fe5b600082815260208082206002600019909401938402018281556001908101839055929093558881528982019092526040822091909155945061148f9350505050565b60606110c18484600085614e5e565b806001600160801b038116811461077157600080fd5b606082471015614e9f5760405162461bcd60e51b8152600401808060200182810382526026815260200180615dba6026913960400191505060405180910390fd5b614ea885613b62565b614ef9576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b60208310614f375780518252601f199092019160209182019101614f18565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114614f99576040519150601f19603f3d011682016040523d82523d6000602084013e614f9e565b606091505b5091509150614fae828286614fb9565b979650505050505050565b60608315614fc85750816134ca565b825115614fd85782518084602001fd5b60405162461bcd60e51b81526020600482018181528451602484015284518593919283926044019190850190808383600083156147165781810151838201526020016146fe565b50805460018160011615610100020316600290046000825580601f106150455750615063565b601f0160209004906000526020600020908101906150639190615066565b50565b5b8082111561507b5760008155600101615067565b5090565b803561077181615cc4565b805161ffff8116811461077157600080fd5b803562ffffff8116811461077157600080fd5b6000602082840312156150c0578081fd5b81356134ca81615cc4565b600080604083850312156150dd578081fd5b82356150e881615cc4565b915060208301356150f881615cc4565b809150509250929050565b60008060008060808587031215615118578182fd5b843561512381615cc4565b9350602085013561513381615cc4565b92506151416040860161509c565b9150606085013561515181615cc4565b939692955090935050565b600080600060608486031215615170578081fd5b833561517b81615cc4565b9250602084013561518b81615cc4565b929592945050506040919091013590565b600080600080608085870312156151b1578182fd5b84356151bc81615cc4565b935060208501356151cc81615cc4565b925060408501359150606085013567ffffffffffffffff8111156151ee578182fd5b8501601f810187136151fe578182fd5b803561521161520c82615c76565b615c52565b818152886020838501011115615225578384fd5b81602084016020830137908101602001929092525092959194509250565b60008060408385031215615255578182fd5b823561526081615cc4565b915060208301356150f881615cd9565b60008060408385031215615282578182fd5b823561528d81615cc4565b946020939093013593505050565b6000806000606084860312156152af578081fd5b83356152ba81615cc4565b92506020840135915060408401356152d181615cc4565b809150509250925092565b60008060008060008060c087890312156152f4578384fd5b86356152ff81615cc4565b95506020870135945060408701359350606087013561531d81615d0b565b9598949750929560808101359460a0909101359350915050565b60008060208385031215615349578182fd5b823567ffffffffffffffff80821115615360578384fd5b818501915085601f830112615373578384fd5b813581811115615381578485fd5b8660208083028501011115615394578485fd5b60209290920196919550909350505050565b6000602082840312156153b7578081fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146134ca578182fd5b6000602082840312156153f7578081fd5b81356134ca81615ce7565b600060208284031215615413578081fd5b815167ffffffffffffffff811115615429578182fd5b8201601f81018413615439578182fd5b805161544761520c82615c76565b81815285602083850101111561545b578384fd5b614594826020830160208601615c98565b60006080828403121561547d578081fd5b50919050565b600060a0828403121561547d578081fd5b600060c0828403121561547d578081fd5b600081830360808112156154b7578182fd5b6040516040810167ffffffffffffffff82821081831117156154d557fe5b8160405260608412156154e6578485fd5b60a08301935081841081851117156154fa57fe5b50826040528435925061550c83615cc4565b91825260208401359161551e83615cc4565b8260608301526155306040860161509c565b608083015281526155436060850161507f565b6020820152949350505050565b6000610160828403121561547d578081fd5b600060208284031215615573578081fd5b81356134ca81615cf6565b60008060408385031215615590578182fd5b825161559b81615cf6565b60208401519092506150f881615cf6565b600080600080600060a086880312156155c3578283fd5b85516155ce81615cf6565b80955050602086015193506040860151925060608601516155ee81615cf6565b60808701519092506155ff81615cf6565b809150509295509295909350565b600080600080600080600060e0888a031215615627578485fd5b875161563281615cc4565b602089015190975061564381615ce7565b95506156516040890161508a565b945061565f6060890161508a565b935061566d6080890161508a565b925060a088015161567d81615d0b565b60c089015190925061568e81615cd9565b8091505092959891949750929550565b6000602082840312156156af578081fd5b61148c8261509c565b6000602082840312156156c9578081fd5b5035919050565b600080604083850312156156e2578182fd5b8235915060208301356150f881615cc4565b60008060408385031215615706578182fd5b505080516020909101519092909150565b6000806000806060858703121561572c578182fd5b8435935060208501359250604085013567ffffffffffffffff80821115615751578384fd5b818701915087601f830112615764578384fd5b813581811115615772578485fd5b886020828501011115615783578485fd5b95989497505060200194505050565b600081518084526157aa816020860160208601615c98565b601f01601f19169290920160200192915050565b60020b9052565b6001600160801b03169052565b6000828483379101908152919050565b6001600160a01b0391909116815260200190565b60006001600160a01b03871682528560020b60208301528460020b60408301526001600160801b038416606083015260a06080830152614fae60a0830184615792565b6001600160a01b03959095168552600293840b60208601529190920b60408401526001600160801b03918216606084015216608082015260a00190565b6001600160a01b039390931683526001600160801b03918216602084015216604082015260600190565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015615911577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08886030184526158ff858351615792565b945092850192908501906001016158c5565b5092979650505050505050565b901515815260200190565b90815260200190565b6001600160a01b03929092168252602082015260400190565b600293840b81529190920b60208201526001600160801b03909116604082015260600190565b60006020825261148c6020830184615792565b6020808252600c908201527f4e6f7420617070726f7665640000000000000000000000000000000000000000604082015260600190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606082015260800190565b60208082526014908201527f507269636520736c69707061676520636865636b000000000000000000000000604082015260600190565b60208082526010908201527f496e76616c696420746f6b656e20494400000000000000000000000000000000604082015260600190565b6020808252600b908201527f4e6f7420636c6561726564000000000000000000000000000000000000000000604082015260600190565b815180516001600160a01b03908116835260208083015182168185015260409283015162ffffff1692840192909252920151909116606082015260800190565b6001600160801b039390931683526020830191909152604082015260600190565b9384526001600160801b039290921660208401526040830152606082015260800190565b918252602082015260400190565b6bffffffffffffffffffffffff8d1681526001600160a01b038c811660208301528b811660408301528a16606082015262ffffff89166080820152600288900b60a08201526101808101615ba760c08301896157be565b615bb460e08301886157c5565b8561010083015284610120830152615bd06101408301856157c5565b615bde6101608301846157c5565b9d9c50505050505050505050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112615c23578283fd5b83018035915067ffffffffffffffff821115615c3d578283fd5b602001915036819003821315613b0f57600080fd5b60405181810167ffffffffffffffff81118282101715615c6e57fe5b604052919050565b600067ffffffffffffffff821115615c8a57fe5b50601f01601f191660200190565b60005b83811015615cb3578181015183820152602001615c9b565b8381111561296d5750506000910152565b6001600160a01b038116811461506357600080fd5b801515811461506357600080fd5b8060020b811461506357600080fd5b6001600160801b038116811461506357600080fd5b60ff8116811461506357600080fdfe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732315065726d69743a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a164736f6c6343000706000a',
    linkReferences: {},
    deployedLinkReferences: {},
  };

  return unijson.abi;
};

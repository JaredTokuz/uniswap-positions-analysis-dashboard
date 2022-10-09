const OPTIMISM_CONTRACT_MAP = {
  '0x7F5c764cBc14f9669B88837ca1490cCa17c31607': {
    name: 'USDC',
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
  },
  '0x4200000000000000000000000000000000000006': {
    name: 'WETH',
    address: '0x4200000000000000000000000000000000000006',
  },
};

const POLYGON_CONTRACT_MAP = {
  '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174': {
    name: 'USDC',
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  },
  '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619': {
    name: 'WETH',
    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  '0x0000000000000000000000000000000000001010': {
    name: 'MATIC',
    address: '0x0000000000000000000000000000000000001010',
  },
};

export const TOKEN_CONFIG = {
  USDC: { decimal: 6, rounding: 2 },
  WETH: { decimal: 18, rounding: 4 },
  MATIC: { decimal: 18, rounding: 4 },
};

export const CHAIN_NETWORK = {
  '10': OPTIMISM_CONTRACT_MAP,
  '137': POLYGON_CONTRACT_MAP,
};

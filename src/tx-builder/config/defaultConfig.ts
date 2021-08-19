import { TxBuilderConfig } from 'tx-builder/types';

export const defaultConfig: TxBuilderConfig = {
  governance: {
    mainnet: {
      AAVE_GOVERNANCE_V2: '0xEC568fffba86c094cf06b22134B23074DFE2252c',
      AAVE_GOVERNANCE_V2_EXECUTOR_SHORT:
        '0x61910EcD7e8e942136CE7Fe7943f956cea1CC2f7',
      AAVE_GOVERNANCE_V2_EXECUTOR_LONG:
        '0xEE56e2B3D491590B5b31738cC34d5232F378a8D5',
      AAVE_GOVERNANCE_V2_HELPER: '0x16ff7583ea21055bf5f929ec4b896d997ff35847',
    },
    kovan: {
      AAVE_GOVERNANCE_V2: '0xc2eBaB3Bac8f2f5028f5C7317027A41EBFCa31D2',
      AAVE_GOVERNANCE_V2_EXECUTOR_SHORT:
        '0x462eD5dc919BE6C96639D5f31ab919EBA8F31831',
      AAVE_GOVERNANCE_V2_EXECUTOR_LONG:
        '0x7e5195b0A6a60b371Ba3276032CF6958eADFA652',
      AAVE_GOVERNANCE_V2_HELPER: '0xffd5BEb5712952FC9a9DDC7499487422B29Fdda6',
    },
  },
  lendingPool: {
    proto: {
      mainnet: {
        LENDINGPOOL_ADDRESS: '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9',
        WETH_GATEWAY: '0xcc9a0B7c43DC2a5F023Bb9b738E45B0Ef6B06E04',
        FLASHLIQUIDATION: '0xE377fB98512D7b04827e56BC84e1838804a8019D',
      },
      kovan: {
        LENDINGPOOL_ADDRESS: '0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe',
        WETH_GATEWAY: '0xA61ca04DF33B72b235a8A28CfB535bb7A5271B70',
        FLASHLIQUIDATION: '0x9D50F0b23b1805773f607F0B4678d724322B7AC2',
      },
      polygon: {
        LENDINGPOOL_ADDRESS: '0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf',
        WETH_GATEWAY: '0xbEadf48d62aCC944a06EEaE0A9054A90E5A7dc97',
      },
      mumbai: {
        LENDINGPOOL_ADDRESS: '0x9198F13B08E299d85E096929fA9781A1E3d5d827',
        WETH_GATEWAY: '0xee9eE614Ad26963bEc1Bec0D2c92879ae1F209fA',
      },
    },
    amm: {
      mainnet: {
        LENDINGPOOL_ADDRESS: '0x7937d4799803fbbe595ed57278bc4ca21f3bffcb',
        WETH_GATEWAY: '0xcc9a0B7c43DC2a5F023Bb9b738E45B0Ef6B06E04',
        FLASHLIQUIDATION: '0xE377fB98512D7b04827e56BC84e1838804a8019D',
      },
      kovan: {
        LENDINGPOOL_ADDRESS: '0x762E2a3BBe729240ea44D31D5a81EAB44d34ef01',
        WETH_GATEWAY: '0xA61ca04DF33B72b235a8A28CfB535bb7A5271B70',
        FLASHLIQUIDATION: '0x9D50F0b23b1805773f607F0B4678d724322B7AC2',
      },
    },
  },
  swapCollateral: {
    mainnet: {
      SWAP_COLLATERAL_ADAPTER: '0x135896DE8421be2ec868E0b811006171D9df802A',
    },
    kovan: {
      SWAP_COLLATERAL_ADAPTER: '0xC18451d36aA370fDACe8d45839bF975F48f7AEa1',
    },
    polygon: {
      SWAP_COLLATERAL_ADAPTER: '0x35784a624D4FfBC3594f4d16fA3801FeF063241c',
    },
  },
  repayWithCollateral: {
    mainnet: {
      REPAY_WITH_COLLATERAL_ADAPTER:
        '0x498c5431eb517101582988fbb36431ddaac8f4b1',
    },
    kovan: {
      REPAY_WITH_COLLATERAL_ADAPTER:
        '0xf86Be05f535EC2d217E4c6116B3fa147ee5C05A1',
    },
  },
  faucet: {
    kovan: {
      FAUCET: '0x600103d518cC5E8f3319D532eB4e5C268D32e604',
    },
    mumbai: {
      FAUCET: '0x0b3C23243106A69449e79C14c58BB49E358f9B10',
    },
  },
  staking: {
    Aave: {
      mainnet: {
        TOKEN_STAKING_ADDRESS: '0x4da27a545c0c5b758a6ba100e3a049001de870f5',
        STAKING_REWARD_TOKEN_ADDRESS:
          '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
        STAKING_HELPER_ADDRESS: '0xce0424653fb2fd48ed1b621bdbd60db16b2e388a',
      },
      kovan: {
        TOKEN_STAKING_ADDRESS: '0xf2fbf9A6710AfDa1c4AaB2E922DE9D69E0C97fd2',
        STAKING_REWARD_TOKEN_ADDRESS:
          '0xb597cd8d3217ea6477232f9217fa70837ff667af',
        STAKING_HELPER_ADDRESS: '0xf267aCc8BF1D8b41c89b6dc1a0aD8439dfbc890c',
      },
    },
    Balancer: {
      mainnet: {
        TOKEN_STAKING_ADDRESS: '0xa1116930326D21fB917d5A27F1E9943A9595fb47',
        STAKING_REWARD_TOKEN_ADDRESS:
          '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      },
      kovan: {
        TOKEN_STAKING_ADDRESS: '0x31ce45Ab6E26C72c47C52c27498D460099545ef2',
        STAKING_REWARD_TOKEN_ADDRESS:
          '0xb597cd8d3217ea6477232f9217fa70837ff667af',
      },
    },
  },
  incentives: {
    mainnet: {
      INCENTIVES_CONTROLLER: '0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5',
      INCENTIVES_CONTROLLER_REWARD_TOKEN:
        '0x4da27a545c0c5b758a6ba100e3a049001de870f5',
    },
    polygon: {
      INCENTIVES_CONTROLLER: '0x357d51124f59836ded84c8a1730d72b749d8bc23',
      INCENTIVES_CONTROLLER_REWARD_TOKEN:
        '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    },
    mumbai: {
      INCENTIVES_CONTROLLER: '0xd41aE58e803Edf4304334acCE4DC4Ec34a63C644',
      INCENTIVES_CONTROLLER_REWARD_TOKEN:
        '0x9c3c9283d3e44854697cd22d3faa240cfb032889',
    },
  },
  migrator: {
    mainnet: {
      LEND_TO_AAVE_MIGRATOR: '0x317625234562b1526ea2fac4030ea499c5291de4',
    },
    kovan: {
      LEND_TO_AAVE_MIGRATOR: '0x8cC8965FEf45a448bdbe3C749683b280eF2E17Ea',
    },
  },
};

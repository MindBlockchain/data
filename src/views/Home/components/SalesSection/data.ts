import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Swap in our own DEX',
  bodyText: 'Instantly swap tokens. Enjoy the highest liquidity trades with the lowest fees.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  
  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaBUSD.png', alt: 'BTC token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Reliable & sustainable yields',
  bodyText: 'Provide liquidity to our DEX --> get MIND-LP tokens --> enjoy passive income from trading fees or stake your liquidity provider tokens in our farms to gain even more MIND (Mind Blockchain\'s native token).',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },

  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaUSDT.png', alt: 'Stocks chart' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'Earn tokens in our hybrid pools',
  bodyText:
    'If you are scared from impermanent loss or just want to stake a single asset token to get more MIND tokens you can use our v1-pools. Or stake in our v2-pools to get our partners tokens.',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x252242aAF55842B68EEf323f7edFc72e160175bE',
    text: 'Buy MIND',
    external: false,
  },

  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaBNB.png', alt: 'MIND token' }
    ],
  },
}

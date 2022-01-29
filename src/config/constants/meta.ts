import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Mind Blockchain',
  description:
    'The most popular AMM on BSC by user count! Earn MIND through yield farming or win it in the Lottery, then stake it in Battle Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Mind Blockchain), NFTs, and more, on a platform you can trust.',
  image: 'https://mindblockchain.org/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Mind Blockchain')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Mind Blockchain')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Mind Blockchain')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Mind Blockchain')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Mind Blockchain')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Mind Blockchain')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Mind Blockchain')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Mind Blockchain')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Mind Blockchain')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Mind Blockchain')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Mind Blockchain')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Mind Blockchain')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Mind Blockchain')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Mind Blockchain')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Mind Blockchain')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Mind Blockchain')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Mind Blockchain')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Mind Blockchain')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Mind Blockchain Info & Analytics')}`,
        description: 'View statistics for Mind Blockchain exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Mind Blockchain Info & Analytics')}`,
        description: 'View statistics for Mind Blockchain exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Mind Blockchain Info & Analytics')}`,
        description: 'View statistics for Mind Blockchain exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Mind Blockchain')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Mind Blockchain')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('Mind Blockchain')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Mind Blockchain')}`,
      }
    default:
      return null
  }
}

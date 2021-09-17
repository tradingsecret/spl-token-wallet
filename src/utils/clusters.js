// import { clusterApiUrl } from '@solana/web3.js';
// import { MAINNET_URL, MAINNET_BACKUP_URL } from '../utils/connection';

export const CLUSTERS = [
  {
    name: 'mainnet-beta',
    apiUrl: 'http://49.12.206.236:8899',
    //apiUrl: MAINNET_URL,
    label: 'Mainnet Beta',
    clusterSlug: 'mainnet-beta',
  },
  /*
{
  name: 'mainnet-beta-backup',
  //apiUrl: 'http://109.248.175.236:8899',
  apiUrl: MAINNET_BACKUP_URL,
    label: 'Mainnet Beta Backup',
  clusterSlug: 'mainnet-beta',
},
{
  name: 'devnet',
  ///apiUrl: 'http://109.248.175.236:8899',
  apiUrl: clusterApiUrl('devnet'),
  label: 'Devnet',
  clusterSlug: 'devnet',
},
{
  name: 'testnet',
  //apiUrl: 'http://109.248.175.236:8899',
  apiUrl: clusterApiUrl('testnet'),
  label: 'Testnet',
  clusterSlug: 'testnet',
},
{
  name: 'localnet',
  //apiUrl: 'http://109.248.175.236:8899',
  apiUrl: 'http://localhost:8899',
  label: null,
  clusterSlug: 'localnet',
}*/
];

export function clusterForEndpoint(endpoint) {
  return getClusters().find(({ apiUrl }) => apiUrl === endpoint);
}

const customClusterConfigKey = "customClusterConfig";

export function addCustomCluster(name, apiUrl) {
  const stringifiedConfig = JSON.stringify({name: name, label: name, apiUrl: apiUrl, clusterSlug: null});
  localStorage.setItem(customClusterConfigKey, stringifiedConfig);
}

export function customClusterExists() {
  return !!localStorage.getItem(customClusterConfigKey)
}

export function getClusters() {
  const stringifiedConfig = localStorage.getItem(customClusterConfigKey);
  const config = stringifiedConfig ? JSON.parse(stringifiedConfig) : null;
  return  config ? [...CLUSTERS, config] : CLUSTERS;
}

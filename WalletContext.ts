import { TransactionReceipt, TransactionRequest } from '@ethersproject/providers'
import { Signer, Transaction } from '@solana/web3.js'
import { BigNumber } from 'ethers'
import { createContext } from 'react'

interface WalletInterface {
  isLoading: boolean
  isConnected: boolean
  name: null | 'WalletConnect' | 'MetaMask' | 'Phantom'
  chainId: null | number | 'solana-testnet' | 'solana-mainnet'
  address: string | null
  addressShort: string | null
  addressDomain: null | string
  provider: any // 📌 TODO: add interface
  restore: () => Promise<boolean>
  connect: ({ name, chainId }: { name: any; chainId: any }) => Promise<boolean>
  changeNetwork: (chainId: string | number) => Promise<boolean>
  sendTx: (transaction: TransactionRequest | Transaction, options?: { signers?: Signer[] }) => Promise<string>
  disconnect: () => void
  estimateGas: (data: TransactionRequest) => Promise<BigNumber | undefined>
  getTransactionReceipt?: (transactionHash: string | Promise<string>) => Promise<TransactionReceipt>
}

export const WalletContext = createContext<WalletInterface>({
  isLoading: false,
  isConnected: false,
  name: null,
  chainId: null,
  address: '',
  addressShort: '',
  addressDomain: null,
  provider: null,
  restore: () => Promise.reject(),
  connect: () => Promise.reject(),
  changeNetwork: () => Promise.reject(),
  sendTx: () => Promise.reject(),
  disconnect: () => {},
  estimateGas: () => Promise.reject(),
  getTransactionReceipt: undefined
})
import React, {useEffect, useState} from 'react';
import {Contract, ethers} from 'ethers'

import { contractABI , contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = ()=> {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer) //The 3 ingredients needed to fetch our contract
    console.log({provider, signer, transactionContract})
}

export const TransactionProvider = ({children})=> {
    const [connectedAccout, setConnectedAccount] = useState()

    const checkIfWalletIsConnected = async()=> {
        if(!ethereum) return alert("Please install Metamask");

        const accounts = await ethereum.request({ method:'eth_accounts'})

        console.log(accounts)

    }

    const connectWallet = async () =>{

        try{
            if(!ethereum) return alert("Please install Metamask")

            const accounts = await ethereum.request({ method:'eth_requestAccounts' })
            setCurrentAccounts(accounts[0])
        }catch(error){
            console.log(error)

            throw new Error("No ethereum object.")
        }
    }

    useEffect(()=>{
        checkIfWalletIsConnected();
    }, [])

    return (
        //By using "Provider" below, we're wrapping our entire react application with ALL OF the data that's getting passed into it 
        <TransactionContext.Provider value={{connectWallet}}>
        {children}
        </TransactionContext.Provider>

    )
}
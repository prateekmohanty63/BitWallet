import abi from "./contract/chai.json"
import {useState,useEffect} from 'react';
import {ethers} from "ethers";
import './App.css';
import Buy from "./components/Buy";
import Memos from "./components/Memos";

function App() {

   const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null,
   });

   useEffect(()=>{
    const connectWallet=async()=>{
       const contractAddress="0xdf3362f359508924e9E5aAa22c535b90765d032E"
       const contractABI=abi.abi

       try{
        const {ethereum}=window;

        if(ethereum){
          const account=await ethereum.request({method:"eth_requestAccounts"})
        }
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractAddress,contractABI,signer);
        
        setState({provider,signer,contract})
       }
       catch(error){
          console.log(error)
       }

    };
    connectWallet();
   },[])
   console.log(state)
  return (
    <div className="App">
      <Buy state={state}/>
      <Memos state={state}/>
    </div>
  );
}

export default App;

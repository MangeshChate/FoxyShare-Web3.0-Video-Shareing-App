import React, { useEffect } from 'react'
import Web3 from "web3"
import ABI from "./ABI.json";
function Wallet({saveState}) {
  
    useEffect(() => {
        const init = async () => {
    
          try {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({
              method: 'eth_requestAccounts',
            });
            const contract = new web3.eth.Contract(
              ABI,
              '0xFFBd4B9839659355f105E7DE666F16C823B86320'
            );
    
            saveState({ web3: web3, contract: contract });
    
            const ownerAddr = await contract.methods.owner().call();
            //   setOwnerAddress(ownerAddr);
          } catch (error) {
            alert('Connect Metamask');
            console.error(error);
          }
        }
        init();
      }, []);
  return (
    <div>
      
    </div>
  )
}

export default Wallet

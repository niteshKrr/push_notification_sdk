import React from "react";
import { useWeb3React } from "@web3-react/core";
import * as PushAPI from "@pushprotocol/restapi";
// import * as ethers from "ethers";
import { ethers } from "ethers";

const subs_in_out = () => {
  // const { chainId, account, active, error, library } = useWeb3React();
  // const _signer = library.getSigner(account);

  const subscribe_channel = async () => {
    let provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    let _signer = provider.getSigner();
    const address = await _signer.getAddress();

    // console.log("address :", address);

    await PushAPI.channels.subscribe({
      signer: _signer,
      channelAddress: "eip155:5:0x67099d557997E3Ee308B3C49029C331A2d4569Dc", // channel address in CAIP
      userAddress: `eip155:5:${address}`, // user address in CAIP
      onSuccess: () => {
        console.log("opt in success");
      },
      onError: () => {
        console.error("opt in error");
      },
      env: "staging",
    });
    // console.log("ho gaya");
  };

  const unsubscribe_channel = async () => {

    let provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    let _signer = provider.getSigner();
    const address = await _signer.getAddress();

    // console.log("address :", address);

    await PushAPI.channels.unsubscribe({
      signer: _signer,
      channelAddress: "eip155:5:0x67099d557997E3Ee308B3C49029C331A2d4569Dc", // channel address in CAIP
      userAddress: `eip155:5:${address}`, // user address in CAIP
      onSuccess: () => {
        console.log("opt out success");
      },
      onError: () => {
        console.error("opt out error");
      },
      env: "staging",
    });
    // console.log("ho gaya");
  };
  return (
    <div>
      <div>
        <button
          onClick={subscribe_channel}
          style={{
            height: "60px",
            borderRadius: "20px",
            fontSize: "30px",
            color: "blue",
            cursor: "pointer",
          }}
        >
          subscribe
        </button>
      </div>
      <div>
        <button
          onClick={unsubscribe_channel}
          style={{
            height: "60px",
            borderRadius: "20px",
            fontSize: "30px",
            color: "blue",
            cursor: "pointer",
          }}
        >
          unsubscribe
        </button>
      </div>
    </div>
  );
};

export default subs_in_out;

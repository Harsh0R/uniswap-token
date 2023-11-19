import { React, useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import {
  ClipboardIcon,
  ClipboardCheckIcon,
  PlusIcon,
} from "@heroicons/react/outline";

import TransactionStatus from "./TransactionStatus";
import {
  getaTokenBalance,
  getTokenAddress,
  increaseAllowance,
} from "../utils/context";

const TokenBalance = ({ name, walletAddress }) => {
  const [balance, setBalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState();
  const [copyIcon, setCopyIcon] = useState({ icon: ClipboardIcon });
  const [txPanding, setTxPanding] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction Success");

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenBalance();
      fetchTokenAddress();
    } else {
      setBalance("-");
    }
  }, [name, walletAddress]);

  async function fetchTokenBalance() {
    const bal = await getaTokenBalance(name, walletAddress);
    console.log(bal);
    const fBal = ethers.utils.formatUnits(bal.toString(), 18);
    setBalance(fBal.toString());
  }
  async function fetchTokenAddress() {
    const address = await getTokenAddress(name);
    setTokenAddress(address);
  }

  return (
    <div className="flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765F3]">
      <div className="flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg">
        <p className="text-sm">{name}</p>
        <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100">
          {balance}
        </p>
      </div>
      <div className="flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg border-[#7765F3]">
        <copyIcon.icon
          className="h-6 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(tokenAddress);
            setCopyIcon({ icon: ClipboardCheckIcon });
          }}
        />
      </div>
      {txPanding && <TransactionStatus/>}
      <Toaster/>
    </div>
  );
};

export default TokenBalance;

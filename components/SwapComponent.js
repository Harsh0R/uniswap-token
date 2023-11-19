import { React, useState, useEffect, useRef } from "react";
import {
  hasValideAllowance,
  swapTokenToEth,
  swapTokenToToken,
  swapEthToToken,
  increaseAllowance,
} from "../utils/context";

import { CogIcon, ArrowSmDownIcon } from "@heroicons/react/outline";
import SwapField from "./SwapField";
import TransactionStatus from "./TransactionStatus";
import toast, { Toaster } from "react-hot-toast";
import { DEFAULT_VALUE, ETH } from "../utils/saleToken";
import { toEth, toWie } from "../utils/utils";
import { useAccount } from "wagmi";
import { Button } from "@nextui-org/react";

const SwapComponent = () => {
  const [srcToken, setSrcToken] = useState(ETH);
  const [desToken, setDesToken] = useState(DEFAULT_VALUE);
  const [inputValue, setInputValue] = useState();
  const [outputValue, setOutputValue] = useState();
  const inputValueRef = useRef();
  const outputValueRef = useRef();
  const isReversed = useRef(false);

  const INCREASE_ALLOWANCE = "Increase Allowance";
  const ENTER_AMOUNT = "Enter a amount";
  const CONNECT_WALLET = "Connect Wallet";
  const SWAP = "Swap";

  const srcTokenObj = {
    id: "srcToken",
    value: inputValue,
    setValue: setInputValue,
    defaultValue: srcToken,
    ignoreValue: desToken,
    setToken: setSrcToken,
  };
  const desTokenObj = {
    id: "desToken",
    value: outputValue,
    setValue: setOutputValue,
    defaultValue: desToken,
    ignoreValue: srcToken,
    setToken: setDesToken,
  };

  const [srcTokenComp, setSrcTokenComp] = useState();
  const [desTokenComp, setDesTokenComp] = useState();
  const [swapBtnText, setSwapBtnText] = useState(ENTER_AMOUNT);
  const [txPeding, setTxPeding] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction Completed.");

  const { address } = useAccount();

  useEffect(() => {
    // handling the text of the submit button
    if (!address) setSwapBtnText(CONNECT_WALLET);
    else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);
    else setSwapBtnText(SWAP);
  }, [inputValue, outputValue, address]);

  useEffect(() => {
    if (
      document.activeElement !== outputValueRef.current &&
      document.activeElement.ariaLabel !== "srcToken" &&
      !isReversed.current
    ) {
      populateOutputValue(inputValue);
    }
    setSrcTokenComp(<SwapField obj={srcTokenObj} ref={inputValueRef} />);

    if (inputValue?.length === 0) setOutputValue("");
  }, [inputValue, desToken]);
  useEffect(() => {
    if (
      document.activeElement !== inputValueRef.current &&
      document.activeElement.ariaLabel !== "desToken" &&
      !isReversed.current
    ) {
      poplateInputValue(outputValue);
    }
    setDesTokenComp(<SwapField obj={desTokenObj} ref={outputValueRef} />);

    if (outputValue?.length === 0) setInputValue("");

    // reseting the isRevesed value if its set
    if (isReversed.current) isReversed.current = false;
  }, [outputValue, srcToken]);

  return (
    <div className="border-[1px] rounded-l border-[#7765F3] bg-[#7765F3] w-[100%] p-4 px-6 rounded-xl">
      <div className="flex items-center justify-between py-4 px-1">
        <p>Swap</p>
        <CogIcon className="h-6" />
      </div>
      <div className="relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600">
        {srcTokenComp}
        <ArrowSmDownIcon
          className="absolute left-1/2 -translate-x-1/2 -bottom-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110"
          onClick={handleReverseExchange}
        />
      </div>
      <div className="bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600">
        {desTokenComp}
      </div>
      <Button
        className={getSwapBtnClassName()}
        onClick={() => {
          if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();
          else if (swapBtnText === SWAP) handleSwap();
        }}
      >
        {swapBtnText}
      </Button>
      {txPeding && <TransactionStatus />}
    </div>
  );

  async function handleSwap() {
    if (srcToken === ETH && desToken !== ETH) {
      performSwap();
    } else {
      // Check whethre there is allowance when the swap deals with tokenToEth / TokenToToken
      setTxPeding(true);
      const result = await hasValideAllowance(address, srcToken, inputValue);
      setTxPeding(false);

      if (result) {
        performSwap();
      } else {
        handleInsufficientAllowance();
      }
    }
  }
  async function handleIncreaseAllowance() {
    // increase the allowance
    setTxPeding(true);
    await increaseAllowance(srcToken, inputValue);
    setTxPeding(false);

    // set the swapbtn to "SWAP" again
    setSwapBtnText(SWAP);
  }

  function handleReverseExchange(e) {
    // setting the isReversed value to prevent the input/output values
    // being calculated in thair respective side - effects
    isReversed.current = true;
    // 1.Swap Tokens(srcTokens <-> desToken)
    // 2.Swap values(inputValue <-> outputValue)
    setInputValue(outputValue);
    setOutputValue(inputValue);

    setSrcToken(desToken);
    setDesToken(srcToken);
  }
  function getSwapBtnClassName() {
    let className = "p-4 w-full my-2 rounded-xl";
    className +=
      swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET
        ? "text-zinc-400 bg-zinc-800 pointer-events-none"
        : "bg-blue-700";
    className += swapBtnText === INCREASE_ALLOWANCE ? "bg-yellow-600" : "";
    return className;
  }

  function populateOutputValue() {
    if (desToken === DEFAULT_VALUE || srcToken === DEFAULT_VALUE || !inputValue)
      return;
    try {
      console.log("src = " + srcToken + desToken);
      // console.log("srcVal1 = " + inputValue + " " + outputValue);
      if (srcToken !== ETH && desToken !== ETH) {
        setOutputValue(inputValue);
      } else if (srcToken === ETH && desToken !== ETH) {
        console.log("srcVal2 = " + inputValue + " " + outputValue);
        const outValue = toEth(toWie(inputValue), 14);
        console.log("OutVal =  " + outValue);
        setOutputValue(outValue);
        console.log("srcVal3 = " + inputValue + " " + outputValue);
      } else if (srcToken !== ETH && desToken === ETH) {
        const outValue = toEth(toWie(inputValue), 14);
        setOutputValue(outValue);
      }
    } catch (error) {
      setOutputValue("0");
    }
  }
  function poplateInputValue() {
    if (
      desToken === DEFAULT_VALUE ||
      srcToken === DEFAULT_VALUE ||
      !outputValue
    )
      return;
    try {
      if (srcToken !== ETH && desToken !== ETH) setInputValue(outputValue);
      else if (srcToken === ETH && desToken !== ETH) {
        const outValue = toEth(toWie(outputValue), 14);
        setOutputValue(outValue);
      } else if (srcToken !== ETH && desToken === ETH) {
        const outValue = toEth(toWie(outputValue), 14);
        setOutputValue(outValue);
      }
    } catch (error) {
      setOutputValue("0");
    }
  }
  async function performSwap() {
    setTxPeding(true);
    let receipt;
    if (srcToken === ETH && desToken !== ETH) {
      receipt = await swapEthToToken(desToken, inputValue);
    } else if (srcToken !== ETH && desToken === ETH) {
      receipt = await swapTokenToEth(srcToken, inputValue);
    } else {
      console.log("T to T")
      receipt = await swapTokenToToken(srcToken, desToken, inputValue);
    }
    setTxPeding(false);
    if (receipt && !receipt.hasOwnProperty("transactionHash")) {
      notifyError(receipt);
    } else notifySuccess();
  }

  function handleInsufficientAllowance() {
    notifyError(
      "Insufficient allowance. Click 'Increase Allowance' to incease it."
    );
    setSwapBtnText(INCREASE_ALLOWANCE);
  }
};

export default SwapComponent;

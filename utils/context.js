import { BigNumber, ethers } from "ethers";
import { tokenContract, contract } from "./contract";
import { toEth } from "./utils";

const gasLimit = 500000;
export async function swapEthToToken(tokenName, amount) {
  try {
    let tx = {
      value: toWie(amount),
    };
    const contractObj = await contract();
    const data = await contractObj.swapEthToToken(tokenName, tx);
    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function hasValideAllowance(owner, tokenName, amount) {
  try {
    const contractObj = await contract();
    const address = await contractObj.getTokenAddress(tokenName);

    const tokenContractObj = await tokenContract(address);
    const data = await tokenContractObj.allowance(
      owner,
      "0xeF69f1d62DF8a1A29ACb77eB8700aa6F3D61ec91"
    );
    const result = BigNumber.from(data.toString()).gte(
      BigNumber.from(toWie(amount))
    );
    return result;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function swapTokenToEth(tokenName, amount) {
  try {
    const contractObj = await contract();
    const data = contractObj.swapTokenToEth(tokenName, toWie(amount));
    const result = await data.wait();
    return result;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function swapTokenToToken(srcToken, desToken, amount) {
  try {
    const contractObj = await contract();
    const data = contractObj.swapTokenToToken(
      srcToken,
      desToken,
      toWie(amount),
      { gasLimit }
    );
    const result = await data.wait();
    return result;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getaTokenBalance(tokenName, address) {
  const contractObj = await contract();
  const balance = contractObj.getBalance(tokenName, address);
  return balance;
}

export async function getTokenAddress(tokenName) {
  try {
    const contractObj = await contract();
    const address = await contractObj.getTokenAddress(tokenName);
    return address;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function increaseAllowance(tokenName, amount) {
  try {
    const contractObj = await contract();
    const address = await contractObj.getTokenAddress(tokenName);

    const tokenContractObj = await tokenContract(address);
    const data = await tokenContractObj.approve(
      "0xeF69f1d62DF8a1A29ACb77eB8700aa6F3D61ec91",
      toWie(amount)
    );
    const result = await data.wait();
    return result;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getAllHistory() {
  try {
    console.log("In getAll frun")
    const contractObj = await contract();
    const getAllHistory = await contractObj.getAllHistory();
    console.log("In getAll frun getHistory - " + getAllHistory[0])
    
    const historyTransaction = getAllHistory.map((history, i) => (
      {
      historyId: history.historyId.toNumber(),
      tokenA: history.tokenA,
      tokenB: history.tokenB,
      inputValue: toEth(history?.inputValue),
      outoputValue: toEth(history?.oputValue),
      userAddress: history.userAddress,
    }));
    console.log("History Transaction = "+historyTransaction)
    
    return historyTransaction;
    
  } catch (e) {
    console.log("History Transaction error = ")
    return parseErrorMsg(e);
  }
}

function toWie(amount) {
  const toWie = ethers.utils.parseUnits(amount.toString());
  return toWie.toString();
}

function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
}

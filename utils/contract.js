import { ethers } from "ethers";
import CustomDexABI from "../utils/CustomDex.json";
import CustomTokenABI from "../utils/CustomToken.json";

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const constractReader = new ethers.Contract(
      address,
      CustomTokenABI.abi,
      signer
    );
    return constractReader;
  }
};

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const constractReader = new ethers.Contract(
      "0x93f5Ef91e7272207F3184c8b7F8d205371843AfC",
      CustomDexABI.abi,
      signer
    );
    return constractReader;
  }
};

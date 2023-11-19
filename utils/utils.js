import { ethers } from "ethers";

export function toWie(amount, decimal = 18) {
  const toWie = ethers.utils.parseUnits(amount, decimal);
  return toWie.toString();
}
export function toEth(amount, decimal = 18) {
  const toEth = ethers.utils.formatUnits(amount, decimal);
  return toEth.toString();
}

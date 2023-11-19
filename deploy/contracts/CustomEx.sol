// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CustomToken is ERC20{
    constructor(string memory name , string memory symbol) ERC20(name,symbol){
        _mint(msg.sender , 10000000 *10 ** 18);
    }
}
contract CustomDex {
    // Custom tokens to be initialiazed
    string[] public tokens = ["Tether USD" ,"BNB" , "USD Coin" , "stETH","TRON" ,"Matic Token" , "SHIBA INU", "Uniswap" ];

    // map to maintain the tokens and its instance
    mapping(string=>ERC20) public tokenIntanceMap;
    uint256 ethValue = 100000000000000;

    struct History{
        uint256 historyID;
        string tokenA;
        string tokenB;
        uint256 inputValue;
        uint256 outputValue;
        address userAddress;
    }
    uint256 public _historyIndex;
    mapping(uint256=>History) private historys;

    constructor(){
        for(uint i=0;i<tokens.length;i++){
            CustomToken token = new CustomToken(tokens[i],tokens[i]);
            tokenIntanceMap[tokens[i]]=token;
        }
    }
    function getBalance (string memory tokenName , address _address) public view returns(uint256){
        return tokenIntanceMap[tokenName].balanceOf(_address);  
    }

    function getTotalSupply(string memory tokenName) public view returns(uint256){
        return tokenIntanceMap[tokenName].totalSupply();
    }

    function getName(string memory tokenName) public view returns(string memory){
        return tokenIntanceMap[tokenName].name();
    }

    function getTokenAddress(string memory tokenName) public view returns(address){
        return address(tokenIntanceMap[tokenName]);
    }

    function getEthBalance() public view returns(uint256){
        return address(this).balance;
    }

    function _transactionHistory(string memory tokenName , string memory etherToken , uint256 inputValue , uint256 outputValue ) internal {
        _historyIndex++;
        uint256 historyId = _historyIndex;
        History storage history = historys[historyId];

        history.historyID = historyId;
        history.userAddress = msg.sender;
        history.tokenA = tokenName;
        history.tokenB = etherToken;
        history.inputValue = inputValue;
        history.outputValue = outputValue;
    } 
    function swapEthToToken(string memory tokenName) public payable returns(uint256){
        uint256 inputValue = msg.value;
        uint256 outputValue = (inputValue/ethValue) * 10 ** 18;

        require(tokenIntanceMap[tokenName].transfer(msg.sender , outputValue));

        string memory etherValue = "Ehter";

        _transactionHistory(tokenName , etherValue , inputValue , outputValue);
        return outputValue;
    }

    function swapTokenToEth(string memory tokenName , uint256 _amount)public returns(uint256){
        // convert token amounts to actual amount
        uint256 exactAmount = _amount / 10**18;
        uint256 ethToBeTransfer = exactAmount * ethValue;

        require(address(this).balance >= ethToBeTransfer , "Dex is running low on balance");
        payable(msg.sender).transfer(ethToBeTransfer);
        require(tokenIntanceMap[tokenName].transferFrom(msg.sender , address(this) , _amount));
        string memory etherValue = "Ether";

        _transactionHistory(tokenName , etherValue , exactAmount , ethToBeTransfer);
        return ethToBeTransfer;
    }

    function swapTokenToToken(string memory srcToken , string memory desToken , uint256 _amount) public{
        require(tokenIntanceMap[srcToken].transferFrom(msg.sender , address(this) , _amount));
        require(tokenIntanceMap[desToken].transfer(msg.sender , _amount));
        _transactionHistory(srcToken , desToken , _amount , _amount);
    }

    function getAllHistory() public view returns(History[] memory){
        uint256 itemCount = _historyIndex;
        uint256 currentIdx = 0;

        History[] memory items = new History[](itemCount);

        for(uint256 i=0;i<itemCount;i++){
            uint256 currentId = i+1;
            History storage currItem = historys[currentId];
            items[currentIdx] = currItem;
            currentIdx+=1;
        }
        return items;  
    }


}
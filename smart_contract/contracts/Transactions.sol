//SPDX-License-Identifier: UNLICENSED
//"View" functions do not modify the state of the blockchain.
pragma solidity ^0.8.19;

contract Transactions {

    uint transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
    //"timestamp" explains when we sent the transfer
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    } //This struct is similar to an object in that it defines properties. It doesn't create objects however.

    TransferStruct[] transactions; //An array of objects of the TransferStruct

     function addToBlockchain (address payable receiver, uint amount, string memory message, string memory keyword)public{
        //The main function 
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

     function getAllTransactions ()public view returns (TransferStruct[] memory){

        return transactions;

    }

     function getTransactionCount() public view returns(uint256){

        return transactionCount;
    }

}
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
contract Front {
    uint public unlockTime;
    address payable public owner;

    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );
        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function m1() public pure returns(string memory){
        return "Raj Siruvani";
    }

    function m2() public pure returns(uint){
        return 37;
    }
}

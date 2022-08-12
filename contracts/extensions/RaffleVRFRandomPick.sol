// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "../Raffle.sol";

/** 
 * @title RaffleVRFRandomPick
 * @dev Extends the base raffle system with public functions plus VRF based winner selection
 */
abstract contract RaffleVRFRandomPick is Raffle, VRFConsumerBaseV2 {
    VRFCoordinatorV2Interface COORDINATOR;

    uint64 private _subscriptionId;

    uint32 private _numWords =  1;
    
    uint256 public requestId;

    address public vrfCoordinator;

    bytes32 public gasLane;

    uint16 public requestConfirmations = 3;

    uint32 public callbackGasLimit = 100000;

    uint256[] public randomWords;

    constructor(
        uint64 subscriptionId_,
        address vrfCoordinator_,
        bytes32 gasLane_
    ) VRFConsumerBaseV2(vrfCoordinator_) {
        _subscriptionId = subscriptionId_;
        vrfCoordinator = vrfCoordinator_;
        gasLane = gasLane_;
    }

    function fulfillRandomWords(
        uint256, /* requestId */
        uint256[] memory randomWords_
    ) internal override {
        randomWords = randomWords_;

        // TODO: pick random idx using random words
        
        uint256 idx;

        _resolveRandomPick(idx);
    }

    function _randomPickWinner() internal virtual {
        requestId = COORDINATOR.requestRandomWords(
            gasLane,
            _subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            _numWords
        );
    }

    function _resolveRandomPick(uint256 idx) internal virtual {
        _pickWinner(idx);
    }
}
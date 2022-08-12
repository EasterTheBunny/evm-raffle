# Simple EVM Based Raffle

The primary raffle contract provides a very basic raffle system with entries and a winner.

## Extensions

Multiple extensions are available to create custom raffles.

### Purchaseable

Use this extension to collect funds per entry. Maintains a balance as entries are added and
a basic method for sending the entire balance to a single winner.

### Limitable

This extension provides basic limit functions per account.

### VRF Random Selection

Use this extension to allow randomness provided by Chainlink's VRF to select a winner.

### Automation

This extension provides the basic interface to provide automation to a raffle. Run raffle
rounds on an interval with Chainlink's Keepers.

### ERC721 Prize

Use this extension to add ERC721 prizes to the raffle. When a winner is selected, send them
and ERC721 token.

## Presets

Some presets already exist to show how to put the base contract and extensions together into
composable contracts.

- AutomatedVRFRaffle: automated random winner selection
- SimpleRaffle: external winner selection
- VRFRaffle: externally triggered random winner selection
- ERC721Raffle: zero purchase price with ERC721 prize to the selected winner
import { Alchemy, Network } from "alchemy-sdk";
const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);

// make all api call here and call these functions on first render
export const getLastTenBlocks = async () => {
    const lastTenBlocks = [];
    const latestBlock = await alchemy.core.getBlockNumber();
    let block = latestBlock - 10;
    while (block < latestBlock) {
        const _block = await alchemy.core.getBlock(block);
        lastTenBlocks.push(_block);
        block++;
    }
    return lastTenBlocks;
};

export const getLastTenTxs = async () => {
    const _transactions = [];
    const latestBlockNumber = await alchemy.core.getBlockNumber();
    const latestBlock = await alchemy.core.getBlock(latestBlockNumber);

    for (let txHash of latestBlock.transactions.slice(0, 10)) {
        const tx = await alchemy.transact.getTransaction(txHash);
        _transactions.push(tx);
    }
    return _transactions;
};
export const getIndividualBlock = async (blockNumber) => {
    const block = await alchemy.core.getBlock(blockNumber);
    return block;
};
export const getIndividualTransaction = async (txhash) => {
    const tx = await alchemy.transact.getTransaction(txhash);
    return tx;
};

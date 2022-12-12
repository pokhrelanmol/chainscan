import React from "react";
import { useEffect, useState } from "react";
import { formatAddress, joinClasses } from "../helper";
import { getIndividualBlock, getLastTenBlocks } from "../services";
import { useNavigate } from "react-router-dom";
const BlockMinimal = ({ blockNumber, txCount, validator }) => {
    const navigate = useNavigate();
    const handleBlockDetails = async (blockNumber) => {
        console.log("onclick");
        navigate(`/block/${blockNumber}`);
    };
    return (
        <div
            className={joinClasses(
                "bg-gray-200",
                "flex",
                "gap-4",
                "mt-2",
                "p-4"
            )}
        >
            <div>
                Block:{" "}
                <span
                    className="text-blue-600 cursor-pointer"
                    onClick={() => handleBlockDetails(blockNumber)}
                >
                    {blockNumber}
                </span>
            </div>
            <div>
                No of Txs <span className="text-blue-600">{txCount}</span>
            </div>
            <div>
                Validator :
                <span className="text-blue-600 cursor-pointer">
                    {formatAddress(validator)}
                </span>
            </div>
        </div>
    );
};
const Blocks = () => {
    const [blocks, setBlocks] = useState([]);
    useEffect(() => {
        (async () => {
            const _blocks = await getLastTenBlocks();
            setBlocks(_blocks);
        })();
    }, []);
    return (
        <div>
            <h1 className="text-2xl mb-5">Latest Blocks</h1>
            {blocks.map(({ miner, number, transactions }) => (
                <BlockMinimal
                    key={number}
                    blockNumber={number}
                    validator={miner}
                    txCount={transactions.length}
                />
            ))}
        </div>
    );
};

export default Blocks;

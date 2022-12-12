import React, { useEffect } from "react";
import { useState } from "react";
import { formatAddress, formatEther, joinClasses } from "../helper";
import { getLastTenTxs } from "../services";
const Transaction = ({ from, to, txhash, amount }) => {
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
                From:{" "}
                <span className="text-blue-600 cursor-pointer">
                    {formatAddress(from)}
                </span>
            </div>
            <div>
                To:{" "}
                <span className="text-blue-600 cursor-pointer">
                    {formatAddress(to)}
                </span>
            </div>
            <div>
                Tx Hash:{" "}
                <span className="text-blue-600 cursor-pointer">
                    {formatAddress(txhash)}
                </span>
            </div>
            <div>
                Amount:{" "}
                <span className="text-blue-600">{formatEther(amount)} ETH</span>
            </div>
        </div>
    );
};
const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        (async () => {
            const txs = await getLastTenTxs();
            console.log(txs);
            setTransactions(txs);
        })();
    }, []);
    return (
        <div>
            <h1 className="text-2xl mb-5">Latest Transactions</h1>
            {transactions.map(({ hash, to, from, value }) => (
                <Transaction
                    key={hash}
                    from={from}
                    to={to}
                    txhash={hash}
                    amount={value.toString()}
                />
            ))}
        </div>
    );
};

export default Transactions;

import React, { useState } from "react";
import { useEffect } from "react";
import { formatEther } from "../helper";
import { getAccountEthBalance } from "../services";
import Search from "./Search";

const AccountBalance = () => {
    const [accountBalance, setAccountBalance] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [ethOrToken, setEthOrToken] = useState("eth");

    const handleSearch = async (inputValues) => {
        if (!inputValues) {
            alert("Please enter an address");
            return;
        }
        setIsLoading(true);

        const balance = await getAccountEthBalance(inputValues);
        setAccountBalance(balance.toString());
        setIsLoading(false);
    };

    return (
        <div>
            <Search
                handleSearch={handleSearch}
                placeholder="Address"
                name="address"
            />
            {isLoading ? (
                <div className="text-center text-4xl">Loading...</div>
            ) : accountBalance === null ? (
                <div className="text-center text-4xl">
                    Please Search Balance for some Address{" "}
                </div>
            ) : (
                <div>
                    <div className="text-2xl text-center ">
                        Your Account Balance:{" "}
                        <span className="text-blue-600">
                            {formatEther(accountBalance)} ETH
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountBalance;

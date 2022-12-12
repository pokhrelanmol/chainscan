import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { joinClasses } from "../helper";
const Header = () => {
    const navigate = useNavigate();
    return (
        <header
            className={joinClasses(
                "flex",
                "justify-around",
                "items-center",
                "shadow-sm",
                "p-5"
            )}
        >
            {/* logo */}
            <div className="text-red-400 cursor-pointer">
                <img
                    onClick={() => navigate("/")}
                    className={joinClasses("w-24", "h-24")}
                    src="https://o.remove.bg/downloads/04e9e02e-d17f-492f-8f57-f98c6c390140/chain-removebg-preview.png"
                    alt="logo"
                />
            </div>
            <nav>
                <ul className="flex gap-5 list-none">
                    <li className="text-lg cursor-pointer hover:text-gray-700">
                        Home
                    </li>
                    <li className="text-lg cursor-pointer hover:text-gray-700">
                        Token
                    </li>
                    <li className="text-lg cursor-pointer hover:text-gray-700">
                        Resources
                    </li>
                    <li className="text-lg cursor-pointer hover:text-gray-700">
                        Blockchain
                    </li>
                    <li className="text-lg cursor-pointer hover:text-gray-700">
                        More
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

import React from "react";
import { joinClasses } from "../helper";

const Header = () => {
    return (
        <header
            className={joinClasses(
                "flex",
                "justify-around",
                "shadow-sm",
                "p-5"
            )}
        >
            {/* logo */}
            <div className="text-red-400">
                <img
                    className={joinClasses("w-10", "h-10")}
                    src="https://imgs.search.brave.com/TwgTFtdYwgK-iBYIyJEmfFuIyg6rPhfewN52z0CC9rs/rs:fit:256:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/bFlVM1o4ZlRPWXlE/SXFIQlhHSUx3QUFB/QSZwaWQ9QXBp"
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

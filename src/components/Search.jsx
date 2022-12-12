import React from "react";
import { joinClasses } from "../helper";

const Search = () => {
    return (
        <div className="text-center mt-10">
            <input
                type="text"
                className={joinClasses(
                    "w-1/2",
                    "p-3",
                    "rounded",
                    "bg-gray-200",
                    "focus:outline-blue-500"
                )}
                placeholder="Transaction Hash"
            />
            <button
                className={joinClasses(
                    "bg-blue-400",
                    "text-white",
                    "rounded-md",
                    "z-10",
                    "-ml-5",
                    "p-3"
                )}
            >
                Search
            </button>
        </div>
    );
};

export default Search;

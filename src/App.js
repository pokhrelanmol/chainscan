import { useEffect, useState } from "react";
import Blocks from "./components/Blocks";
import Header from "./components/Header";
import Search from "./components/Search";
import Transactions from "./components/Transactions";
import { Route, Routes } from "react-router-dom";
import { getLastTenBlocks } from "./services";
import Block from "./components/Block";

function App() {
    return (
        <div className="">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <Search />
                            <div className="flex justify-evenly mt-10">
                                <Blocks />
                                <Transactions />
                            </div>
                        </div>
                    }
                />
                <Route path="/block/:blockNumber" element={<Block />} />
            </Routes>
        </div>
    );
}

export default App;

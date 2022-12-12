import React from "react";
import { useParams } from "react-router-dom";
const Block = () => {
    const { blockNumber } = useParams();

    return <div>Block {blockNumber}</div>;
};

export default Block;

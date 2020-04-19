import React from "react";
import UserInput from "../UserInput/UserInput";
import UserOutput from "../UserOutput/UserOutput";
import "./Box.css";

const box = () => {
    return (
        <div className="box">
            <UserInput />
            <UserOutput />
        </div>
    );
};

export default box;

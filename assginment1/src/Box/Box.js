import React from "react";
import UserInput from "../UserInput/UserInput";
import UserOutput from "../UserOutput/UserOutput";
import "./Box.css";

const box = props => {
    return (
        <div className="box">
            <UserInput
                value={props.input}
                change={props.changed}
                id={props.id}
            />
            <UserOutput heading={props.content} content={props.input} />
        </div>
    );
};

export default box;

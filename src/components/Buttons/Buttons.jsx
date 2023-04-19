import React from "react";

// import { ReactDOM } from "react";

export const Buttons = ({ ps, onClick }) => {
    console.log(ps);
    const keys = Object.keys(ps);
    console.log(keys);
    console.log(onClick);
    return (
        
        <>
        <h3>buttons</h3>
            {keys.map(key => {
                return (
                    <li>
                        <button onClick={onClick} type="button">{ key}</button>
                    </li>
                )
            })}
        </>
    )
}
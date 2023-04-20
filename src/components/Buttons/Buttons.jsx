import React from "react";

import styles from "./Buttons.module.css"

export const Buttons = ({ps, priClick} ) => {       
    
    return (
        
        <>
            <ul className={styles.list}>
                {Object.keys(ps).map(key => {
                        return (
                            <li className={styles.item} key={key}>
                                <button name={key} type="button" onClick={priClick} >{key}</button>
                                {/* <span>{ ps[key]}</span> */}
                            </li>
                        )
                })}
            </ul>
        </>
    )
}
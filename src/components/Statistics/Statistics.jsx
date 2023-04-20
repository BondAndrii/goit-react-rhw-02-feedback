import React from "react";

import styles from "./Statistics.module.css"

export const Statistics = ({ps, total, positive}) => {
    return (
    <>
        <h2 className={styles.text}>Statistics</h2>
            <ul className={styles.list}>
            {Object.keys(ps).map(key => {
                    return (
                        <li className={styles.item} key={key}>
                            <p className={styles.character}>{key}</p>
                            <p>{ ps[key]}</p>
                        </li>
                    )
            })}
                <li className={styles.item} key="total">
                    <p className={styles.character}>Total</p>
                    <p>{total }</p>
                </li>
                 <li className={styles.item} key="positive" >
                    <p className={styles.character}>Positive feedback</p>
                    <p>{positive } %</p>
                </li>
            </ul>
        </>
    )
}
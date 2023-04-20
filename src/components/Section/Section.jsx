import React from "react";

import styles from "./Section.module.css";

export const Section = ({ title, children }) => {
    console.log(title);
    return (
    <>
        <h2 className={styles.text}>{title}</h2>
        {children}
    </>
    )

}
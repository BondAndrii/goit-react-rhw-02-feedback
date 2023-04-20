import React from "react";

import styles from "./Notification.module.css"

export const Notification = ({ message }) => {
    return <h1 className={styles.message}>{message}</h1>
}
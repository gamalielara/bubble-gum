import React, {useState} from "react";
import styles from "./index.module.scss";
import {createPortal} from "react-dom";
import {BaseComponent} from "../../types/interface";

const ToastBox: React.FC<BaseComponent> = ({children}) => {
    return(
        <div className={styles["toast-wrapper"]}>
            {children}
            <button className={styles['close-btn']}>&times;</button>
        </div>
    );
};

export default ToastBox


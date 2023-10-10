import React, {useContext} from "react"
import styles from "./index.module.scss"
import {ToastContext} from "../ToastProvider";
import ToastBox from "../ToastBox";

const ToastShelf: React.FC = () => {
    const context = useContext(ToastContext);

    return (
        <aside className={styles["toast-shelf-container"]}>
            <ul className={styles["toast-shelf"]}>
                {context?.toasts.map((toast) => (
                    <li>
                        <ToastBox>{toast.message}</ToastBox>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default ToastShelf

import React, {useContext} from "react"
import styles from "./index.module.scss"
import {ToastContext} from "../ToastProvider";
import ToastBox from "../ToastBox";

const ToastShelf: React.FC = () => {
    const {toasts} = useContext(ToastContext);

    return (
        <ul className={styles.toastShelf}>
            {toasts.map((toast) => (
                <li>
                    <ToastBox>{toast.message}</ToastBox>
                </li>
            ))}
        </ul>
    )
}

export default ToastShelf

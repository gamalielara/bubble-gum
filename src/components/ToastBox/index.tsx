import React, {useContext, useEffect, useRef} from "react";
import styles from "./index.module.scss";
import {BaseComponent} from "../../types/interface";
import {ToastContext} from "../ToastProvider";

const ToastBox: React.FC<BaseComponent> = ({children}) => {
    const context = useContext(ToastContext);

    const thisToastRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            thisToastRef.current?.animate(
                [
                    { transform: "translateX(0)" },
                    { transform: "translateX(calc(100% - 20px))"},
                ],
                100
            );
            context?.setToasts((state) => {
                const newArr = [...state];
                newArr.shift()
                return newArr;
            });
        }, 2500)
    }, []);


    return (
        <div className={styles["toast-wrapper"]} ref={thisToastRef}>
            {children}
            <button className={styles['close-btn']}>&times;</button>
        </div>
    );
};

export default ToastBox


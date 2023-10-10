import React, {createContext, useEffect, useState} from "react";
import {BaseComponent, IToast, IToastContextValue} from "../../types/interface";
import ToastShelf from "../ToastShelf";


export const ToastContext = createContext<IToastContextValue|null>(null);

const ToastProvider: React.FC<BaseComponent> = ({children}) => {
    const [toasts, setToasts] = useState<IToast[]>([]);

    console.log({toasts, setToasts})

    return (
        <ToastContext.Provider value={{toasts, setToasts}}>
            {children}
            <ToastShelf/>
        </ToastContext.Provider>
    );
};

export default ToastProvider

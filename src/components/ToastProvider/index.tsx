import React, {createContext, useState} from "react";
import {BaseComponent, IToast, IToastContextValue} from "../../types/interface";


export const ToastContext = createContext<IToastContextValue>({} as IToastContextValue);

const ToastProvider: React.FC<BaseComponent> = ({children}) => {
    const [toasts, setToasts] = useState<IToast[]>([]);

    return (
        <ToastContext.Provider value={{toasts, setToasts}}>
            {children}
        </ToastContext.Provider>
    );
};

export default ToastProvider

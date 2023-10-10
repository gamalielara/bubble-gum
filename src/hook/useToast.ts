import {useContext, useEffect, useState} from "react";
import {ToastContext} from "../components/ToastProvider";
import {ToastVariant} from "../types/interface";

export  default () => {
    const [successToastCallback, setSuccessToastCallback] = useState<(...args: any[]) => void>();

    const context = useContext(ToastContext);

    console.log("CONTEXT ", context)

    useEffect(() => {
        if(!context) return;

        const {setToasts} = context;

        const addSuccessToaster = (message: string) => {
            const newToast = {
                variant: ToastVariant.SUCCESS,
                message
            }

            setToasts(state => [...state, newToast ])
        }

        setSuccessToastCallback(() => addSuccessToaster)
    }, []);

    return {
        addSuccessToaster: successToastCallback,
    }

}


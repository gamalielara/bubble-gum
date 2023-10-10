import {useContext} from "react";
import {ToastContext} from "../components/ToastProvider";
import {ToastVariant} from "../types/interface";

export const addSuccessToast = (message: string) => {
    const {setToasts} = useContext(ToastContext);

    const newToast = {
        variant: ToastVariant.SUCCESS,
        message
    }

    setToasts(state => [...state, newToast]);
}

export default {addSuccessToast}


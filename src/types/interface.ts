import {ReactNode} from "react";

export interface BaseComponent {
    children?: ReactNode;
}

export enum ToastVariant{
    SUCCESS,
    WARNING,
    FAILED
}

export interface IToast{
    message: string;
    variant: ToastVariant
}

export interface IToastContextValue {
    toasts: IToast[];
    setToasts:  React.Dispatch<React.SetStateAction<IToast[]>>
}

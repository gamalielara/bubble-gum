import React from "react";
import ToastProvider from "../ToastProvider";
import ToastShelf from "../ToastShelf";

export default () => {
    return (
        <ToastProvider>
            <ToastShelf/>
        </ToastProvider>
    );
}

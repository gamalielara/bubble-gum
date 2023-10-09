import React from "react";
import styles from "./index.module.scss";
import {createPortal} from "react-dom";

const Toast: React.FC = () => {
  return createPortal(<div className={styles["toast-wrapper"]}>hei hei heyy hellow</div>, document.body);
};

export default Toast


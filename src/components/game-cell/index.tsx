import React from "react";
import styles from "./styles.module.css";

const GameCell = (props: { index: number, value?: number }) => {
  const { index, value } = props;
  return (
    <div className={`${styles["cell"]}`}>
        <p className={styles['index']}>{index}</p>
        {!!value && <div className={styles['value']}>{value}</div>}
    </div>
  );
};

export default GameCell;

import React from "react";
import styles from "./styles.module.css";

const GameCell = (props: { value?: number }) => {
  const { value } = props;
  return (
    <div className={`${styles["cell"]}`}>
      {value && <div className={styles['value']}>{value}</div>}
    </div>
  );
};

export default GameCell;

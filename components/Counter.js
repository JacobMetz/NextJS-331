import React, { useState } from "react";
import styles from './Counter.module.css';

export default function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div className={styles.counterContainer}>
        <p className={styles.count}>Count: {count}</p>
        <button 
          className={styles.button}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    );
}
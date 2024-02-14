import React from "react";
import { Counter } from "./Counter";
import styles from "./page.module.scss";

export default function useStateSample() {
  return (
    <div className={styles.useStateSample}>
      <h1>Exemplo de useState</h1>
      <p>
        Esse é um exemplo simples de uso do hook useState para criar um contador.
      </p>
      <Counter initialCount={0} />
    </div>
  );
}

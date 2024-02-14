import { BackgroundColorChanger } from "./BackgroundColorChanger";
import styles from "./page.module.scss";
import React from "react";

export default function PagC() {
  return (
    <div className={styles.useContextSample}>
      <h1>Exemplo de useContext</h1>
      <p>Exemplo de uso de useContext para trocar a cor de fundo da página.</p>
      <BackgroundColorChanger />
    </div>
  );
}
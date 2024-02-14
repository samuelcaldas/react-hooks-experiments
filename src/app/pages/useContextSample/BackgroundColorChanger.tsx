"use client"; // This is a client component
import styles from "./page.module.scss";
import React, { useContext } from "react";

// Criar um contexto para armazenar a cor de fundo da página
export const BackgroundColorContext = React.createContext("white");

// Criar um componente que usa o contexto para mudar a cor de fundo da página
export function BackgroundColorChanger() {
  // Obter o valor atual do contexto
  const backgroundColor = useContext(BackgroundColorContext);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function handleChange() {
    const newColor = getRandomColor();

    document.body.style.backgroundColor = newColor;
  }

  return (
    <button onClick={handleChange} className={styles.button}>
      Mudar cor de fundo
    </button>
  );
}

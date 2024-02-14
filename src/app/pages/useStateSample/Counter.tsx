"use client"; // This is a client component
import { useState } from "react";
import React from "react";

export interface CounterProps {
  initialCount: number;
}

export const Counter: React.FC<CounterProps> = (props) => {
  const [count, setCount] = useState(props.initialCount);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
};

import styles from "./page.module.scss";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className={styles.home}>
        <h1>React Hooks experiments</h1>
        <p>
          Esse é um simples projeto para demonstrar meu aprendizado com React Hooks.
        </p>
        <ul>
          <li>
            <Link href="/pages/useStateSample">
              Exemplo de uso de useState para criar um contador.
            </Link>
          </li>
          <li>
            <Link href="/pages/useEffectSample">
              Exemplo de uso de useEffect para restaurar a cor de fundo da página.
            </Link>
          </li>
          <li>
            <Link href="/pages/useContextSample">
              Exemplo de uso de useContext para trocar a cor de fundo da página.
            </Link>
          </li>
          <li>
            <Link href="/pages/useSWRSample">
              Exemplo de uso de useSWR para carregar dados de uma API de clima.
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

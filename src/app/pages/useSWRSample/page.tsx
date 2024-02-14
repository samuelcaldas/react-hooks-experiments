import styles from "./page.module.scss";
import { Weather } from "./Weather";

// Export the default function that renders the page
export default function PagB() {
  return (
    <div className={styles.useSWRSample}>
      <h1>Exemplo de useSWR</h1>
      <p>
        Exemplo de uso de useSWR para carregar dados de uma API de clima.
      </p>
      <Weather />
    </div>
  );
}
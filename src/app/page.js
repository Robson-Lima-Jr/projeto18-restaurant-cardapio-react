import styles from "./page.module.css";

// Importação Componentes
import Topo from "./components/Topo";
import AreaBotoes from "./components/AreaBotoes";


export default function Home() {
  return (
    <div>
      <Topo />
      
      <main className={styles.container_base}>
        <AreaBotoes />


      </main>

      
    </div>
  );
}

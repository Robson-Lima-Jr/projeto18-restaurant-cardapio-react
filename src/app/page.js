import styles from "./page.module.css";
import Image from "next/image";

// Importação Componentes
import Topo from "./components/Topo";
import AreaBotoes from "./components/AreaBotoes";

// Importação imagens
import Lupa from "/public/lupa.png";

export default function Home() {
  return (
    <div>
      <Topo />

      <main className={styles.container_base}>
        <AreaBotoes />

        <div className={styles.container_busca}>
          <Image src={Lupa} alt="Lupa" className={styles.lupa_img}></Image>

          <input 
          className={styles.input_busca}
          type="text" 
          name="busca" 
          id="idBuca" 
          placeholder="Pesquise aqui um dos pratos do nosso cardápio..."
          />
        </div>
      </main>


    </div>
  );
}

import styles from "./page.module.css";
import Image from "next/image";


// Importação Componentes
import Topo from "./components/Topo";
import AreaBotoes from "./components/AreaBotoes";
import Card from "./components/Card";

// Importação imagens
import Lupa from "/public/lupa.png";

// Importação de dados
import { produtos } from "./data/dados.js";

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

        <section className={styles.container_cardapio}>
          <h2>Cardápio</h2>

          <div className={styles.cards_area}>
            {produtos.map((produtos) => (
              <Card
                key={produtos.id}
                imagem={produtos.imagem}
                nome={produtos.nome}
                categoria={produtos.categoria}
                descricao={produtos.descricao}
                preco={produtos.preco}

              />
            ))}
          </div>
        </section>
      </main>


    </div>
  );
}

"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";


// Importação Componentes
import Topo from "./components/Topo";
import AreaBotoes from "./components/AreaBotoes";
import Card from "./components/Card";

// Importação imagens
import Lupa from "/public/lupa.png";
import EntradaIcone from "/public/entrada.png";
import MassaIcone from "/public/massa.png";
import CarnesIcone from "/public/carne.png";
import BebidasIcone from "/public/bebidas.png";
import SaladasIcone from "/public/salada.png";
import SobremesaIcone from "/public/sobremesa.png";

// Importação de dados
import { filtroDados } from "./services";

export default function Home() {
  const [tipoPrato, setTipoPrato] = useState(filtroDados("Entradas"));

  const handleFiltroDados = (categoria) => {
    setTipoPrato(filtroDados(categoria));
  }

  return (
    <div>
      <Topo />

      <main className={styles.container_base}>
        <section className={styles.container_botoes}>
          <AreaBotoes
            nome={"Entrada"}
            icone_botao={EntradaIcone}
            onClick={() => handleFiltroDados("Entradas")}
          />

          <AreaBotoes
            nome={"Massas"}
            icone_botao={MassaIcone}
            onClick={() => handleFiltroDados("Massas")}
          />

          <AreaBotoes
            nome={"Carnes"}
            icone_botao={CarnesIcone}
            onClick={() => handleFiltroDados("Carnes")}
          />

          <AreaBotoes
            nome={"Bebidas"}
            icone_botao={BebidasIcone}
            onClick={() => handleFiltroDados("Bebidas")}
          />

          <AreaBotoes
            nome={"Saladas"}
            icone_botao={SaladasIcone}
            onClick={() => handleFiltroDados("Saladas")}
          />

          <AreaBotoes
            nome={"Sobremesas"}
            icone_botao={SobremesaIcone}
            onClick={() => handleFiltroDados("Sobremesas")}
          />
        </section>

        <div className={styles.container_busca}>
          <Image src={Lupa} alt="Lupa" className={styles.lupa_img}></Image>

          <input
            className={styles.input_busca}
            type="text"
            name="busca"
            id="idBusca"
            placeholder="Pesquise aqui um dos pratos do nosso cardápio..."
          />
        </div>

        <section className={styles.container_cardapio}>
          <h2>Cardápio</h2>

          <div className={styles.cards_area}>
            {tipoPrato.map((produtos) => (
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

import styles from "./AreaBotoes.module.css";
import Image from "next/image";

// importar imagens
import Entrada from "/public/entrada.png";
import Massa from "/public/massa.png";
import Carnes from "/public/carne.png";
import Bebidas from "/public/bebidas.png";
import Saladas from "/public/salada.png";
import Sobremesa from "/public/sobremesa.png";

export default function AreaBotoes() {
    return (
        <section className={styles.container_botoes}>
            <button className={styles.btn_config}>
                <Image src={Entrada} alt="Icone Botão" className={styles.icone_config}></Image>
                Entradas
            </button>

            <button className={styles.btn_config}>
                <Image src={Massa} alt="Icone Botão" className={styles.icone_config}></Image>
                Massas
            </button>

            <button className={styles.btn_config}>
                <Image src={Carnes} alt="Icone Botão" className={styles.icone_config}></Image>
                Carnes
            </button>

            <button className={styles.btn_config}>
                <Image src={Bebidas} alt="Icone Botão" className={styles.icone_config}></Image>
                Bebidas
            </button>

            <button className={styles.btn_config}>
                <Image src={Saladas} alt="Icone Botão" className={styles.icone_config}></Image>
                Saladas
            </button>

            <button className={styles.btn_config}>
                <Image src={Sobremesa} alt="Icone Botão" className={styles.icone_config}></Image>
                Sobremesas
            </button>
        </section>
    );
}
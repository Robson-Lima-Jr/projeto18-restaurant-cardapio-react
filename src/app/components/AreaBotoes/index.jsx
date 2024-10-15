import styles from "./AreaBotoes.module.css";
import Image from "next/image";

export default function AreaBotoes({onClick, icone_botao, nome}) {
    return (
        <section className={styles.container_botoes}>
            <button className={styles.btn_config}>
                <Image src={icone_botao} alt="Icone Botão" className={styles.icone_config}
                    onClick={onClick}></Image>
                {nome}
            </button>
        </section>
    );
}
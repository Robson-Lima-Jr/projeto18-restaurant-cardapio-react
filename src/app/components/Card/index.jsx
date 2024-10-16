import styles from "./Card.module.css";
import Image from "next/image";

export default function Card({nome, categoria, preco, descricao, imagem}) {
    return (
        <div className={styles.card_config}>
            <Image src={imagem} alt={"Imagem de: " + nome} className={styles.img_config}></Image>

            <div className={styles.card_texto}>
                <h3>{nome}</h3>

                <small>{categoria}</small>
                
                <p>{descricao}</p>

                <span>R$ {preco}</span>
            </div>
        </div>
    );
}
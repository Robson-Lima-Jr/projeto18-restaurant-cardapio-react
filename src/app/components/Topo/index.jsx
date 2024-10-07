import styles from "./Topo.module.css";

export default function Topo() {
    return(
        <header className={styles.container_topo}>
            <div className={styles.conteudo_topo}>
                <h1>Restaurant</h1>

                <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados.</p>
            </div>
        </header>
    );
}
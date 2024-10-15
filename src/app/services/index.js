import { produtos } from "../data/dados";

// exporta a lista de produtos completa
export const filtroDados = (categoria) => {
    return produtos.filter((pratos) => pratos.categoria === categoria);
}
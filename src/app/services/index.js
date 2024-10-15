import { produtos } from "../data/dados";

// funçao para filtrar os botôes
export const filtroDados = (categoria) => {
    return produtos.filter((pratos) => pratos.categoria === categoria);
}

// função para fazer busca na área de busca
export const buscaDados = (texto) => {
    return produtos.filter((pratos) =>
        pratos.nome.toLowerCase().includes(texto.toLowerCase()) ||
        pratos.descricao.toLowerCase().includes(texto.toLowerCase()) ||
        pratos.categoria.toLowerCase().includes(texto.toLowerCase())
    )
};
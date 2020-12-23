const BASE_URL = "http://localhost:1337";

async function carregarDados(colecao) {
  const resposta = await fetch(BASE_URL + colecao);
  const dados = await resposta.json();
  return dados;
}

async function buscarProdutos() {
  const produtos = carregarDados("/products");
  return produtos;
}

async function buscarProdutosPorCategoria(categoria) {
  const cagoreries = await carregarDados("/categories?slug=" + categoria);
  return cagoreries[0].products;
}
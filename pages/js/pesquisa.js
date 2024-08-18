import { produtos } from "./produtos.js";
import { carregaProdutos } from "./containerProdutos.js";

const $ = document.querySelector.bind(document);
const botaoPesquisa = $("#pesquisar-produto");

botaoPesquisa.addEventListener("click", function (event) {
  event.preventDefault();
  // pesquisa preco preco-value categoria
  const pesquisa = $("#pesquisa").value;
  const precoCondicao = $("#preco").value;
  const precoValor = Number($("#preco-value").value);
  const categoria = $("#categoria").value;
  let produtosFiltrados = [...produtos];

  if (categoria !== "-") {
    produtosFiltrados = produtosFiltrados.filter(
      (produto) => produto.categoria === categoria
    );
  }  
  if (precoCondicao !== "-" && precoValor) {
    switch (precoCondicao) {
      case "maior":
        produtosFiltrados = produtosFiltrados.filter(
          (produto) => produto.preco > precoValor
        );
        break;
      case "menor":
        produtosFiltrados = produtosFiltrados.filter(
          (produto) => produto.preco < precoValor
        );
        break;
      case "igual":
        produtosFiltrados = produtosFiltrados.filter(
          (produto) => produto.preco === precoValor
        );
        break;
      default:
        break;
    }
  }
  if (pesquisa) {
    produtosFiltrados = produtosFiltrados.filter((produto) =>
      (produto.nome.toLowerCase()).includes(pesquisa.toLowerCase())
    );
  }
  console.log(produtosFiltrados);

  carregaProdutos(produtosFiltrados);
});

carregaProdutos(produtos);

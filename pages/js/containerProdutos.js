const containerProdutos = document.querySelector(".container-produtos");

export function carregaProdutos(produtos) {
  containerProdutos.innerHTML = "";
  produtos.forEach((produto) => {
    containerProdutos.innerHTML += `
  <a href="${produto.link}">
            <div class="produto">
              <div class="container-img">
                <img
                  src="${produto.img}"
                  alt="${produto.nome}"
                  class="img-product ${produto.reduce ? "reduce" : ""}"
                />
              </div>
              <div class="name-and-value">
                <h2 class="product-name">${produto.nome}</h2>
                <span class="product-value">${produto.preco.toFixed(2)} R$</span>
              </div>
              <button class="btn-comprar">Comprar</button>
            </div>
  </a>
  `;
  });
}
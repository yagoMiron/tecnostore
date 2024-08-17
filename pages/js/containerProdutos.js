import { produtos } from "./produtos.js";
const containerProdutos = document.querySelector(".container-produtos");

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
              <span class="product-value">${produto.preco.toFixed(2)}</span>
            </div>
            <button class="btn-comprar">Comprar</button>
          </div>
</a>
`;
});

/*
 <a href="https://web.whatsapp.com/">
          <div class="produto">
            <div class="container-img">
              <img
                src="../img/products/watchApple.png"
                alt=""
                class="img-product"
              />
            </div>
            <div class="name-and-value">
              <h2 class="product-name">Apple Watch</h2>
              <span class="product-value">R$ 6.000,99</span>
            </div>
            <button class="btn-comprar">Comprar</button>
          </div>
        </a>
*/

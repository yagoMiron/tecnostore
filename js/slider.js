const radios = document.querySelectorAll(".radio_btn");
const delay = (millisegundos) => {
  return new Promise((resolve) => setTimeout(resolve, millisegundos));
};

radios[0].checked = true;


for (let index = 0; index < 100; index++) {
  await delay(5000);
  passaSlide();
}


function passaSlide() {
  const posicaoAtual = achaPosicao();
  const proximaPosicao = posicaoAtual + 1 >= 4 ? 0 : posicaoAtual + 1;
  radios[proximaPosicao].checked = true;
}
function achaPosicao() {
  for (let index = 0; index < radios.length; index++) {
    if (radios[index].checked == true) {
      return index;
    }
  }
  return 0;
}
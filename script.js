const btnCor = document.getElementById("btn-cor");
const board = document.getElementById("board");

function gerarCorAleatoria() {
  const caracteres = "0123456789ABCDEF";
  let cor = "#";
  for (let i = 0; i < 6; i++) {
    cor += caracteres[Math.floor(Math.random() * 16)];
  }
  return cor;
}

function adicionarQuadradoColorido() {
  const novoQuadrado = document.createElement("div");
  novoQuadrado.classList.add("artboard-item");

  const corGerada = gerarCorAleatoria();
  novoQuadrado.style.backgroundColor = corGerada;

  novoQuadrado.addEventListener("click", function () {
    novoQuadrado.remove();
  });

  board.appendChild(novoQuadrado);
}

btnCor.addEventListener("click", adicionarQuadradoColorido);

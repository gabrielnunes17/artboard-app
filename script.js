const btnCor = document.getElementById("btn-cor");
const inputCor = document.getElementById("input-cor");
const board = document.getElementById("board");

function adicionarQuadradoColorido() {
  const novoQuadrado = document.createElement("div");
  novoQuadrado.classList.add("artboard-item");

  novoQuadrado.style.backgroundColor = inputCor.value;

  novoQuadrado.addEventListener("click", function () {
    novoQuadrado.remove();
  });

  board.appendChild(novoQuadrado);
}

btnCor.addEventListener("click", adicionarQuadradoColorido);


// elementos do menu mobile
const btnMenu = document.getElementById('btn-menu');
const menuAcoes = document.getElementById('menu-acoes');

btnMenu.addEventListener('click', function() {
    menuAcoes.classList.toggle('ativo');
});
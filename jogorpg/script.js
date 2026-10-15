// Captura de Elementos do DOM
const form = document.getElementById("form-cadastro");
const inputTitulo = document.getElementById("titulo");
const inputPlataforma = document.getElementById("plataforma");
const inputGenero = document.getElementById("genero");
const inputImagem = document.getElementById("imagem");

const btnTema = document.getElementById("btn-tema");
const btnToggleForm = document.getElementById("btn-toggle-form");
const secFormulario = document.getElementById("sec-formulario");
const mensagemErro = document.getElementById("mensagem-erro");
const gridCatalogo = document.getElementById("grid-catalogo");
const contadorJogos = document.getElementById("contador-jogos");

// Elementos de Pré-visualização
const prevTitulo = document.getElementById("prev-titulo");
const prevPlataforma = document.getElementById("prev-plataforma");
const prevGenero = document.getElementById("prev-genero");
const prevImg = document.getElementById("prev-img");

let totalJogos = 0;

// Requisito 4: Modo Claro e Escuro
btnTema.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  
  if (document.body.classList.contains("dark-mode")) {
    btnTema.innerText = "◎ Modo Claro";
  } else {
    btnTema.innerText = "◉ Modo Escuro";
  }
});

// Requisito 5: Mostrar e Ocultar Formulário
btnToggleForm.addEventListener("click", function () {
  secFormulario.classList.toggle("oculto");

  if (secFormulario.classList.contains("oculto")) {
    btnToggleForm.innerText = "+ Mostrar Formulário";
  } else {
    btnToggleForm.innerText = "– Ocultar Formulário";
  }
});

// Atualização Dinâmica da Pré-visualização
function atualizarPreview() {
  prevTitulo.innerText = inputTitulo.value || "Título do Jogo";
  prevPlataforma.innerText = inputPlataforma.value || "---";
  prevGenero.innerText = inputGenero.value || "---";
  prevImg.src = inputImagem.value || "https://via.placeholder.com/300x160?text=Capa+do+Jogo";
}

inputTitulo.addEventListener("input", atualizarPreview);
inputPlataforma.addEventListener("change", atualizarPreview);
inputGenero.addEventListener("input", atualizarPreview);
inputImagem.addEventListener("input", atualizarPreview);

// Requisito 7, 8 e 9: Validação, Cadastro e Limpeza
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o recarregamento da página

  const titulo = inputTitulo.value.trim();
  const plataforma = inputPlataforma.value;
  const genero = inputGenero.value.trim();
  let imagem = inputImagem.value.trim();

  // Validação: verifica se campos obrigatórios estão vazios
  if (titulo === "" || plataforma === "" || genero === "") {
    mensagemErro.classList.remove("oculto");
    return;
  }

  // Ocultar mensagem de erro caso estivesse visível
  mensagemErro.classList.add("oculto");

  // Imagem padrão caso não seja preenchida
  if (imagem === "") {
    imagem = "https://via.placeholder.com/300x160?text=Sem+Imagem";
  }

  // Criar o card dinamicamente
  criarCardJogo(titulo, plataforma, genero, imagem);

  // Requisito 8: Limpeza do formulário
  form.reset();
  atualizarPreview();
});

// Função para Criar e Inserir o Card
function criarCardJogo(titulo, plataforma, genero, imagem) {
  // Requisito 9: document.createElement
  const card = document.createElement("div");
  card.classList.add("card-jogo");

  // Conteúdo do Card
  card.innerHTML = `
    <img src="${imagem}" alt="${titulo}">
    <div class="card-corpo">
      <h4>${titulo}</h4>
      <p><strong>Plataforma:</strong> ${plataforma}</p>
      <p><strong>Gênero:</strong> ${genero}</p>
    </div>
    <button class="btn-excluir">Excluir</button>
  `;

  // Requisito 6: Seleção de Itens (Destaque visual)
  card.addEventListener("click", function (e) {
    // Evita selecionar se o clique foi no botão de excluir
    if (e.target.classList.contains("btn-excluir")) return;
    
    card.classList.toggle("selecionado");
  });

  // Desafio Adicional: Botão Excluir
  const btnExcluir = card.querySelector(".btn-excluir");
  btnExcluir.addEventListener("click", function () {
    card.remove();
    totalJogos--;
    atualizarContador();
  });

  // Inserção no DOM
  gridCatalogo.appendChild(card);

  // Atualiza contador de itens
  totalJogos++;
  atualizarContador();
}

// Desafio Adicional: Atualizar Contador
function atualizarContador() {
  contadorJogos.innerText = `Total: ${totalJogos} jogo(s)`;
}
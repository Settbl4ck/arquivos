// ======================================================
// AVALIAÇÃO FINAL - UC3
// Painel de Eventos Escolares
//
// O projeto possui erros, trechos incompletos e funcionalidades que precisam ser implementadas.
// Leia o enunciado antes de modificar o código.
// ======================================================
// ------------------------------------------------------
// 1. SELEÇÃO DOS ELEMENTOS
// ------------------------------------------------------
let campoNome = document.querySelector("#nome");
let campoCategoria = document.querySelector("#categoria");
let campoData = document.querySelector("#data");
let campoDescricao = document.querySelector("#descricao");
let botaocadstrar = document.querySelector("#cadastrar");
let mensagem = document.querySelector("#mensagem");
let listaEventos = document.querySelector("#listaEventos");
// ------------------------------------------------------
// 2. EVENTO DO BOTÃO
// ------------------------------------------------------
botaocadstrar.addEventListener("click", cadastrarEvento);
// ------------------------------------------------------
// 3. VALIDAÇÃO DOS CAMPOS
// ------------------------------------------------------
function validarCampos() {
    if (
        campoNome.value === "" ||
        campoCategoria.value === "" ||
        campoData.value === "" ||
        campoDescricao.value === ""
    ) {
        mensagem.innerText = "Preencha todos os campos.";
        return false;
    } else {
        mensagem.innerText = "";
        return true;
    }
}
// ------------------------------------------------------
// 4. CADASTRO DO EVENTO
// ------------------------------------------------------
function cadastrarEvento() {
    if (validarCampos() === false) {
        return;
    }

    let novoEvento = document.createElement("div");
    novoEvento.className = "evento";

    let titulo = document.createElement("h3");
    titulo.className = "titulo";
    titulo.innerText = campoNome.value;

    let categoria = document.createElement("p");
    categoria.className = "categoria";
    categoria.innerText = "Categoria: " + campoCategoria.value;

    let data = document.createElement("p");
    data.className = "data";
    data.innerText = "Data: " + campoData.value;

    let descricao = document.createElement("p");
    descricao.className = "descricao";
    descricao.innerText = campoDescricao.value;

    let botaoSelecionar = document.createElement("button");
    botaoSelecionar.className = "selecionar";
    botaSelecionar.innerText = "Selecionar";

    botaoSelecionar.addEventListener("click", function () {
        novoEvento.classList.toggle("selecionado");
    });

    novoEvento.appendChild(titulo);
    novoEvento.appendChild(categoria);
    
    novoEvento.appendChild(data);
    novoEvento.appendChild(descricao)
    novoEvento.appendChild(botaoSelecionar);

    // --------------------------------------------------
    // TODO - IMPLEMENTAÇÃO OBRIGATÓRIA
    //
    // Crie um botão com o texto "Selecionar".
    //
    // Ao clicar nesse botão, o card novoEvento deverá receber/remover a classe CSS "selecionado".
    //
    // Utilize os recursos estudados durante as aulas.
    // --------------------------------------------------
    listaEventos.appendChild(novoEvento);
    // --------------------------------------------------
    // TODO - FINALIZAÇÃO
    //
    // Após o cadastro, limpe os quatro campos do formulário.
    // --------------------------------------------------
    campoNome.value = "";
    campoCategoria.value = "";
    campoData.value = "";
    campoDescricao.value = "";
}

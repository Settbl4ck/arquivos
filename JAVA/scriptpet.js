let inputNome = document.querySelector("#nome");
let inputAssunto = document.querySelector("#assunto");
let inputMensagem = document.querySelector("#mensagem");

let btnPrevisualizar = document.querySelector("#btn-previsualizar");
let btnPublicar = document.querySelector("#btn-publicar");

let prevNome = document.querySelector("#prev-nome");
let prevAssunto = document.querySelector("#prev-assunto");
let prevMensagem = document.querySelector("#prev-mensagem");

let msgErro = document.querySelector("#msg-erro");
let mural = document.querySelector("#mural");

function escrever() {
    let nome = inputNome.value.trim();
    let assunto = inputAssunto.value.trim();
    let mensagem = inputMensagem.value.trim();

    if (nome === "" || assunto === "" || mensagem === "") {
        msgErro.innerText = "Por favor, preencha todos os campos antes de prosseguir!";
        msgErro.style.display = "block";
        return false;
    } else {
        msgErro.innerText = "";
        msgErro.style.display = "none";
        return true;
    }
}


function previsualizarRecado() {
    if (escrever()) {
        prevNome.innerText = "Por: " + inputNome.value;
        prevAssunto.innerText = inputAssunto.value;
        prevMensagem.innerText = inputMensagem.value;
    }
}

btnPrevisualizar.addEventListener("click", previsualizarRecado);



function publicarRecado() {
    
    if (!escrever()) {
        return;
    }

    let novoCard = document.createElement("div");
    let novoAssunto = document.createElement("h4");
    let novaMensagem = document.createElement("p");
    let novoAutor = document.createElement("span");

    novoCard.classList.add("card-recado");
    
    novoAssunto.innerText = inputAssunto.value;
    novaMensagem.innerText = inputMensagem.value;
    novoAutor.innerText = "Por: " + inputNome.value;
    novoAutor.classList.add("autor");

    
    novoCard.appendChild(novoAssunto);
    novoCard.appendChild(novaMensagem);
    novoCard.appendChild(novoAutor);

    
    mural.appendChild(novoCard);

    
    inputNome.value = "";
    inputAssunto.value = "";
    inputMensagem.value = "";
    
    prevAssunto.innerText = "Assunto do recado";
    prevMensagem.innerText = "A prévia da mensagem aparecerá aqui...";
    prevNome.innerText = "Por: Nome do Autor";
}

btnPublicar.addEventListener("click", publicarRecado);
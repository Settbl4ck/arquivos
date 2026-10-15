let botaoatualizar = document.querySelector("#atualizar");
botaoatualizar.addEventListener("click", atualizarPerfil);

function atualizarPerfil() {
    let camponome = document.querySelector("#nome");
    let campoprofissao = document.querySelector("#profissao");
    let campocidade = document.querySelector("#cidade");
    let campodescricao = document.querySelector("#descricao");

    let nomeperfil = document.querySelector("#nomeperfil");
    let profissaoperfil = document.querySelector("#profissaoperfil");
    let cidadeperfil = document.querySelector("#cidadeperfil");
    let descricaoperfil = document.querySelector("#descricaoperfil");

    if(camponome.value=="") {
        nomeperfil.innerText = "Informe um nome";
    } else {
        nomeperfil.innerText = camponome.value;
    }
    profissaoperfil.innerText = campoprofissao.value;
    cidadeperfil.innerText = campocidade.value;
    descricaoperfil.innerText = campodescricao.value;
}
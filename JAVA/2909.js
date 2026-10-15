let campoNome = document.querySelector("#nome");
//campoNome: é o nome do produto.
let campoCategoria = document.querySelector("#categoria");
//campoCategoria: diz qual tipo de coisa é o produto.
let campoPreco = document.querySelector("#preco");
//campoPreço: mostra quanto custa o produto.
let campoDescricao = document.querySelector("#descricao");
//campoDescrição: conta sobre o produto, explicando o que ele é e para que serve.
let botaoVisualizar = document.querySelector("#visualizar");
//campoBotãoVisualizar: serve para olhar como as informações ficaram antes de adicionar.
let botaoAdicionar = document.querySelector("#adicionar");
//BotãoAdicionar: serve para colocar o produto na lista.
let visualNome = document.querySelector("#visualNome");
//Visualizar Nome: mostra o nome do produto.
let visualCategoria = document.querySelector("#visualCtegoria");
//Visualizar Categoria: mostra qual é o tipo do produto.
let visualPreco = document.querySelector("#visualpreco");
//Visualizar Preço: mostra quanto o produto custa.
let visualDescricao = document.querySelector("#visualDescricao");
//Visualizar Descrição: mostra a explicação sobre o produto.
let mensagemErro = document.querySelector("#mensagemErro");
//Mensagem de erro: avisa quando esquecemos de preencher alguma coisa.
let listaItens = document.querySelector("#listaItens");
//Lista de itens: é o lugar onde ficam guardados os produtos que adicionamos.


botaoVisualizar.addEventListener("click", visualizarItem);
//botaoVisualizar → é o botão Visualizar.
//addEventListener → significa “ficar esperando alguém fazer alguma coisa”.
//"click" → significa “quando alguém clicar”.
//visualizarItem → diz “quando clicar, faça a função visualizarItem”.
botaoAdicionar.addEventListener("click", adicionarItem);
//botaoAdicionar → é o botão Adicionar

function validarCampos() {
  //function → significa que estamos criando uma tarefa para o computador fazer.
  //() → mostra que, nesse caso, a função não precisa receber nenhuma informação.
  //{ → significa “aqui começa o que essa tarefa vai fazer”.
}
  if (""){
    //if significa “se”.
    campoNome.value == "" || //campoNome.value → olha o que foi escrito no campo Nome. == "" → pergunta: “está vazio?” || → significa “OU”.
    campoCategoria.value == "" || //Verifica se o campo Categoria está vazio.
    campoPreco.value == "" || //Verifica se o campo Preço está vazio.
    campoDescricao.value == "" || //Verifica se o campo Descrição está vazio.
   
    //) → fecha a pergunta que começou com if(.
    //{ → significa “agora começa a ação que será feita”.

    mensagemErro.innerText == "Preencha todos os campos."
    //mensagemErro → é o lugar onde aparece a mensagem de erro.
    //.innerText → significa “escreva um texto aqui”.
    //"Preencha todos os campos." → é a mensagem que queremos mostrar.
    return false;//return → significa “devolva uma resposta”. false → significa “não” ou “é falso”

  } else { //} → fecha o que estava sendo feito no if. else → significa “senão” ou “se não for isso”. { → abre o espaço para dizer o que deve acontecer no else.
    mensagemErro.innerText = ""; //mensagemErro → é o lugar onde aparece o aviso. .innerText → coloca ou tira um texto. "" → significa que não tem nenhum texto.
    return true; //return → devolve uma resposta. true → significa “sim, está certo”.
  }

function visualizarItem() {
  if (validarCampos() == false) {
    /*function → cria uma tarefa.
() → não precisa receber nenhuma informação para começar.
{ → começa a tarefa.*/

  }
  let nome = campoNome.value;
  let categoria = campoCategoria.value;
  let preco = campoPreco.value;
  let descricao = campoDescricao.value;

  visualNome.innerText = nome;
  visualCategoria, innerText = "categoria" + categoria;
  visualPreco.innerText = 'R$ ${preco}';
  visualDescricao.innerText = descricao;
}

function adicionarItem() {
  if (validarcampos == false) {
    return;
  }
  let nome = camponome.value; // .value = valor, neste caso guarda o valor do camponome no let nome
  let categoria = campocategoria.value; // .value = valor, neste caso guarda o valor do campocotegoria no let categoria
  let preco = campopreco.value; // .value = valor, neste caso guarda o valor do campopreco no let preco
  let descricao = campodescricao.value; // .value = valor, neste caso guarda o valor do campodescricao no let descricao

  let novocard = document.createElement("div"); // createElement cria um elemento html, neste caso uma div, armazenando no let novocard
  novocard.className = "card"; // className adiciona uma classe a um elemento html, neste caso a classe card ao novocard
  let titulocard = document.createElement("h3"); // createElement cria um elemento html, neste caso uma h3, armazenando no let titulocard
  titulocard.innerText = nome; // innerText altera o valor de um elemento de texto do html, neste caso o valor do titulocard é o nome
  let categoriacard = document.createElement("p"); // createElement cria um elemento html, neste caso uma p, armazenando no let categoriacard
  categoriacard.innerText = "categoria" + categoria; // innerText altera o valor de um elemento de texto do html, neste caso o valor do categoriacard é a categoria
  let precocard = document.createElement("p"); // createElement cria um elemento html, neste caso uma p, armazenando no let precocard
  precocard.innerText = "R$" + preco; // innerText altera o valor de um elemento de texto do html, neste caso o valor do precocard é o preco
  let descricaocard = document.createElement("p"); // createElement cria um elemento html, neste caso uma p, armazenando no let descricaocard
  descricaocard.innerText = descricao; // innerText altera o valor de um elemento de texto do html, neste caso o valor do descricaocard é o let descricao

  if (categoria) {
    novocard.appendChild(categoriacard);
  
  novocard.appendChild(precocard);
  novocard.appendChild(descricaocard);
  }

  listaItens.appendChild(novocard);
  camponome.value = ""; // value = valor, neste caso deixa o camponome vazio
  campocategoria.value = ""; // value = valor, neste caso deixa o campocategoria vazio
  campopreco.value = ""; // value = valor, neste caso deixa o campopreco vazio
  campodescricao.value = ""; // value = valor, neste caso deixa o campodescricao vazio

  visualnome.innerText = "Nome do produto"; // innerText altera o valor de um elemento de texto do html.
  visualcategoria.innerText = "Categoria"; // innerText altera o valor de um elemento de texto do html.
  visualpreco.innerText = "R$0,00"; // innerText altera o valor de um elemento de texto do html.
  visualdescricao.innerText = "Descrição do produto"; // innerText altera o valor de um elemento de texto do html.
  mensagemerro.innerText = ""; // innerText altera o valor de um elemento de texto do html.
}
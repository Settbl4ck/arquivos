
let usuario = prompt("Digite o nome do usuário:");
 let tipoUsuario = Number(prompt("Digite o tipo de usuário:\n1 - Administrador\n2 - Professor\n3 - Aluno"));
 let ativo = prompt("O usuário está ativo? (digite true ou false)").toLowerCase() === "true";
let tentativas = 1;
    let Tipos = "";
let situacao = "";


switch (tipoUsuario) {
  case 1:
    Tipos = "Administrador";
    break;
  case 2:
    Tipos = "Professor";
    break;
  case 3:
    Tipos = "Aluno";
    break;
  default:
    Tipos = "Tipo de usuário inválido";
    break;
}


if (ativo === false) {
  situacao = "Usuário bloqueado";
} else if (tentativas < 3) {
  situacao = "Acesso permitido";
} else {
  situacao = "Quantidade máxima de tentativas atingida";
}


alert(
  `Usuário: ${usuario}\n` 
  `Tipo: ${Tipos}\n` 
  `Ativo: ${ativo}\n` 
  `Tentativas: ${tentativas}\n` 
  `Situação: ${situacao}`
);
    
    

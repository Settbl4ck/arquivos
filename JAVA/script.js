let nome =prompt("Digite um texto: ");
let idade = prompt("Digite sua idade: ");
let confirmacao = confirm("Você deseja ver o texto digitado?");
/*
if (confirmacao) { 
    alert(`O texto digitado foi: ${nome} e a idade digitada foi: ${idade}`);
    if (idade >= 18) {
        alert("Você é maior de idade.");
    }
}
else {
    alert("Você não quis ver o texto digitado.");
}

switch (idade) {
   case "18":
        alert("Você tem 18 anos.");
        break;
    case "19":
        alert("Você tem 19 anos.");
        break;
        default:
        alert("Você não tem 18 e nem 19 anos.");
        break;
}
       
       while (idade < 18) {
    alert("Você é menor de idade.");
    idade++;
    //idade=idade+1
}
alert("Você é maior de idade.");
*/

//let i;
for(let i=0;i<10;i++)
    alert(`Contagem: ${i}`);
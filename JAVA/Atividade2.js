let nome = "Bernardo"
let nota1 = "10" 
let nota2 = "8" 
let nota3 = "5"
let nota4 = "7"
let nota5 = "9"
let ano = "Primeiro Ano"

console.log("Classificação de Notas dos Alunos:");
console.log(`Nome: ${nome}`);
console.log(`Ano: ${ano}`);
console.log(`1º Nota: ${nota1}`);
console.log(`2º Nota: ${nota2}`);
console.log(`3º Nota: ${nota3}`);
console.log(`4º Nota: ${nota4}`);
console.log(`5º Nota: ${nota5}`);

let notaTotal = nota1 + nota2 + nota3 + nota4 + nota5;
let notaMedia = notaTotal / 5;

console.log(`Média da Nota: ${notaMedia}`);
if (notaMedia >= 7) {
    console.log("Resultado: APROVADO");
}
else if (notaMedia >= 5 && notaMedia < 7) {
    console.log("Resultado: RECUPERAÇÃO");
}
else {
    console.log("Resultado: REPROVADO");
}

console.log("");

switch (ano) {
    case "Primeiro Ano":
        console.log("Você foi aprovado para o Segundo Ano!");
        break;
    case "Segundo Ano":
        console.log("Você foi aprovado para o Terceiro Ano");
        break;
    case "Terceiro Ano":
        console.log("Parabéns! Você se Formou!!!");
        break;
}   
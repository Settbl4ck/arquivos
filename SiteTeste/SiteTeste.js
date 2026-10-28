const btnTheme = document.getElementById('btnTheme');
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

let curtidas = 0;
const btnCurtir = document.getElementById('btnCurtir');
const cardText = document.getElementById('cardText');

btnCurtir.addEventListener('click', () => {
    curtidas++;
    btnCurtir.innerText = `Curtir (${curtidas})`;
    cardText.innerText = `Você interagiu com este card ${curtidas} vezes!`;
});


const minhasImagens = [
      "imagens/foto1.jpg",
      "imagens/foto2.jpg",
      "imagens/foto3.jpg",
      "imagens/foto4.jpg"
    ];

    let indiceAtual = 0;

    // Selecionando os elementos no HTML
    const fotoPrincipal = document.getElementById('fotoPrincipal');
    const btnAnterior = document.getElementById('btnAnterior');
    const btnProxima = document.getElementById('btnProxima');
    const contador = document.getElementById('contador');

    function atualizarGaleria() {
      
      fotoPrincipal.style.opacity = '0.3';

      setTimeout(() => {
        fotoPrincipal.src = minhasImagens[indiceAtual];
        fotoPrincipal.style.opacity = '1';
      }, 150);

      contador.innerText = `Imagem ${indiceAtual + 1} de ${minhasImagens.length}`;
    }

    btnProxima.addEventListener('click', () => {
      indiceAtual++;

      if (indiceAtual >= minhasImagens.length) {
        indiceAtual = 0;
      }
      atualizarGaleria();
    });

    btnAnterior.addEventListener('click', () => {
      indiceAtual--;

      if (indiceAtual < 0) {
        indiceAtual = minhasImagens.length - 1;
      }
      atualizarGaleria();
    });
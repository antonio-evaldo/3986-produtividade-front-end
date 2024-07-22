const formPesquisa = document.querySelector('.cabecalho__form-pesquisa');

formPesquisa.addEventListener('submit', (evento) => {
  evento.preventDefault();
});

const barraDePesquisa = document.querySelector(".cabecalho__input-pesquisa");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
  const videos = document.querySelectorAll(".video-principal");

  if (barraDePesquisa.value !== "") {
    for (const video of videos) {
      let titulo = video.querySelector(".video-principal__titulo-video").textContent.toLowerCase();
      let valorFiltro = barraDePesquisa.value.toLowerCase();

      video.classList.toggle("video-principal--escondido", !titulo.includes(valorFiltro));
    }
  } else {
    for (const video of videos) {
      video.classList.remove("video-principal--escondido");
    }
  }
}
const botoesCategorias = document.querySelectorAll(".secao-categorias__botao");

botoesCategorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    const categoriaSelecionada = botao.getAttribute("name");

    filtrarPorCategoria(categoriaSelecionada);
    atualizarEstadosDosBotoes(categoriaSelecionada);
  });
});

function filtrarPorCategoria(filtro) {
  const valorFiltro = filtro.toLowerCase();
  const videos = document.querySelectorAll(".video-principal");

  for (const video of videos) {
    const categoria = video.querySelector(".video-principal__categoria").textContent.toLowerCase();

    const mostrarVideo = valorFiltro === 'Tudo' || categoria.includes(valorFiltro);

    video.classList.toggle("video-principal--escondido", !mostrarVideo);
  }
}

function atualizarEstadosDosBotoes(categoriaSelecionada) {
  botoesCategorias.forEach((botao) => {
    const botaoFoiSelecionado = botao.getAttribute("name") === categoriaSelecionada;

    botao.classList.toggle("selecionado", botaoFoiSelecionado);
  })
}

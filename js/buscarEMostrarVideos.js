const containerVideos = document.querySelector(".videos-container");

async function buscarEMostrarVideos() {
  try {
    const busca = await fetch("http://localhost:3000/videos");
    const videos = await busca.json();

    videos.forEach((video) => {
      if (video.categoria === "") {
        throw new Error('Vídeo não tem categoria');
      }
      containerVideos.innerHTML += `
        <li class="video-principal">
            <iframe class="video-principal__iframe" src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="video-principal__info">
                <a class="video-principal__link-img-canal" href="#">
                    <img src="${video.imagem}" alt="Canal ${video.canal}">
                </a>
                <a href="#">
                    <h3 class="video-principal__titulo-video">${video.titulo}</h3>
                </a>
                <p class="video-principal__titulo-canal">${video.descricao}</p>
                <p class="video-principal__categoria" hidden>${video.categoria}</p>
            </div>
        </li>
      `;
    })
  } catch (error) {
    containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`
  }
}

buscarEMostrarVideos();

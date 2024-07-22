const canaisExtras = document.querySelectorAll(".menu-lateral__canal.colapsado");

const botaoExpandirCanais = document.querySelector(".menu-lateral__botao-alternar-canais");

let canaisEstaoExpandidos = false;

botaoExpandirCanais.addEventListener("click", () => {
  canaisExtras.forEach((canal) => {
    canal.classList.toggle("colapsado");
  });

  if (!canaisEstaoExpandidos) {
    canaisEstaoExpandidos = true;

    botaoExpandirCanais.innerHTML = `
      <i class="menu-lateral__icone-alternar-canais menu-lateral__icone-alternar-canais--rotacionado"></i>
      <span class="menu-lateral__texto-alternar-canais">Mostrar menos</span>
    `;
  } else {
    canaisEstaoExpandidos = false;

    botaoExpandirCanais.innerHTML = `
      <i class="menu-lateral__icone-alternar-canais"></i>
      <span class="menu-lateral__texto-alternar-canais">Mostrar mais 2</span>
    `;
  }
});

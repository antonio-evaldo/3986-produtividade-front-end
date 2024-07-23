// Seleciona o checkbox
const switchInput = document.querySelector('.cabecalho__switch-input');
const logo = document.getElementById('logo-vidflow');

// Verifica se o modo escuro está ativado nas preferências do usuário
if (localStorage.getItem('modo-escuro') === 'enabled') {
  document.body.classList.add('modo-escuro');
  switchInput.checked = true;
  logo.src = './img/modo_escuro/vidflow-logo-dark-mode.png';
}

// Função para alternar o modo escuro
function toggleModoEscuro() {
  if (document.body.classList.contains('modo-escuro')) {
    document.body.classList.remove('modo-escuro');
    localStorage.setItem('modo-escuro', 'disabled');

    logo.src = './img/modo_claro/vidflow-logo-light-mode.png';
  } else {
    document.body.classList.add('modo-escuro');
    localStorage.setItem('modo-escuro', 'enabled');

    logo.src = './img/modo_escuro/vidflow-logo-dark-mode.png';
  }
}

// Adiciona o listener de evento para o checkbox
switchInput.addEventListener('change', toggleModoEscuro);

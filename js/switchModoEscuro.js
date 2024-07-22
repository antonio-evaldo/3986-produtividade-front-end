// Seleciona o checkbox
const switchInput = document.querySelector('.cabecalho__switch-input');

// Verifica se o modo escuro está ativado nas preferências do usuário
if (localStorage.getItem('modo-escuro') === 'enabled') {
  document.body.classList.add('modo-escuro');
  switchInput.checked = true;
}

// Função para alternar o modo escuro
function toggleModoEscuro() {
  if (document.body.classList.contains('modo-escuro')) {
    document.body.classList.remove('modo-escuro');
    localStorage.setItem('modo-escuro', 'disabled');
  } else {
    document.body.classList.add('modo-escuro');
    localStorage.setItem('modo-escuro', 'enabled');
  }
}

// Adiciona o listener de evento para o checkbox
switchInput.addEventListener('change', toggleModoEscuro);

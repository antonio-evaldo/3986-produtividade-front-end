// Seleciona o checkbox
const switchInput = document.querySelector('.cabecalho__switch-input');

// Verifica se o modo escuro está ativado nas preferências do usuário
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
  switchInput.checked = true;
}

// Função para alternar o modo escuro
function toggleDarkMode() {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'disabled');
  } else {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
  }
}

// Adiciona o listener de evento para o checkbox
switchInput.addEventListener('change', toggleDarkMode);

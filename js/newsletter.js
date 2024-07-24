const form = document.querySelector('.newsletter');
const dialog = document.querySelector('.dialog-confirmacao');
const botaoFechar = document.querySelector('.dialog-confirmacao__fechar-modal');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailInput = document.querySelector('.newsletter__input');
  if (emailInput.checkValidity()) {
    dialog.showModal();
  }
});

function closeModal() {
  dialog.close();
}

botaoFechar.addEventListener('click', closeModal);

dialog.addEventListener('click', function (event) {
  if (event.target.tagName === 'DIALOG') {
    dialog.close();
  }
});

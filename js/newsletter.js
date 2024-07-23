const form = document.querySelector('.newsletter');
const dialog = document.querySelector('.dialog-confirmacao');

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

dialog.addEventListener('click', function (event) {
  if (event.target.tagName === 'DIALOG') {
    dialog.close();
  }
});

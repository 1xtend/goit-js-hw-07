const validationInput = document.querySelector('#validation-input');
const wordLength = validationInput.dataset.length;

validationInput.addEventListener('change', (e) => {
  if (validationInput.value.length <= wordLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  }

  if (validationInput.value.length > wordLength) {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }

  if (validationInput.value === '') {
    validationInput.classList.remove('valid');
    validationInput.classList.remove('invalid');
  }
});

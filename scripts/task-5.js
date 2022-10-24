const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (e) => {
  e.preventDefault();

  if (nameInput.value === '') {
    nameOutput.textContent = 'незнайомець';
  } else {
    nameOutput.textContent = nameInput.value;
  }
});

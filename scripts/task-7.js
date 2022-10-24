const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', (e) => {
  e.preventDefault();

  text.style.fontSize = `${fontSizeControl.value}px`;
});

const counter = document.querySelector('#counter');

const counterValue = counter.querySelector('#value');

const incrementBtn = counter.lastElementChild;
const decrementBtn = counter.firstElementChild;

// ------------

function increment() {
  return counterValue.textContent++;
}

function decrement() {
  return counterValue.textContent--;
}

// ------------

incrementBtn.addEventListener('click', (e) => {
  e.preventDefault;
  increment();
});

decrementBtn.addEventListener('click', (e) => {
  e.preventDefault;
  decrement();
});

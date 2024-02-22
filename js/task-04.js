const counterValue = document.getElementById('value');
let value = 0;

document.getElementById('counter').addEventListener('click', event => {
  if (event.target.dataset.action === 'increment') {
    value++;
  } else if (event.target.dataset.action === 'decrement') {
    value--;
  }

  counterValue.textContent = value;
});

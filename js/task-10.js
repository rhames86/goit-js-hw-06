document.addEventListener('DOMContentLoaded', () => {
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesDiv = document.getElementById('boxes');

  createButton.addEventListener('click', createBoxes);
  destroyButton.addEventListener('click', destroyBoxes);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function createBoxes() {
    const amount = parseInt(document.querySelector('input').value);
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10;
      const color = getRandomHexColor();
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = color;
      fragment.appendChild(box);
    }

    boxesDiv.innerHTML = '';
    boxesDiv.appendChild(fragment);
  }

  function destroyBoxes() {
    boxesDiv.innerHTML = '';
  }
});

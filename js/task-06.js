const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const inputValue = input.value.trim();
  const dataLength = Number(input.getAttribute('data-length'));

  if (inputValue.length === dataLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});

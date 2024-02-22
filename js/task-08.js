const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

  const email = this.elements.email.value.trim();
  const password = this.elements.password.value.trim();

  if (!email || !password) {
    alert('Por favor, rellena todos los campos.');
    return;
  }

  const userData = { email, password };
  console.log(userData);

  this.reset(); // Borra los valores de los campos del formulario
});

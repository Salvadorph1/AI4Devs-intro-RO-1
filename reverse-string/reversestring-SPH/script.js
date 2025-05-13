// Capturamos el botón y el campo de texto
const btn = document.getElementById('reverseButton');
const input = document.getElementById('inputString');
const output = document.getElementById('result');

/* LOGICA del primer prompt para el primer ejercicio
// Al hacer clic, invertimos la cadena
btn.addEventListener('click', () => {
  const original = input.value;
  const reversed = original
    .split('')       // convertimos en array de caracteres
    .reverse()       // invertimos el array
    .join('');       // volvemos a unir en cadena
  output.textContent = reversed;
});*/

input.addEventListener('input', () => {
  const value = input.value;

  // 1) Mostrar/ocultar botón solo si hay 3 o más caracteres
  //////¿PARA QUE TENER EL BOTÓN?... si ya muestra el resultado en tiempo real inverso///////
  if (value.length >= 3) {
    btn.style.display = 'inline';
  } else {
    btn.style.display = 'none';
  }

  // 2) Inversión en tiempo real sin necesidad de clic
  output.textContent = value.split('').reverse().join('');
});


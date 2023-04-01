// Obtener todos los elementos de clase "card-text"
const cardTexts = document.querySelectorAll('.card-text');

// Establecer la altura inicial en cero
let maxHeight = 0;

// Recorrer cada elemento "card-text" para obtener la altura máxima
cardTexts.forEach(cardText => {
  if (cardText.offsetHeight > maxHeight) {
    maxHeight = cardText.offsetHeight;
  }
});

// Establecer la altura máxima para todos los elementos "card-body"
const cardBodies = document.querySelectorAll('#Carrusel .card-body');
cardBodies.forEach(cardBody => {
  cardBody.style.height = `${maxHeight}px`;
});
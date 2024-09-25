// Obtener el campo de entrada y los resultados
const searchInput = document.getElementById('searchInput');
const results = document.querySelectorAll('.result');

// Forzar a que solo se puedan escribir mayúsculas y filtrar resultados
searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toUpperCase(); // Convertir búsqueda a mayúsculas

  results.forEach(result => {
    const tags = result.getAttribute('data-tags').toUpperCase(); // Convertir etiquetas a mayúsculas
    if (tags.includes(searchValue)) {
      result.style.display = 'block'; // Mostrar si coincide
    } else {
      result.style.display = 'none';  // Ocultar si no coincide
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const itemsPerPage = 6; // Número de items por página
    let currentPage = 1;
    const results = document.querySelectorAll('.result');
    const nextBtn = document.getElementById('nextBtn');
  
    // Función para mostrar los elementos de la página actual
    function showPage(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
  
      results.forEach((result, index) => {
        if (index >= startIndex && index < endIndex) {
          result.style.display = 'block';
        } else {
          result.style.display = 'none';
        }
      });
    }
  
    // Mostrar la primera página
    showPage(currentPage);
  
    // Al hacer clic en el botón "Siguiente"
    nextBtn.addEventListener('click', () => {
      currentPage++;
      const totalPages = Math.ceil(results.length / itemsPerPage);
  
      if (currentPage > totalPages) {
        currentPage = 1; // Vuelve a la primera página
      }
  
      showPage(currentPage);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const itemsPerPage = 6; // Número de items por página
    let currentPage = 1;
    const results = document.querySelectorAll('.result');
    const nextBtn = document.getElementById('nextBtn');
  
    // Frases del día
    const frases = [
      "El código limpio siempre supera la complejidad.",
      "Un buen programador es aquel que piensa más y escribe menos.",
      "La tecnología es el arte de resolver problemas.",
      "Si puedes imaginarlo, puedes programarlo.",
      "Cada error es una oportunidad de aprendizaje en el código.",
      "El hardware es fácil de entender, el software es difícil de explicar."
    ];
  
    const fraseDiaElement = document.getElementById('fraseDia');
  
    // Función para mostrar los elementos de la página actual
    function showPage(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
  
      results.forEach((result, index) => {
        if (index >= startIndex && index < endIndex) {
          result.style.display = 'block';
        } else {
          result.style.display = 'none';
        }
      });
    }
  
    // Mostrar la primera página
    showPage(currentPage);
  
    // Mostrar una frase aleatoria
    function mostrarFraseAleatoria() {
      const randomIndex = Math.floor(Math.random() * frases.length);
      fraseDiaElement.textContent = `Frase del día: "${frases[randomIndex]}"`;
    }
  
    // Al hacer clic en el botón "Siguiente"
    nextBtn.addEventListener('click', () => {
      currentPage++;
      const totalPages = Math.ceil(results.length / itemsPerPage);
  
      if (currentPage > totalPages) {
        currentPage = 1; // Vuelve a la primera página
      }
  
      showPage(currentPage);
      mostrarFraseAleatoria(); // Cambia la frase del día cada vez que haces clic en "Siguiente"
    });
  
    // Mostrar una frase al cargar la página
    mostrarFraseAleatoria();
  });
  
  
  
// Obtener elementos
const infoIcon = document.getElementById('info-icon');
const modal = document.getElementById('floating-info');
const closeModal = document.querySelector('.close');

// Mostrar la ventana modal al hacer clic en el icono
infoIcon.addEventListener('click', function(e) {
  e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  modal.style.display = 'block';
});

// Cerrar la ventana modal al hacer clic en la "X"
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Cerrar la ventana modal al hacer clic fuera del contenido modal
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

      // Agrega un evento de clic al botón
document.getElementById('boton').addEventListener('click', function() {
  // Abre el enlace en una nueva pestaña
  window.open("https://api.whatsapp.com/send?phone=+51933746240&text=Quiero%20una%20p%C3%A1gina%20personalizada%20a%20mi%20gusto,%20por%20favor.", '_blank');
});

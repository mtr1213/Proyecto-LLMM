document.addEventListener("DOMContentLoaded", function() {
  var currentSlide = 0; // inicializamos con la imagen actual
    var slides = document.querySelectorAll('.slide img'); // Introducimos todas las imágenes dentro del contenedor del carrusel
    
    // Función para mostrar la siguiente diapositiva (carrusel de imagenes)
    function nextSlide() {
      slides[currentSlide].style.display = 'none'; // Ocultar la diapositiva actual para poder mostrar las siguientes
      currentSlide = (currentSlide + 1) % slides.length; 
      slides[currentSlide].style.display = 'block'; // Mostramos la siguiente diapositiva
    }
    
    // Funcion para hacer que el carrusel sea automatico
    function startSlider() {
      setInterval(nextSlide, 5000); // aqui damos la orden de que cambie de diapositiva cada 5 segundos
    }
    
    // Función para verificar la edad mediante un prompt y continuar en caso de tener +18 años o redirigir a una página que no tiene retorno (sin navegador por este motivo) en caso de ser menor de edad 
    function verificarEdad() {
      var edad = prompt("Por favor, introduzca su edad:");
      if (edad !== null && !isNaN(edad)) { // Verificamos que se haya ingresado una edad valida, si no es valida se volvera a solicitar
        if (parseInt(edad) >= 18) { 
          startSlider(); // Si la edad es +18 iniciamos la funcion de la pagina principal que es el carrusel
        } else {
          window.location.href = "errorEdad.html"; // En caso de que no lo sea redirigimos a la pagina de error
        }
      } else {
        verificarEdad();
      }
    }  
    verificarEdad();
  });
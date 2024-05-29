    document.addEventListener("DOMContentLoaded", function() {
        var currentSlide = 0; // Iniciamos el carrusel con la imagen actual
        var slides = document.querySelectorAll('.slide2 img'); // Introducimos todas las imágenes dentro del contenedor del carrusel
        
        // Funcion para el carrusel de imagenes (mismo que en scripts.js)
        function nextSlide() {
          slides[currentSlide].style.display = 'none'; 
          currentSlide = (currentSlide + 1) % slides.length; 
          slides[currentSlide].style.display = 'block'; 
        }
        
        // Funcion para iniciar el carrusel automatico (en este caso usamos menos segundos de exposicion al tratarse de una mini muestra para las reservas)
        function startSlider() {
          setInterval(nextSlide, 3000);
        }
        
        startSlider();
      });
/*OJO, este script me da error, no estoy segura si es el script en sí o algun otro fallo de la pagina reservas.html, al cargarla los primeros instantes se muestra el carrusel de imagenes de manera vertical y desplegado, pero pasados varios segundos se arregla solo.*/
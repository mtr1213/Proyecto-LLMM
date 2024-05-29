# Proyecto-LLMM
Este proyecto consiste en el diseño y desarrollo de un sitio web para una bodega ficticia llamada "Bodegas Tolls", ubicada en la región de La Rioja, España. El sitio web tiene como objetivo principal mostrar información sobre la bodega, sus productos (vinos presentados mediante Flip-cards realizadas con CSS), y ofrecer la posibilidad de realizar reservas para visitas y degustaciones con un formulario.

Estructura del Proyecto:
El proyecto consta de 5 archivos HTML, 2 archivos CSS y 2 archivos JAVASCRIPT.
Cada archivo se encarga de presentar diferente información/función:

 Archivos .html : 
principal.html →  Es la página principal del sitio web que nos da la bienvenida y nos solicita la edad para validar si podemos acceder o no.
sobrenosotros.html →  Página que muestra la historia de la bodega.
vinos.html → Página que presenta los diferentes tipos de vinos producidos por la bodega.
reservas.html →  Página para realizar reservas de visitas y degustaciones en la bodega. (**en esta página da error a la hora de cargar la web los primeros instantes, se muestra el carrusel de fotos desplegado verticalmente y tarda unos segundos en aparecer como un carrusel automático con las imagenes juntas, he mirado la función de javascript, modificando los segundos de carga por si fuese este el motivo pero sin éxito**)
errorEdad.html → Es la página a la que nos llevará en caso de ser menores de edad (al ser el principal producto alcohol se entiende que no pueden acceder, además de que en esta página no nos sale el menú de navegación para no poder acceder de otras formas).


Archivos .css:

estilo.css → Este archivo es el encargado de los estilos generales para la estructura básica del sitio web, incluyendo el diseño del encabezado, el contenido principal, la navegación, el pie de página, y los estilos de fondo.
estiloflip.css: Este archivo contiene los estilos generales, pero además es el encargado del diseño de las Flip-cards de la página vinos.html.

Archivos .js:
scripts.js → Este archivo es el encargado de las funciones de la pagina principal, es el que nos lleva el carrusel y la validación de edad.
scripts2.js → Este archivo es el encargado del carrusel de la página de reservas.



REQUISITOS TAREA:

Diseño responsive → Página diseñada para adaptarse a varios tamaños de pantalla, desde moviles hasta tablets de un máximo de 768px con media queries.

Páginas mínimas: El sitio web debe tener al menos tres páginas diferentes (página de inicio y dos páginas de contenido) → Página que contiene 5 páginas en total (página principal, página con información, página con carta de vinos en base a tarjetas que se invierten al pasar el cursor por encima, pagina para hacer reservas y una página no visible de error al introducir Edad incorrecta).

 Navegación: El sitio web debe incluir una barra de navegación que permita a los usuarios moverse entre las distintas páginas del sitio.

Comentarios en el Código: Se deben incluir comentarios en el código para explicar su proceso y facilitar la revisión. -->ok

Formulario de Contacto Interactivo → Formulario para reservar una visita.

Scripts. Carga dinámica de contenido (Mostrar/ocultar información que inicialmente estaba oculta/visible) → FLIP CARDS que nos enseñan texto (en este caso descripción del vino) al pasar el cursor por encima que inicialmente no se muestran (en este caso no he usado Javascript sino CSS) 	
	
Notificaciones emergentes (Crea notificaciones emergentes para proporcionarle retroalimentación al usuario). → Solicitar mediante un prompt la edad del usuario en la primera página.

TECNOLOGÍAS USADAS: CSS, HTML Y JAVASCRIPT

FUENTES USADAS:
Apuntes MOODLE, W3SCHOOLS (campo de las Flip Cards), FREECODECAMP E IA (ChatGPT).

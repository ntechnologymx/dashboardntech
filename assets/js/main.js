
// Obtener los iframes
var iframes = document.getElementsByTagName('iframe');
var currentIframe = 0;

// Función para cambiar entre iframes cada minuto 60000
setInterval(function() {
  // Ocultar el iframe actual
  iframes[currentIframe].style.display = 'none';
  
  // Cambiar al siguiente iframe
  currentIframe++;
  if (currentIframe >= iframes.length) {
    currentIframe = 0;
  }
  
  // Mostrar el nuevo iframe
  iframes[currentIframe].style.display = 'block';
}, 45000);//Cada minuto

// // Función para actualizar el contenido de los iframes con AJAX cada 5 minutos
// setInterval(function() {
//   // Obtener el contenido de cada iframe con AJAX
//   for (let i = 0; i < iframes.length; i++) {
//     $.ajax({
//       url: iframes[i].src,
//       success: function(data) {
//         // Actualizar el contenido del iframe
//         iframes[i].contentWindow.document.open();
//         iframes[i].contentWindow.document.write(data);
//         iframes[i].contentWindow.document.close();
//         console.log('Se obtuvo el contenido de manera correcta');
//       },
//       error: function(_, _, errorThrown) {
//         console.error("Error en la solicitud AJAX:", errorThrown);
//       }
//     });
//   }
// }, 5000);











// setInterval(function() {
//   // Obtener el contenido de cada iframe con AJAX
//   for (var i = 0; i < iframes.length; i++) {
//     $.ajax({
//       url: iframes[i].src,
//       success: function(data) {
//         // Actualizar el contenido del iframe
//         iframes[i].contentWindow.document.open();
//         iframes[i].contentWindow.document.write(data);
//         iframes[i].contentWindow.document.close();
//       }
//     });
//   }
// }, 300000);
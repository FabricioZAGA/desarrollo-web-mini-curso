// Declaramos las variables de los atributos HTML que tengamos
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var textoConcatenado = document.getElementById('textoConcatenado');

function concatenar() {
  // Creamos un objeto para el body que vayamos a enviar
  const nombreYApellido = {
    nombre: nombre.value,
    apellido: apellido.value,
  };

  // Como hacer un fetch para consultar una API
  fetch('http://localhost:3000/api/post', {
    // El método del fetch ya sea GET, POST, PUT, DELETE, etc...
    method: 'POST',
    // Aquí colocamos application/json a causa del body que enviamos es en JSON
    headers: { 'Content-Type': 'application/json' },
    // El body enviado va formateado de objeto de javascript en JSON
    body: JSON.stringify(nombreYApellido),
  })
    .then((res) => {
      // Retornamos el valor de nuestra respuesta de la api
      return res.text();
    })
    .then((data) => {
      // Tomamos el valor retornado por la consulta de la api en nuestro span de HTML
      textoConcatenado.innerHTML = data;
    });
}

let seccionActual = '';
let grupoActual = '';

function entrar() {
  document.getElementById('bienvenida').style.display = 'none';
  document.getElementById('contenidoPrincipal').style.display = 'block';
  document.getElementById('opcionesEdades').style.display = 'none';
  document.getElementById('contenidoSeccion').style.display = 'none';
  document.getElementById('btnAtras').style.display = 'none';

  localStorage.setItem('paginaActual', 'contenidoPrincipal');
}

function mostrarOpciones(seccion) {
  seccionActual = seccion;
  grupoActual = '';
  document.getElementById('opcionesEdades').style.display = 'block';
  document.getElementById('contenidoSeccion').style.display = 'none';
  document.getElementById('btnAtras').style.display = 'block'; // Mostrar botón atrás
  document.getElementById('opcionesEdades').scrollIntoView({ behavior: 'smooth' });

  localStorage.setItem('paginaActual', 'opcionesEdades');
  localStorage.setItem('seccionActual', seccion);
}

function mostrarContenido(grupo) {
  grupoActual = grupo;
  const contenedor = document.getElementById('contenidoSeccion');
  contenedor.innerHTML = `
    <h3>${seccionActual.toUpperCase()} - ${grupo.toUpperCase()}</h3>
    <p>Contenido de ejemplo para ${grupo} en el área de ${seccionActual}.</p>
  `;
  contenedor.style.display = 'block';
  document.getElementById('opcionesEdades').style.display = 'none';
  document.getElementById('btnAtras').style.display = 'block'; // Mostrar botón atrás
  contenedor.scrollIntoView({ behavior: 'smooth' });

  localStorage.setItem('paginaActual', 'contenidoSeccion');
  localStorage.setItem('grupoActual', grupo);
}

function atras() {
  const btnAtras = document.getElementById('btnAtras');

  if (document.getElementById('contenidoSeccion').style.display === 'block') {
    // Si estamos viendo el contenido, al dar atrás mostramos opciones de edad
    document.getElementById('contenidoSeccion').style.display = 'none';
    document.getElementById('opcionesEdades').style.display = 'block';
    btnAtras.style.display = 'block';

    localStorage.setItem('paginaActual', 'opcionesEdades');
  }
  else if (document.getElementById('opcionesEdades').style.display === 'block') {
    // Si estamos en opciones de edad, al dar atrás volvemos a pantalla principal
    document.getElementById('opcionesEdades').style.display = 'none';
    document.getElementById('contenidoPrincipal').style.display = 'block';
    btnAtras.style.display = 'none';

    localStorage.setItem('paginaActual', 'contenidoPrincipal');
  }
}

function volverInicio() {
  document.getElementById('contenidoPrincipal').style.display = 'none';
  document.getElementById('bienvenida').style.display = 'flex';
  document.getElementById('opcionesEdades').style.display = 'none';
  document.getElementById('contenidoSeccion').style.display = 'none';
  document.getElementById('btnAtras').style.display = 'none';

  seccionActual = '';
  grupoActual = '';
  document.getElementById('contenidoSeccion').innerHTML = '';

  localStorage.clear();
}

window.onload = function() {
  const pagina = localStorage.getItem('paginaActual');
  seccionActual = localStorage.getItem('seccionActual') || '';
  grupoActual = localStorage.getItem('grupoActual') || '';

  if (!pagina || pagina === 'bienvenida') {
    document.getElementById('bienvenida').style.display = 'flex';
    document.getElementById('contenidoPrincipal').style.display = 'none';
    document.getElementById('opcionesEdades').style.display = 'none';
    document.getElementById('contenidoSeccion').style.display = 'none';
    document.getElementById('btnAtras').style.display = 'none';
  }
  else if (pagina === 'contenidoPrincipal') {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('contenidoPrincipal').style.display = 'block';
    document.getElementById('opcionesEdades').style.display = 'none';
    document.getElementById('contenidoSeccion').style.display = 'none';
    document.getElementById('btnAtras').style.display = 'none';
  }
  else if (pagina === 'opcionesEdades') {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('contenidoPrincipal').style.display = 'block';
    document.getElementById('opcionesEdades').style.display = 'block';
    document.getElementById('contenidoSeccion').style.display = 'none';
    document.getElementById('btnAtras').style.display = 'block';
  }
  else if (pagina === 'contenidoSeccion') {
    mostrarContenido(grupoActual);
  }
};

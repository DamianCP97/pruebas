function calcularPrecio() {
     let precio = parseFloat(document.getElementById("precio").value);
     let propina = parseFloat(document.getElementById("propina").value);
     let porcentaje = propina / 100;
     let precioFinal = precio + (precio * porcentaje);
     alert('El precio total sería de: ' + precioFinal);
}
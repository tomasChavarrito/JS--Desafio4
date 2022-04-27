const phone = [];

const impuestos = 0.26;

const descuentos = [
  {
    nombre: "Descuento efectivo 10%",
    monto: 0.1,
  },
  {
    nombre: "Cupon Descuento 20%",
    monto: 0.2,
  },
];

const calcularTotalDescuentos = (precioTotal) => {
  let totalDescuentos = 0;
  descuentos.forEach((descuento) => {
    totalDescuentos += precioTotal * descuento.monto;
  });
  return totalDescuentos;
};

const calcularTotalImpuestos = (precioTotal) => {
  return precioTotal * impuestos;
};

function calculaPrecioFinal(precio, cantidad) {
  let precioTotal = precio * cantidad;
  let totalDescuentos = calcularTotalDescuentos(precioTotal);
  let totalImpuestos = calcularTotalImpuestos(precioTotal);
  let precioFinal = precioTotal - totalDescuentos + totalImpuestos;
  console.log(
    `El precio final del celular es ${precioFinal} con un total de ${totalDescuentos} de descuentos y ${totalImpuestos} de impuestos`
  );
}

function simulador() {
  let nombre = prompt("Ingrese el nombre del celular");
  let cantidad = parseInt(prompt("Ingrese la cantidad de celulares"));
  let precio = parseInt(prompt("Ingrese el precio del celular"));
  let nuevoPhone = {
    nombre: nombre,
    cantidad: cantidad,
    precio: precio,
  };
  phone.push(nuevoPhone);
  calculaPrecioFinal(precio, cantidad);
  console.dir(phone);
}

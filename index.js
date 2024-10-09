import { Producto, Carrito } from "/script.js";

const carritoDeCompra = new Carrito();
const leche = new Producto("Leche", 1000, 1);
const pan = new Producto("Pan de molde", 2000, 1);
const queso = new Producto("Queso", 1200, 1);
const mermelada = new Producto("Mermelada", 890, 1);
const azucar = new Producto("Azúcar", 1300, 1);

let seguir = true;
while (seguir) {
  alert(`Productos disponibles: 
    1-. ${leche.nombre} $${leche.precio}
    2-. ${pan.nombre} $${pan.precio}
    3-. ${queso.nombre} $${queso.precio}
    4-. ${mermelada.nombre} $${mermelada.precio}
    5-. ${azucar.nombre} $${azucar.precio}
    9-. Vaciar carrito
    0-. Ver carrito de compra
    `);

  let eleccion = prompt(
    "Ingresa el numero del producto que deseas agregar al carrito"
  );
  let cantidad = "";

  switch (eleccion) {
    case "1":
      cantidad = parseInt(prompt("Ingresa la cantidad de unidades: "));
      carritoDeCompra.agregarProductos(leche, cantidad);
      alert(`${cantidad} ${leche.nombre}(s) agregado(s) al carrito.`);
      break;
    case "2":
      cantidad = parseInt(prompt("Ingresa la cantidad de unidades: "));
      carritoDeCompra.agregarProductos(pan, cantidad);
      alert(`${cantidad} ${pan.nombre}(s) agregado(s) al carrito.`);
      break;
    case "3":
      cantidad = parseInt(prompt("Ingresa la cantidad de unidades: "));
      carritoDeCompra.agregarProductos(queso, cantidad);
      alert(`${cantidad} ${queso.nombre}(s) agregado(s) al carrito.`);
      break;
    case "4":
      cantidad = parseInt(prompt("Ingresa la cantidad de unidades: "));
      carritoDeCompra.agregarProductos(mermelada, cantidad);
      alert(`${cantidad} ${mermelada.nombre}(s) agregado(s) al carrito.`);
      break;
    case "5":
      cantidad = parseInt(prompt("Ingresa la cantidad de unidades: "));
      carritoDeCompra.agregarProductos(azucar, cantidad);
      alert(`${cantidad} ${azucar.nombre}(s) agregado(s) al carrito.`);
      break;
    case "0":
      carritoDeCompra.mostrarDetalle();
      break;
    default:
      alert("Opcion ingresada no valida");
  }

  if (prompt("Deseas seguir agregando productos? (s/n)") == "s") {
  } else {
    carritoDeCompra.mostrarDetalle();
    let finalizar = prompt("Deseas finalizar la compra? (s/n)");
    if (finalizar === "s") {
      break;
    }
  }
}

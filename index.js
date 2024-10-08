import { Producto, Carrito } from '/script.js';


const carritoDeCompra = new Carrito();
const leche = new Producto("Leche", 10000, 1);
const pan = new Producto("Pan de molde", 2000, 1);
const queso = new Producto("Queso", 1200, 1);
const mermelada = new Producto("Mermelada", 890, 1);
const azucar = new Producto("Azúcar", 1300, 1);

carritoDeCompra.agregarProductos(leche);
carritoDeCompra.agregarProductos(leche);
carritoDeCompra.agregarProductos(pan)
carritoDeCompra.agregarProductos(queso)
carritoDeCompra.agregarProductos(mermelada)
carritoDeCompra.agregarProductos(azucar)

carritoDeCompra.mostrarDetalle();

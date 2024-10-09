class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

class Carrito {
  constructor() {
    this.productos = [];
  }


  agregarProductos(productoNuevo, cantidadNueva) {

    const productoExistente = this.productos.find(
      (p) => p.nombre === productoNuevo.nombre
    );

    if (productoExistente) {
      productoExistente.cantidad += cantidadNueva;
    } else {

      this.productos.push({
        nombre: productoNuevo.nombre,
        cantidad: cantidadNueva,
        precio: productoNuevo.precio, 
      });
    }
  }

  calcularTotal() {
    return this.productos.reduce((total, producto) => {
      return total + producto.precio * producto.cantidad;
    }, 0);
  }

  finalizarCompra() {
    if (this.productos.length === 0) {
      alert("El carrito esta vacio");
    } else {
      this.productos = [];
    }
  }

  mostrarDetalle() {
    let detalle = "Detalles de la compra\n";

    if(this.productos.length == 0){
      alert('Carrito de compras vacio')
    }else{
      this.productos.forEach((e) => {
        detalle += `Producto: ${e.nombre}, Cantidad: ${e.cantidad}, Precio por unidad: $${e.precio}\n`;
      });
  
      detalle += `\nTotal de la compra: $${this.calcularTotal()}`;
  
      alert(detalle);
    }

  }
}

export { Producto, Carrito };

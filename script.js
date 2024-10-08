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

  agregarProductos(producto) {
    const productoExistente = this.productos.find(p => p.nombre === producto.nombre);
      
    if (productoExistente) {
      productoExistente.cantidad += producto.cantidad;
    } else {
      this.productos.push(producto);
    }
  }

  calcularTotal() {
    return this.productos.reduce((total, producto) => {
      return total + (producto.precio * producto.cantidad);
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
    this.productos.forEach(e => {
      console.log(`Producto: ${e.nombre}, Cantidad: ${e.cantidad}, Precio por unidad: $${e.precio}`);
    });
    console.log(`Total de la compra: $${this.calcularTotal()}`)
  }
}

export {Producto, Carrito};



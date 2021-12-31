
//Cargo los Productos
function cargarCantidadProductos() {
    let productos = 0;

    while (productos <= 0) {
        productos = parseInt(prompt("Ingrese la Cantidad de Productos a Cargar:"));
    }

    return productos;
}

//Validar la Cantidad de Cuotas
function formaPago(valor) {
    var cant_cuotas = 0;

    if (valor == "CUOTAS") {
        cant_cuotas = parseInt(prompt("Ingrese la Cantidad de Cuotas a Pagar: (3, 6 o 12)"));
    }

    return cant_cuotas;
}

// Calcular el total a Pagar
function calcularTotalPagar(precio, cantidad) {
    return precio * cantidad;
}

// Calculo el IVA
function calcularIva(total_pagar) {
    var total_pagar_iva = (total_pagar * iva) / 100;

    return total_pagar_iva;
}

// Verifico si supera el monto máximo o la cantidad total de productos
function aplicarDescuento(total_pagar, cantidad) {
    var total_pagar_descuento = 0;

    if ((total_pagar >= monto_maximo) || (cantidad >= cant_productos_max)) {
        total_pagar_descuento = (total_pagar * descuento) / 100;
        informarDescuento(true);
    } else {
        informarDescuento(false);  
    }

    return total_pagar_descuento;
}

//Informar Descuento
function informarDescuento(valor) {
    if (valor == true) {
        descuento_si = true;
    } else {
        descuento_si = false;
    }

    return descuento_si;
}

// Verifico la cantidad de cuotas ingresada
function calcularCuotas(cant_cuotas, total_pagar) {
    if ((cant_cuotas >= 3) && (cant_cuotas < 6)) {
        total_pagar = total_pagar + ((total_pagar * interes1) / 100);
        var valor_cuotas = total_pagar / 3;
        interes = interes1;
        interes_si = true;
    } else if ((cant_cuotas >= 6) && (cant_cuotas < 12)) {
        total_pagar = total_pagar + ((total_pagar * interes2) / 100);
        var valor_cuotas = total_pagar / 6;
        interes = interes2;
        interes_si = true;
    } else if (cant_cuotas == 12) {
        total_pagar = total_pagar + ((total_pagar * interes3) / 100);
        var valor_cuotas = total_pagar / 12;
        interes = interes3;
        interes_si = true;
    } else {
        var valor_cuotas = 0;
    }

    return valor_cuotas;
}

// Salida
function mostrarProducto(nombre, precio, cantidad, forma_pago, total_pagar_bruto) {
    let mensaje = "Producto: " + nombre + "\n";
    mensaje += "Precio por Unidad: $" + precio + "\n";
    mensaje += "Cantidad de Productos: " + cantidad + "\n";
    mensaje += "Precio en Bruto: $" + total_pagar_bruto + "\n";
    mensaje += "Forma de Pago: " + forma_pago + "\n";
    
    alert(mensaje);
}

function mostrarIva(total_pagar_iva) {
    let mensaje = "IVA: (" + iva + "%) +$" + total_pagar_iva + "\n";
    
    alert(mensaje);
}

function mostrarDescuento(descuento_si, total_pagar_descuento) {
    if (descuento_si) {
        let mensaje = "Descuento: (" + descuento + "%) -$" + total_pagar_descuento + "\n";

        alert(mensaje);
    }
}

function mostrarInteres(interes_si, cant_cuotas, valor_cuotas) {
    if (interes_si) {
        let mensaje = "Interés: (" + interes + "%) \n";
        mensaje += "Cuotas: " + cant_cuotas + " de $" + Math.round(valor_cuotas) + "\n";

        alert(mensaje);
    }
}

function mostrarTotalAPagar(total_pagar) {
    let mensaje = "Precio Total a Pagar: $" + Math.round(total_pagar);
    alert(mensaje);
}
function cargarProductos(productos) {
    let nombre;
    let precio;
    let cantidad;
    let forma_pago;
    let cant_cuotas;
    let total_pagar_bruto;
    let total_pagar;
    let valor_cuotas;

    if (productos > 0) {
        for (let i=0; i<productos; i++) {
            nombre = prompt("Ingrese el Nombre del Producto:");
            precio = parseFloat(prompt("Ingrese el Precio del Producto:"));
            cantidad = parseInt(prompt("Ingrese la Cantidad de Productos a Comprar:"));
            forma_pago = prompt("Cómo desea Pagar? (Ingrese: Efectivo / Cuotas)").toUpperCase();
            cant_cuotas = formaPago(forma_pago);
            //console.log("Cantidad de Cuotas: " + cant_cuotas);
            
            total_pagar_bruto = calcularTotalPagar(precio, cantidad); //Calculo el Total a Pagar
            total_pagar = calcularTotalPagar(precio, cantidad); //Calculo el Total a Pagar
            //console.log("Total a Pagar: $" + total_pagar);
            
            total_pagar_iva = calcularIva(total_pagar); //Calculo el IVA
            total_pagar = total_pagar + total_pagar_iva;
            //console.log("Total a Pagar IVA: $" + total_pagar);

            total_pagar_descuento = aplicarDescuento(total_pagar, cantidad);
            total_pagar = total_pagar - total_pagar_descuento;
            //console.log("Total a Pagar IVA con Descuento: $" + total_pagar);
        
            valor_cuotas = calcularCuotas(cant_cuotas, total_pagar);
            //console.log("Total a Pagar en " + cant_cuotas + " Cuotas: $" + valor_cuotas);

            //Salida
            mostrarProducto(nombre, precio, cantidad, forma_pago, total_pagar_bruto);
            mostrarIva(total_pagar_iva);
            mostrarDescuento(descuento_si, total_pagar_descuento);
            mostrarInteres(interes_si, cant_cuotas, valor_cuotas);
            mostrarTotalAPagar(total_pagar);
        }
    } else {
        alert("Ingrese una Cantidad de Productos mayor a 0!");
    }
}
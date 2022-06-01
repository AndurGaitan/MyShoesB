document.addEventListener('DOMContentLoaded', function() {
let nike = 6000
let adidas = 7000
let puma = 8000
let vans = 9000
let totalAPagar = 0
let zapatillaSeleccionada  
let ciclico = true
let accion 
let carrito = []

function seleccionZapatilla(){
    zapatillaSeleccionada = prompt('Ingrese el nombre de la zapatilla que quieres agregar al carrito \n nike $6000 (1) \n adidas $7000 (2) \n puma $8000 (3) \n vans $9000 (4)')
    carrito.push(zapatillaSeleccionada);
    if(zapatillaSeleccionada == 'nike'){
        totalAPagar = totalAPagar + nike
        alert(`Seleccionaste zapatilla ${zapatillaSeleccionada} el total de tu cuenta en este momento es ${totalAPagar} pesos`)
    }else if(zapatillaSeleccionada == 'adidas'){
        totalAPagar = totalAPagar + adidas
        alert(`Seleccionaste zapatilla ${zapatillaSeleccionada} el total de tu cuenta en este momento es ${totalAPagar} pesos`)
    }else if(zapatillaSeleccionada == 'puma'){
        totalAPagar = totalAPagar + puma
        alert(`Seleccionaste zapatilla ${zapatillaSeleccionada} el total de tu cuenta en este momento es ${totalAPagar} pesos`)
    }else if(zapatillaSeleccionada == 'vans'){
        totalAPagar = totalAPagar + vans
        alert(`Seleccionaste zapatilla ${zapatillaSeleccionada} el total de tu cuenta en este momento es ${totalAPagar} pesos`)    
    }else{
        alert('No seleccionaste ninguna zapatilla')
    }
}

function verCarrito(){
    alert(`En su carrito hay: \nZapatilla ${carrito.join('\nZapatilla ')}`)  
}


alert('Bienvenido a MyShoes\n Para comenzar a comprar hace click en "aceptar"' );

do{    
    accion = prompt('Escriba la opcion deseada:\n "comprar" para ver las opciones de zapatillas\n "carrito" si desea ver su carrito de compras\n "total" para ver el total a pagar de su cuenta \n"salir" para dejar de comprar').toLowerCase()
    if(accion == 'comprar'){
        seleccionZapatilla();
    }else if(accion == 'total'){
        alert('El total a pagar de su cuenta es: ' + totalAPagar)
    }else if(accion == 'carrito'){
        verCarrito(); 
    }else{
        alert('Muchas gracias por comprar en MyShoes')
    }
}while(accion != 'salir'){
    alert('Muchas gracias por comprar en MyShoes')
}
})
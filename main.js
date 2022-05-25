document.addEventListener('DOMContentLoaded', function() {
let zapatilla1 = 6000
let zapatilla2 = 7000
let zapatilla3 = 8000
let zapatilla4 = 9000
let totalAPagar = 0
let zapatillaSeleccionada  
let ciclico = true
let accion 

function seleccionZapatilla(){
    zapatillaSeleccionada = prompt('Seleccione la zapatilla que quieres agregar al carrito \n Zapatilla1 6000 (1) \n Zapatilla2 7000 (2) \n Zapatilla3 8000 (3) \nZapatilla4 9000 (4)')
    if(zapatillaSeleccionada == 1){
        totalAPagar = totalAPagar + zapatilla1
        alert(`Seleccionaste  zapatilla ${zapatillaSeleccionada} el total de tu cuenta en este momento es ${totalAPagar} pesos`)
    }else if(zapatillaSeleccionada == 2){
        totalAPagar = totalAPagar + zapatilla2
        alert(`Seleccionaste zapatilla ${zapatillaSeleccionada} el total de tu cuenta en este momento es ${totalAPagar} pesos`)
    }else if(zapatillaSeleccionada == 3){
        totalAPagar = totalAPagar + zapatilla3
        alert(`Seleccionaste zapatilla ${zapatillaSeleccionada} el total de tu cuenta en este momento es ${totalAPagar} pesos`)
    }else if(zapatillaSeleccionada == 4){
        totalAPagar = totalAPagar + zapatilla4
        alert(`Seleccionaste zapatilla ${zapatillaSeleccionada} el total de tu cuenta en este momento es ${totalAPagar} pesos`)    
    }else{
        alert('No seleccionaste ninguna zapatilla')
    }
}

alert('Bienvenido a MyShoes\n Para comenzar a comprar hace click en "aceptar"' );

while(ciclico){
    accion = prompt('Seleccione la opcion deseada:\n Escriba "Comprar" para ver las opciones de zapatillas y seleccionar la que usted desee,\n "Total" para ver el total a pagar de su cuenta')
    if(accion == 'Comprar'){
        seleccionZapatilla();
    }else if(accion == 'Total'){
        alert('El total a pagar de su cuenta es: ' + totalAPagar)
    }else{
        alert('no ingresaste una orden valida')
    }
    break
}

while(ciclico){
    accion = prompt('Si deseas seguir comprando:\n Escriba "Comprar"\n "Total" para ver el total a pagar de su cuenta')
    if(accion == 'Comprar'){
        seleccionZapatilla();
    }else if(accion == 'Total'){
        alert('El total a pagar de su cuenta es: ' + totalAPagar)
    }else{
        alert('no ingresaste una orden valida')
    }
    break
}
alert('Muchas gracias por comprar en MyShoes')
})
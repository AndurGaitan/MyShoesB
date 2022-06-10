   //Variables
    const productos = [
        {nombre:'nike',sexo:'masculino',precio:6000},
        {nombre:'adidas',sexo:'masculino',precio:7000},
        {nombre:'puma',sexo:'femenino',precio:8000},
        {nombre:'vans',sexo:'masculino',precio:9000},
    ]
    let totalAPagar = 0
    let zapatillaSeleccionada
    let accion
    let carrito = []
    const clickbutton = document.querySelectorAll('.button');

    //Funcion de interaccion
    clickbutton.forEach(btn => {
        btn.addEventListener('click',addToCarritoItem)
    })
    //Funcion de agregar al carrito
    function addToCarritoItem(e){
        const button = e.target
        const item = button.closest('.card')
        const itemTitle = item.querySelector('.card-title').textContent;
        const itemPrice = item.querySelector('.precio').textContent;
        alert(`Has seleccionado las ${itemTitle} con un valor de ${itemPrice}`)
     }

    //Funcion seleccion de zapatillas 
    function seleccionZapatilla(){
        zapatillaSeleccionada = prompt('Ingrese la marca de la zapatilla que quieres agregar al carrito \n Zapatilla nike - costo $6000 (nike) \nZapatilla adidas - costo $7000 (adidas) \nZapatilla puma - costo $8000 (puma) \nZapatilla vans - costo $9000 (vans)').toLowerCase()
        if (zapatillaSeleccionada == 'nike'){
            let zapatillaSeleccionada1 = productos.find((el)=> el.nombre === 'nike')
            carrito.push(zapatillaSeleccionada1)
        }else if (zapatillaSeleccionada == 'adidas'){
            let zapatillaSeleccionada2 = productos.find((el)=> el.nombre === 'adidas')
            carrito.push(zapatillaSeleccionada2)
        }else if (zapatillaSeleccionada == 'puma'){
            let zapatillaSeleccionada3 = productos.find((el)=> el.nombre === 'puma')
            carrito.push(zapatillaSeleccionada3)
        }else if (zapatillaSeleccionada == 'vans'){
            let zapatillaSeleccionada4 = productos.find((el)=> el.nombre === 'vans')
            carrito.push(zapatillaSeleccionada4)
        }else{
            alert('No seleccionaste ninguna zapatilla')
        }
    }

    //Funcion ver el carrito de compras
    function verCarrito() {
        const verCarrito = carrito.map((el)=> el.nombre)
        alert(`Lo que tienes en tu carrito es: \nZapatilla ${verCarrito.join('\nZapatilla ')}`)
    }

    //Funcion calcular total del carrito de compras
    function calculoTotal(){
    totalAPagar = carrito.reduce((acc, el)=> acc + el.precio, 0)
    alert(`El total a pagar es de ${totalAPagar} pesos`)
    }
    
    //Ejecucion
    
    alert('Bienvenido a MyShoes\n Para comenzar a comprar hace click en "aceptar"' );

    do{    
        accion = prompt('Escriba la opcion deseada:\n "comprar" para ver las opciones de zapatillas\n "carrito" si desea ver su carrito de compras\n "total" para ver el total a pagar de su cuenta \n"salir" para dejar de comprar').toLowerCase()
        if(accion == 'comprar'){
            seleccionZapatilla();
        }else if(accion == 'carrito'){
            verCarrito(); 
        }else if(accion == 'total'){
            calculoTotal();
        }else{
            alert('Muchas gracias por comprar en MyShoes')
        }
    }while(accion != 'salir'){
        alert('Muchas gracias por comprar en MyShoes')
    }


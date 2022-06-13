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
    const tBody = document.querySelector('.tBody');

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
        const itemImg = item.querySelector('.card-img-top').src;

       
        const newItem = {
           title: itemTitle,
           precio: itemPrice,
           img: itemImg,
           cantidad: 1,
        }

        addItemCarrito(newItem);
    }

    function addItemCarrito(newItem){
    carrito.push(newItem)
    renderCarrito()
}

let destino = document.getElementById('contenedorNov')
function renderCarrito(){
    tBody.innerHTML = ''
    carrito.map(item =>{
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const Content = `                      
        <th scope="row">1</th>
        <td class="table__productos">
          <img class="card-img-top" src=${item.img} alt="${item.title}">
          <h5>${item.title}</h5>
        </td>
        <td class="table__price">
          <p>${item.precio}</p>
        </td>
        <td class="table__cantidad">
        <input type="number" min="1" value=${item.cantidad} class="input__elemento">
        <button class="delete btn btn-danger">x</button>
        </td>
        `
        tr.innerHTML = Content;
        tBody.append(tr)
    })
        
    }

    function carritoTotal(){
        let Total = 0;
        const itemCarTotal = document.querySelector('.itemCartTotal')
        carrito.forEach((item) => {
          const precio = Number(item.precio.replace("$", ''))
          Total = Total + precio
        })

        itemCartTotal.innerHTML = `Total $${Total}`
    }

    
/*
    //Funcion seleccion de zapatillas 
    function seleccionZapatilla(){
        //zapatillaSeleccionada = prompt('Ingrese la marca de la zapatilla que quieres agregar al carrito \n Zapatilla nike - costo $6000 (nike) \nZapatilla adidas - costo $7000 (adidas) \nZapatilla puma - costo $8000 (puma) \nZapatilla vans - costo $9000 (vans)').toLowerCase()
        if (itemTitle == 'Zapatilla Superstar'){
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
*/

//Funcion render
/*
    tBody.innerHTML = ''
    carrito.map(item =>{
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const Content = `                      
        <th scope="row">1</th>
        <td class="table__productos">
          <img src=${itemImg} alt="${itemTitle}">
          <h4>${itemTitle}</h4>
        </td>
        <td class="table__price">
          <p>$${itemPrice}</p></td>
        <td class="table__cantidad">
          <input type="number" min="1" value="1">
          <button class="delete btn btn-danget">x</button>
        </td>
        `
        tr.innerHTML = Content;
        tBody.append(tr)
    })
        */
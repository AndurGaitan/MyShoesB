 //Contructor zapatillas

   class zapatillas {
        constructor(nombre,precio,imagen){
            this.nombre=nombre
            this.precio=precio
            this.imagen=imagen
        }
    }
//Stock de zapatillas

    let zapatilla = [
        new zapatillas('Zapatillas Adidas SSstar',23000,'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw1e1cd6b9/products/AD_EG4958/AD_EG4958-1.JPG?sw=400&sh=400'),
        new zapatillas('Zapatillas Fila Genation',20000,'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw12fe972d/products/FI_1CM01569-019/FI_1CM01569-019-1.JPG?sw=400&sh=400'),
        new zapatillas('Zapatillas Vans Oldskool',16000,'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw3c758933/products/VA_VN000KW6HR0/VA_VN000KW6HR0-1.JPG?sw=400&sh=400'),
        new zapatillas('Zapatillas Nike Crimpact',25000,'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw36e6b507/products/NI_DB2477-300/NI_DB2477-300-1.JPG?sw=400&sh=400'),
        new zapatillas('Zapatillas Nike Huarache',29000,'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw50afdaec/products/NI_DD1068-003/NI_DD1068-003-1.JPG?sw=400&sh=400'),
        new zapatillas('Zapatillas Nike Max Dawn',29000,'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw5ecbea5c/products/NI_DH4656-001/NI_DH4656-001-1.JPG?sw=400&sh=400'),
        new zapatillas('Zapatillas Puma Futouble',17500,'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwd1e4c905/products/PU_380639-04/PU_380639-04-1.JPG?sw=400&sh=400'),
        new zapatillas('Zapatillas Puma Go Fores',21000,'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwed8da300/products/PU_383355-02/PU_383355-02-1.JPG?sw=400&sh=400'),
    ]
//Creacion card 

    let destino = document.getElementById('contenedor')
    for(elemento of zapatilla){
        let nuevoEle = document.createElement('div')
        nuevoEle.style = 'width: 18rem'
        nuevoEle.className = 'card'
        nuevoEle.innerHTML =  ` <img src="${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                                <div class="card-body">
                                    <h4 class="card-title">${elemento.nombre}</h4>
                                    <p class="card-text precio fs-5">$${elemento.precio}</p>
                                    <button href="#" class="btn btn-Novo button">Agregar al carrito</button>
                                </div>
                                `
        destino.append(nuevoEle)
    }

    let carrito = [];
    const clickbutton = document.querySelectorAll('.button');
    const tBody = document.querySelector('.tBody');

//Funcion de interaccion

    clickbutton.forEach(btn => {
        btn.addEventListener('click',tomarArticulo) 
    })

//Funcion para tomar articulo

    function tomarArticulo(e){ 
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

        modificarCantidad(newItem); 
    }
    
//Funcion para modificar cantidad de articulos

    function modificarCantidad(newItem){ 
    for(let i =0; i < carrito.length ; i++){
        if(carrito[i].title.trim() === newItem.title.trim()){
            carrito[i].cantidad ++;
            const inputValue = InputElemnto[i]
            inputValue.value++;
        carritoTotal()
        return null;
        }
    }
    carrito.push(newItem)
    agregarCarrito() 
    }

//Funcion para agregar articulos al carrito

    function agregarCarrito(){  
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
            </td>
            `
        tr.innerHTML = Content;
        tBody.append(tr)

    })
    carritoTotal()
    }
    
//Funcion para calcular el total del carrito de compras

    function carritoTotal(){
        let Total = 0;
        const itemCartTotal = document.querySelector('.itemCartTotal')
        carrito.forEach((item) => {
            const precio = Number(item.precio.replace("$", ''))
            Total = Total + precio*item.cantidad
        })

        itemCartTotal.innerHTML = `Total $${Total}`
        agregarLocalStorage() 
    }
//Funcion para almacenar en Local Storage

    function agregarLocalStorage(){ 
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }

    window.onload = function(){
        const storage = JSON.parse(localStorage.getItem('carrito'));
        if(storage){
          carrito = storage;
          agregarCarrito()  
        }
    }

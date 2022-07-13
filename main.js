const funcionPiola = async ()=>{
    const res = await fetch('api.json')
    const datos = await res.json()
    let destino = document.getElementById('contenedor')
        for (elemento of datos) {
            let nuevoEle = document.createElement('div')
            nuevoEle.style = 'width: 18rem'
            nuevoEle.className = 'card'
            nuevoEle.innerHTML = ` <img src="${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                            <div class="card-body">
                                <h4 class="card-title">${elemento.nombre}</h4>
                                <p class="card-text precio fs-5">$${elemento.precio}</p>
                                <button href="#" class="btn btn-Novo button btnNuevo">Agregar al carrito</button>
                            </div>
                            `
            destino.append(nuevoEle)
        } 
}

funcionPiola()


let carrito = []
const clickbutton = document.querySelectorAll('.button');
const tBody = document.querySelector('.tBody');

//Funcion de interaccion

clickbutton.forEach(btn => {
    btn.addEventListener('click', tomarArticulo)
})

//Funcion para tomar articulo

function tomarArticulo(e) {
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
    Toastify({
        text: 'Has sumado tu zapatilla al carrito de compras',
        position: 'right',
        gravity: 'top',
        style: {
            background: 'linear-gradient(90deg, rgba(95,255,0,0.8855917366946778) 0%, rgba(193,255,49,1) 49%, rgba(95,255,0,0.8995973389355743) 100%)'
        }
    }).showToast();

}

//Funcion para modificar cantidad de articulos
const inputElemnto = tBody.getElementsByClassName('input__elemento')
function modificarCantidad(newItem) {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].title.trim() === newItem.title.trim()) {
            carrito[i].cantidad++;
            const inputValue = inputElemnto[i]
            inputValue.value++;
            carritoTotal()
            return null;
        }
    }
    carrito.push(newItem)
    agregarCarrito()
}

//Funcion para agregar articulos al carrito

function agregarCarrito() {
    tBody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.className = 'itemCarrito'
        const Content = `                      
            <th scope="row">1</th>
            <td class="table__productos">
              <img class="card-img-top" src=${item.img} alt="${item.title}">
              <h5 class="title">${item.title}</h5>
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

        tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
        tr.querySelector(".delete").addEventListener('click', eliminarItemCarrito)
    })
    carritoTotal()
}

//Funcion para calcular el total del carrito de compras

function carritoTotal() {
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ''))
        Total = Total + precio * item.cantidad
    })

    itemCartTotal.innerHTML = `Total $${Total}`
    agregarLocalStorage()
}

//Funcion para eliminar Item del carrito de compras   

function eliminarItemCarrito(e) {
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".itemCarrito")
    const title = tr.querySelector('.title').textContent;
    for (let i = 0; i < carrito.length; i++) {

        if (carrito[i].title.trim() === title.trim()) {
            carrito.splice(i, 1)
        }
    }
    tr.remove()
    carritoTotal()
}

//Funcion para sumar cantidad directamente del carrito 

function sumaCantidad(e) {
    const sumaInput = e.target
    const tr = sumaInput.closest(".itemCarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item => {
        if (item.title.trim() === title) {
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            carritoTotal()
        }
    })
}

//Funcion para almacenar en Local Storage

function agregarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function () {
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage) {
        carrito = storage;
        agregarCarrito()
    }
}










// const captiradorData = async() => {
//     try{
//        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
//        const data = await res.json()
//        console.log(data.results)
//     }
//     catch (error){
//         console.log(error)
//     }
// }

// captiradorData()
// fetch('api.json')
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data)
//         let destino = document.getElementById('contenedor')
//         for (elemento of data) {
//             let nuevoEle = document.createElement('div')
//             nuevoEle.style = 'width: 18rem'
//             nuevoEle.className = 'card'
//             nuevoEle.innerHTML = ` <img src="${elemento.imagen}" class="card-img-top" alt="${elemento.title}">
//                             <div class="card-body">
//                                 <h4 class="card-title">${elemento.title}</h4>
//                                 <p class="card-text precio fs-5">$${elemento.precio}</p>
//                                 <button href="#" class="btn btn-Novo button btnNuevo">Agregar al carrito</button>
//                             </div>
//                             `
//             destino.append(nuevoEle)

//         }
//     })


//Contructor zapatillas

// class zapatillas {
//     constructor(nombre, precio, imagen) {
//         this.nombre = nombre
//         this.precio = precio
//         this.imagen = imagen
//     }
// }
// //Stock de zapatillas

// let zapatilla = [
//     new zapatillas('Zapatillas Adidas SSstar', 23000, 'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw1e1cd6b9/products/AD_EG4958/AD_EG4958-1.JPG?sw=400&sh=400'),
//     new zapatillas('Zapatillas Fila Genation', 20000, 'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw12fe972d/products/FI_1CM01569-019/FI_1CM01569-019-1.JPG?sw=400&sh=400'),
//     new zapatillas('Zapatillas Vans Oldskool', 16000, 'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw3c758933/products/VA_VN000KW6HR0/VA_VN000KW6HR0-1.JPG?sw=400&sh=400'),
//     new zapatillas('Zapatillas Nike Crimpact', 25000, 'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw36e6b507/products/NI_DB2477-300/NI_DB2477-300-1.JPG?sw=400&sh=400'),
//     new zapatillas('Zapatillas Nike Huarache', 29000, 'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw50afdaec/products/NI_DD1068-003/NI_DD1068-003-1.JPG?sw=400&sh=400'),
//     new zapatillas('Zapatillas Nike Max Dawn', 29000, 'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw5ecbea5c/products/NI_DH4656-001/NI_DH4656-001-1.JPG?sw=400&sh=400'),
//     new zapatillas('Zapatillas Puma Futouble', 17500, 'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwd1e4c905/products/PU_380639-04/PU_380639-04-1.JPG?sw=400&sh=400'),
//     new zapatillas('Zapatillas Puma Go Fores', 21000, 'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwed8da300/products/PU_383355-02/PU_383355-02-1.JPG?sw=400&sh=400'),
//     new zapatillas('Zapatillas Vans Sk8', 17900, 'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwb33c8991/products/VA_VN000D5IB8C/VA_VN000D5IB8C-1.JPG?sw=400&sh=400'),
//     new zapatillas('Zapatillas Nike ', 25900, 'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwbcbd33f5/products/NI_DC2650-300/NI_DC2650-300-1.JPG?sw=400&sh=400'),
//     new zapatillas('Zapatillas Reebok ', 12500, 'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwf8831b0e/products/RE_G55354/RE_G55354-1.JPG?sw=400&sh=400'),
//     new zapatillas('Zapatillas Vans Ultra', 24000, 'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw7888405a/products/VA_VN0A5HYS195/VA_VN0A5HYS195-1.JPG?sw=400&sh=400'),
// ]

// //Creacion card 
// let destino = document.getElementById('contenedor')
// for(elemento of zapatilla){
//     let nuevoEle = document.createElement('div')
//     nuevoEle.style = 'width: 18rem'
//     nuevoEle.className = 'card'
//     nuevoEle.innerHTML =  ` <img src="${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
//                             <div class="card-body">
//                                 <h4 class="card-title">${elemento.nombre}</h4>
//                                 <p class="card-text precio fs-5">$${elemento.precio}</p>
//                                 <button href="#" class="btn btn-Novo button">Agregar al carrito</button>
//                             </div>
//                             `
//     destino.append(nuevoEle)
// }

//Funcion para traer stock de productos desde json.
// fetch('api.json')
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data)
//         let destino = document.getElementById('contenedor')
//         for (elemento of data) {
//             let nuevoEle = document.createElement('div')
//             nuevoEle.style = 'width: 18rem'
//             nuevoEle.className = 'card'
//             nuevoEle.innerHTML = ` <img src="${elemento.imagen}" class="card-img-top" alt="${elemento.title}">
//                             <div class="card-body">
//                                 <h4 class="card-title">${elemento.title}</h4>
//                                 <p class="card-text precio fs-5">$${elemento.precio}</p>
//                                 <button href="#" class="btn btn-Novo button btnNuevo">Agregar al carrito</button>
//                             </div>
//                             `
//             destino.append(nuevoEle)

//         }
//     })

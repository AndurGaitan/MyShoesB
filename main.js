//Stock de zapatillas desde json

fetch('api.json')
    .then(res => res.json())
    .then(datos => crearProductos(datos))

let carrito = []
let sectionContenedor = document.getElementById('contenedor')
const tBody = document.querySelector('.tBody');



// Interacion para mostrar card

let crearProductos = data => {
    data.forEach(item => {
        const nuevoEle = document.createElement('div')
        nuevoEle.style = 'width: 18rem'
        nuevoEle.className = 'card'
        nuevoEle.innerHTML = ` <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
                        <div class="card-body">
                            <h4 class="card-title">${item.nombre}</h4>
                            <p class="card-text precio fs-5">$${item.precio}</p>
                            <button href="#" class="btn btn-Novo button btnNuevo">Agregar al carrito</button>
                        </div>
                        `
        sectionContenedor.appendChild(nuevoEle)
    })
}


//Evento de interaccion

sectionContenedor.addEventListener('click', tomarArticulo)

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
        text: 'Tu zapatilla fue agregada al carrito',
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
let nombreEntrada = document.getElementById('inputNombre01')
let apellidoEntrada = document.getElementById('inputApellido01')
let emailEntrada = document.getElementById('inputEmail4')
let direccionEntrada = document.getElementById('inputAddress')
let nEntrada = document.getElementById('inputAddressN')
let provinciaEntrada = document.getElementById('inputCity')
// let pasEntrada = document.getElementById('inputPassword4')
let formulario = document.getElementById('formulario')
let URL = 'https://apiform-c3816-default-rtdb.firebaseio.com/'

// Funcion para enviar datos personales del formulario a Api rest

formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(nombreEntrada.value,apellidoEntrada.value,emailEntrada.value,direccionEntrada.value,nEntrada.value,provinciaEntrada.value)
    fetch(URL+`datoscomp.json`,{
                method:'POST',
                body:JSON.stringify({Nombre:nombreEntrada.value,Apellido:apellidoEntrada.value,Email:emailEntrada.value,Direccion:direccionEntrada.value,Numero:nEntrada.value,Provincia:provinciaEntrada.value}),
                headers: {'Content-type':'application/json;charset=UTF-8'},
            })
            .then((resp)=>resp.json())
            .then((data)=>{resumenCompra.innerHTML = `<h5>Tus compra se a realizado con exito</h5>
            `
        });
    })

 // Funcion para traer datos de la api rest

let finalizarBtn = document.getElementById('finalizarBtn');
finalizarBtn.addEventListener("click", ()=>{
    fetch(URL+'/datoscomp.json')
    .then((resp)=>resp.json())
    .then((data)=>{resumenCompra.innerHTML = `<p>El resumen de tu cuenta es el siguiente:</p>
    <br>
    <p>${JSON.stringify(data)}</p>`});
    });


(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

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



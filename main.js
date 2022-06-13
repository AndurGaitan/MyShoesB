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

    

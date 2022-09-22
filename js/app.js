console.log('Conectado...')
const listaUsuarios = document.getElementById('listaUsuarios')
const template = document.getElementById('template').content
const listaTareas = document.getElementById('listaTareas')
const templateTareas= document.getElementById('templateTareas').content
const fragment = document.createDocumentFragment()
let usuarios = []
let tareas = []

document.addEventListener('DOMContentLoaded', ()=>{
    obtenerDatos()
})

listaUsuarios.addEventListener('click', e =>{
    if(e.target.classList.contains('btn')){
        obtenTareasUsuarios(e.target.dataset.id)
    }
    e.stopPropagation()
})

const obtenTareasUsuarios = id =>{
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
    .then(async(res) =>{
        tareas = await res.json()
        pintaTareas()
        console.log('tareas', tareas)
    })
    .catch( error =>{
        console.log(error)
    })
}

const obtenerDatos = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(async (res) =>{
       usuarios = await res.json()
       pintaUsuarios()
       console.log('Usuarios', usuarios)
    })
    .catch(error =>{
        console.log(error)
    })
}

const pintaUsuarios = () => {
    usuarios.forEach(usuario =>{
        template.querySelectorAll('h1')[0].textContent = 'Nombre de Usuario: ' + usuario.name
        template.querySelectorAll('h2')[0].textContent = 'Id de Usuario: ' + usuario.id
        template.querySelectorAll('h2')[1].textContent = 'Ciudad: ' + usuario.address.city
        template.querySelectorAll('h2')[2].textContent = 'Calle: ' + usuario.address.street
        template.querySelectorAll('h2')[3].textContent = 'Casa: ' + usuario.address.suite
        template.querySelectorAll('h2')[4].textContent = 'Codigo Postal: ' + usuario.address.zipcode
        template.querySelectorAll('h2')[5].textContent = 'Email: ' + usuario.email
        template.querySelectorAll('h2')[6].textContent = 'Telefono: ' + usuario.phone
        template.querySelectorAll('h2')[7].textContent = 'Nombre de usuario: ' + usuario.username
        template.querySelectorAll('h2')[8].textContent = 'Sitio Web: ' + usuario.website
        template.querySelectorAll('h1')[1].textContent = 'Nombre de Compañia: ' + usuario.company.name
        template.querySelectorAll('h2')[9].textContent = 'Tipo de negocio: ' + usuario.company.bs
        template.querySelectorAll('h2')[10].textContent = 'Etiquetas de busqueda: ' + usuario.company.catchPhrase        
        template.querySelector('.btn').dataset.id = usuario.id
        
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    listaUsuarios.appendChild(fragment)
}

const pintaTareas = () => {
    tareas.forEach(tarea =>{
        document.getElementById("listaTareas").innerHTML = ""
        templateTareas.querySelectorAll('h1')[0].textContent = 'Titulo de Tarea: ' + tarea.title
        templateTareas.querySelectorAll('h2')[0].textContent = 'Status: ' + tarea.completed        
        templateTareas.querySelector('.btn').dataset.id = tarea.id
        
        const clone = templateTareas.cloneNode(true)
        fragment.appendChild(clone)
    })
    listaTareas.appendChild(fragment)
}
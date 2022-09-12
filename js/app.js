console.log('Conectado...')
let usuarios = []

document.addEventListener('DOMContentLoaded', ()=>{
    obtenerDatos()
})

const obtenerDatos = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(async (res) =>{
       // console.log(await res.json())
       usuarios = (await res.json)
       console.log('Usuarios', usuarios)
    })
    .catch(error =>{
        console.log(error)
    })
}
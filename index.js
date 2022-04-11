const express = require('express')
const app = express()

app.use(express.json())

let prueba = [
   {
      "nombre": "Juan",
      "apellido":"Perez",
      "telefono": "809-586-6465"
   }
]


app.get('/', (request, response) => {
   response.json(prueba)
})

app.post('/', (request, response) =>{
   const pruebas = request.body
   

   const newprueba = {
      nombre: pruebas.nombre,
      apellido: pruebas.apellido,
      telefono: pruebas.telefono
   }

   prueba = prueba.concat(newprueba)

   response.json(newprueba)
})


const PORT = 8000
app.listen(PORT, () =>{
console.log('Server  Port', PORT)
})

const productos = [];
const URL = '../productos.json'

// Función para retornar una Card HTML utilizando un objeto literal como parámetro
function retornarCardHTML(producto) {
  // Utilizamos template strings para construir la Card HTML
  const cardHTML = `
    <div class="card">

      <h3>${producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <button id="${producto.id}">agregar a fav</button>
    </div>
  `;
  
  return cardHTML;
}


const agregarClickEnBotonesFav = ()=>{
  const botones = document.querySelectorAll('button')
  for (boton of botones){
    boton.addEventListener('click',(e)=>{
      agregarAFavs(e.target.id)
    })
  }

}


// // //Función para cargar productos y generar las Cards HTML
 function cargarProductos(array) {
   const container = document.querySelector('.container'); // Referencia al elemento <div class="container">
   array.forEach(producto => {
     const cardHTML = retornarCardHTML(producto); // Genera la Card HTML para cada producto
     container.innerHTML += cardHTML; // Agrega la Card HTML al contenedor
   })
 agregarClickEnBotonesFav();
 
 
 }
 


 const obtenerProductos = ()=>{
  fetch(URL)
      .then((Response)=>Response.json())
      .then((data)=> productos.push(...data))
      .then(()=>cargarProductos(productos))
      .catch((error)=>console.error(error))
 }
 obtenerProductos()
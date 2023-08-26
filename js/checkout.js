const tableBody = document.querySelector('tbody')

const retornarTablaHtml = (productosFav)=>{
return `   <tr>
               <td>${productosFav.imagen}</td>
               <td>${productosFav.nombre}</td>
               <td>$${productosFav.precio}</td>
               <td><img src="images/icon-fruits-64.png" width="24px"></td>
</tr>`
}

if (productosFav.length > 0){
    productosFav.forEach((producto)=>tableBody.innerHTML += retornarTablaHtml(producto))
}

const btnComprar = document.querySelector("#btnComprar")

btnComprar.addEventListener("click", ()=>{
    alert("felicidades por tu compra ")
    productosFav.length = 0 
    localStorage.removeItem('MisProductosFavoritos')
    tableBody.innerHTML = ""
})
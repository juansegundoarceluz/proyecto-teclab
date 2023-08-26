// esto es lo que se modifico en la API 3

const almacenarEnFavoritos = ()=>{
    if (productosFav.length > 0){
        localStorage.setItem('MisProductosFavoritos', JSON.stringify(productosFav))
    }
}

// esto es lo que se modifico en la API 3

  const recuperarFavoritos = ()=>{
      return JSON.parse(localStorage.getItem('MisProductosFavoritos')) || []
 }


const productosFav= recuperarFavoritos()

const agregarAFavs = (productoID)=>{
    if (productoID > 0){
        const resultado = productos.find(producto=> producto.id === parseInt
            (productoID))
        if (resultado !== undefined){
          productosFav.push(resultado)
            //  console.table(productosFav) 
            //esto es lo que se modifico en la API 3
          localStorage.setItem('MisProductosFavoritos', JSON.stringify(productosFav))
        }else{
            console.warn("no se encontro el producto con tal codigo");

        }
    }
}


        
    
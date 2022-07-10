export const adaptadorProductosFirebase = (doc) => {
    const data = doc.data()
    
    const productos = {
        id: doc.id,
        nombre: data.nombre,
        descripcion: data.descripcion, 
        imagen: data.imagen,
        precio: data.precio,
        categoria: data.categoria,
        stock: data.stock
    }

    return productos
}
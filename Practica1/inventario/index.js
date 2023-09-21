// 1. Definir un arreglo de objetos en base a su entidad asignada en el proyecto autónomo
// con por lo menos 5 elementos.
const invetarioLibros = [
    {
        idInventario: 1,
        numeroCopias: 10,
        estado: "Nuevo",
        precioVenta: "10$",
        precioAlquiler: "5$",
    },
    {
        idInventario: 2,
        numeroCopias: 5,
        estado: "Usado",
        precioVenta: "5$",
        precioAlquiler: "2.5$",
    },
    {
        idInventario: 3,
        numeroCopias: 20,
        estado: "Desgastado",
        precioVenta: "3$",
        precioAlquiler: "1.5$",
    },
    {
        idInventario: 4,
        numeroCopias: 15,
        estado: "Semi Nuevo",
        precioVenta: "8$",
        precioAlquiler: "4$",
    },
    {
        idInventario: 5,
        numeroCopias: 3,
        estado: "Nuevo",
        precioVenta: "15$",
        precioAlquiler: "10$",
    },
]

// 2. Recorrer y mostrar 3 veces los elementos de su arreglo de objetos aplicando 3
// instrucciones para ciclos distintas a su preferencia. Ejemplo forEach, for in, for of.
//forEach
invetarioLibros.forEach(function(elemento){
    for(let i=0; i<3; i++){
        console.log(elemento);
    }
});

//for in
for (let elemento in invetarioLibros){
    for(let i=0; i<3; i++){
        console.log(invetarioLibros[elemento]);
    }
}

//for of
for (let elemento of invetarioLibros){
    for(let i=0; i<1; i++){
        console.log(elemento)
    }
}

// 3. Definir una función con Callback que reciba como parámetro su arreglo de elementos
// y un ID y devuelva el objeto correspondiente, luego mostrarlo por consola usando el
// callback.
function buscarIdInventario(idInventario, callback){
    const inventarioEncontrado = invetarioLibros.find((e)=>{return e.idInventario == idInventario})
    if(!inventarioEncontrado){
        return callback ("No se ha encontrado el inventario");
    }
    return callback(null, inventarioEncontrado);
}

buscarIdInventario(6,(error, invetario)=>{
    if(error){
        console.log("Ha ocurrido un error")
    }
    console.log(invetario)
});
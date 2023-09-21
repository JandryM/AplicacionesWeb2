// 1. Definir un arreglo de objetos en base a su entidad asignada en el proyecto autónomo
// con por lo menos 5 elementos.
const negocios = [
    {
      idNegocio: 1,
      nombreNegocio: "Libro Mundo",
      direccionNegocio: "Manta",
      telefonoNegocio: 1122336558,
      correoNegocio:"libroMu@gmail.com",
      totalLibros: 99,
    },
  
    {
      idNegocio: 2,
      nombreNegocio: "Leer & Vivir",
      direccionNegocio: "Guayaquil",
      telefonoNegocio: 9852365211,
      correoNegocio:"lee&vive@gmail.com",
      totalLibros: 400,
    },
  
    {
      idNegocio: 3,
      nombreNegocio: "Páginas Doradas",
      direccionNegocio: "Quito",
      telefonoNegocio: 9654859652,
      correoNegocio:"pagDoradas@gmail.com",
      totalLibros: 200,
    },
  
    {
      idNegocio: 4,
      nombreNegocio: "Biblioteca Encantada",
      direccionNegocio: "Ambato",
      telefonoNegocio: 2354698548,
      correoNegocio:"bibiEncatada@gmail.com",
      totalLibros: 50,
    },
    
    {
      idNegocio: 5,
      nombreNegocio: "La Letra Impresa",
      direccionNegocio: "Montecristi",
      telefonoNegocio: 1231564595,
      correoNegocio:"letraImpress@gmail.com",
      totalLibros: 100,
    }
  ]

// 2. Recorrer y mostrar 3 veces los elementos de su arreglo de objetos aplicando 3
// instrucciones para ciclos distintas a su preferencia. Ejemplo forEach, for in, for of.
//forEach
negocios.forEach(function(elemento){
    for (let i=0; i<3; i++){
        console.log(elemento);
    }
});

//for in
for (let elemento in negocios){
    for(let i=0; i<3; i++){
        console.log(negocios[elemento])
    }
}

//for of
for (let elemento of negocios){
    for (let i=0; i<3; i++){
        console.log(elemento);
    }
}

// 3. Definir una función con Callback que reciba como parámetro su arreglo de elementos
// y un ID y devuelva el objeto correspondiente, luego mostrarlo por consola usando el
// callback.
function buscarIdNegocio(idNegocio, callback){
    const idEncotrado = negocios.find((e)=>{return e.idNegocio == idNegocio})
    if(!idEncotrado){
        return callback("No se a encontrado el negocio");
    }
    return callback(null, idEncotrado);
}

buscarIdNegocio(5,(error, negocio)=>{
    if(error){
        console.log("Ha ocurrido un error")
    }
    console.log(negocio)
});
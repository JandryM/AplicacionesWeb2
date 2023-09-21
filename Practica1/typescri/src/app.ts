//***** Invetario *****
// 1. Definir un arreglo de objetos en base a su entidad asignada en el proyecto autónomo
// con por lo menos 5 elementos.
interface IInventario{
    idInventario: number;
    numeroCopias: number;
    estado: string;
    precioVenta: string;
    precioAlquiler: string;
}

const inventario: IInventario[] =
[
    {idInventario: 1, numeroCopias: 10, estado: "Nuevo", precioVenta: "10$", precioAlquiler: "5$"},
    {idInventario: 2, numeroCopias: 5, estado: "Usado", precioVenta: "5$", precioAlquiler: "2.5$"},
    {idInventario: 3, numeroCopias: 20, estado: "Desgastado", precioVenta: "3$", precioAlquiler: "1.5$"},
    {idInventario: 4, numeroCopias: 15, estado: "Semi Nuevo", precioVenta: "8$", precioAlquiler: "4$"},
    {idInventario: 5, numeroCopias: 3, estado: "Nuevo", precioVenta: "15$", precioAlquiler: "10$"},
];
// 2. Recorrer y mostrar 3 veces los elementos de su arreglo de objetos aplicando 3
// instrucciones para ciclos distintas a su preferencia. Ejemplo forEach, for in, for of.
//forEach
inventario.forEach((elemento) => {
    for (let i = 0; i < 3; i++) {
      console.log(elemento);
    }
  });

//for in
for (const elemento of inventario) {
    for (let i = 0; i < 3; i++) {
      console.log(elemento);
    }
  }  

//for of
for (let elemento of inventario) {
    for (let i = 0; i < 3; i++) {
      console.log(elemento);
    }
  }
  
  //***** Negocios *****
// 1. Definir un arreglo de objetos en base a su entidad asignada en el proyecto autónomo
// con por lo menos 5 elementos.
interface INegocios{
    idNegocio: number;
    nombreNegocio: string;
    direccionNegocio: string;
    telefonoNegocio: number;
    correoNegocio: string;
    totalLibros: number;
}
const negocios:INegocios[] =
[
    {idNegocio:1, nombreNegocio:"Libro Mundo", direccionNegocio:"Manta",
    telefonoNegocio:1122336558,correoNegocio:"libroMu@gmail.com", totalLibros:99},
    {idNegocio: 2, nombreNegocio: "Leer & Vivir", direccionNegocio: "Guayaquil",
    telefonoNegocio: 9852365211, correoNegocio: "lee&vive@gmail.com", totalLibros: 400},
    {idNegocio: 3, nombreNegocio: "Páginas Doradas", direccionNegocio: "Quito",
    telefonoNegocio: 9654859652, correoNegocio: "pagDoradas@gmail.com", totalLibros: 200},
    {idNegocio: 4, nombreNegocio: "Biblioteca Encantada", direccionNegocio: "Ambato",
    telefonoNegocio: 2354698548, correoNegocio: "bibiEncatada@gmail.com", totalLibros: 50},
    {idNegocio: 5, nombreNegocio: "La Letra Impresa", direccionNegocio: "Montecristi",
    telefonoNegocio: 1231564595, correoNegocio: "letraImpress@gmail.com", totalLibros: 100},
];
//forEach
negocios.forEach((elemento) => {
    for (let i = 0; i < 3; i++) {
      console.log(elemento);
    }
  });

//for in
for (const elemento of negocios) {
    for (let i = 0; i < 3; i++) {
      console.log(elemento);
    }
  }  

//for of
for (let elemento of negocios) {
    for (let i = 0; i < 3; i++) {
      console.log(elemento);
    }
  }
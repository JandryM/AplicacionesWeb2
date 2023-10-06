import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();

// Función para crear un negocio
const createNegocio = async () => {
    const negocioCreated = await prisma.negocioModel.create({
        data: {
            correoNegocio: "libromundo@gmail.com",
            nombreNegocio: "Libro Mundo",
            direccionNegocio: "Manta",
            telefonoNegocio: 965687454,
            totalLibros: 6,
            inventario: {
                create: {
                    encargadoId: 2,
                    numeroCopias: 10,
                    estado: "nuevo",
                    precioVenta: 5,
                    precioAlquiler: 4
                }
            }
        }
    });
    console.log(negocioCreated);
}

// Función para crear un encargado
const createEncargado = async () => {
    const encargadoCreated = await prisma.encargadoModel.create({
        data: {
            correoEncargado: "juan@gmail.com",
            nombreEncargado: "Juan",
            telefonoEncargado: 244524253,
            inventario: {
                create: {
                    negocioId: 5,
                    numeroCopias: 8,
                    estado: "nuevo",
                    precioVenta: 2,
                    precioAlquiler: 5
                }
            }
        }
    });
    console.log(encargadoCreated);
}

// Función para consultar un negocio o encargado
const queryUser = async () => {
    const user = await prisma.negocioModel.findMany({
        include: {
            inventario: true
        },
        where: {
            id: 1
        }
    });
    console.log(user);
}

// Función para actualizar un negocio o encargado
const updateUser = async () => {
    const user = await prisma.negocioModel.update({
        data: {
            nombreNegocio: "Libro Mundo"
        },
        where: {
            id: 3
        }
    });
}

// Función para eliminar un negocio o encargado
const deleteUser = async () => {
    const user = await prisma.negocioModel.delete({
        where: {
            id: 8
        }
    });
}

// Llama a las respectivas funciones para crear, buscar, actualizar y borrar un negocio
// (async ()=>{
//     await createNegocio()
//     await queryUser()
//     await updateUser()
//     await deleteUser()
// })()
// Llama a las respectivas funciones para crear, buscar, actualizar y borrar un encargado
(async ()=>{
    await createEncargado()
    await queryUser()
    await updateUser()
    await deleteUser()
})()

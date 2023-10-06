-- CreateTable
CREATE TABLE "negocioModel" (
    "id" SERIAL NOT NULL,
    "correoNegocio" TEXT NOT NULL,
    "nombreNegocio" TEXT NOT NULL,
    "direccionNegocio" TEXT NOT NULL,
    "telefonoNegocio" INTEGER NOT NULL,
    "totalLibros" INTEGER NOT NULL,

    CONSTRAINT "negocioModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encargadoModel" (
    "id" SERIAL NOT NULL,
    "correoEncargado" TEXT NOT NULL,
    "nombreEncargado" TEXT NOT NULL,
    "telefonoEncargado" INTEGER NOT NULL,

    CONSTRAINT "encargadoModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventarioModel" (
    "id" SERIAL NOT NULL,
    "numeroCopias" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "precioVenta" INTEGER NOT NULL,
    "precioAlquiler" INTEGER NOT NULL,
    "encargadoId" INTEGER NOT NULL,
    "negocioId" INTEGER NOT NULL,

    CONSTRAINT "inventarioModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "negocioModel_correoNegocio_key" ON "negocioModel"("correoNegocio");

-- CreateIndex
CREATE UNIQUE INDEX "encargadoModel_correoEncargado_key" ON "encargadoModel"("correoEncargado");

-- AddForeignKey
ALTER TABLE "inventarioModel" ADD CONSTRAINT "inventarioModel_encargadoId_fkey" FOREIGN KEY ("encargadoId") REFERENCES "encargadoModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventarioModel" ADD CONSTRAINT "inventarioModel_negocioId_fkey" FOREIGN KEY ("negocioId") REFERENCES "negocioModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

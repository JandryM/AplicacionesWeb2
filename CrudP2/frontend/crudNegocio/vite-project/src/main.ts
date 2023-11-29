import './style.css'




(async ()=>{

  const response = await fetch('http://localhost:3000/api/negocios')
  const data = await response.json()
  
  let divTable= `<table>`
  divTable += `<tr><th>Id</th><th>Correo</th><th>Nombre</th><th>Direccion</th><th>Telefono</th><th>Total Libros</th><th>Acciones</th></tr>`
  data.forEach((negocio: INegocio) => {
    divTable += `<tr><td>${negocio.id}</td><td>${negocio.correoNegocio}</td><td>${negocio.nombreNegocio}</td><td>${negocio.direccionNegocio}</td><td>${negocio.telefonoNegocio}</td><td>${negocio.totalLibros}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button> </td> </tr>`
  })
  divTable += `</table>`

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable


  const divButton = `<button class="btn btn-primary" >Agregar</button>`
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary')
  btnAgregar?.addEventListener('click', ()=>{
    const divForm = `<form>
    <div class="mb-3">
      <label for="correoNegocio" class="form-label">Correo del Negocio</label>
      <input type="text" class="form-control" id="correoNegocio" aria-describedby="correoNegocio">
    </div>
    <div class="mb-3">
      <label for="nombreNegocio" class="form-label">Nombre del Negocio</label>
      <input type="text" class="form-control" id="nombreNegocio">
    </div>
    <div class="mb-3">
      <label for="direccionNegocio" class="form-label">Direccion del Negocio</label>
      <input type="text" class="form-control" id="direccionNegocio" aria-describedby="direccionNegocio">
    </div>
    <div class="mb-3">
      <label for="telefonoNegocio" class="form-label">Telefono del negocio</label>
      <input type="text" class="form-control" id="telefonoNegocio" aria-describedby="telefonoNegocio">
    </div>
    <div class="mb-3">
      <label for="totalLibros" class="form-label">Total de Libros</label>
      <input type="text" class="form-control" id="totalLibros" aria-describedby="totalLibros">
    </div>
    <button type='submit'  class="btn btn-save">Save</button>
    <button type='submit'  class="btn btn-cancel">Cancel</button>
    </form>`
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
    btnSave?.addEventListener('click', async (e)=>{
      e.preventDefault()
      const correoNegocio = document.querySelector<HTMLInputElement>('#correoNegocio')!.value
      const nombreNegocio = document.querySelector<HTMLInputElement>('#nombreNegocio')!.value
      const direccionNegocio = document.querySelector<HTMLInputElement>('#direccionNegocio')!.value
      const telefonoNegocio = parseInt((document.querySelector<HTMLInputElement>('#telefonoNegocio')! as HTMLInputElement).value, 10);
      const totalLibros = parseInt((document.querySelector<HTMLInputElement>('#totalLibros')! as HTMLInputElement).value, 10);
      const response = await fetch('http://localhost:3000/api/negocios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({correoNegocio, nombreNegocio,direccionNegocio, telefonoNegocio, totalLibros})
      })
      const data = await response.json()
      console.log(data)
      // reload page
      location.reload()
    })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      console.log(id)
      await fetch(`http://localhost:3000/api/negocios/${id}`, {
        method: 'DELETE'
      })
      location.reload()

     })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      const response = await fetch(`http://localhost:3000/api/negocios/${id}`)
      const data = await response.json()
      //add button for cancel
      const btnCancel = `<button class="btn btn-cancel">Cancel</button>`
      const divForm = `<form>
      <div class="mb-3">
        <label for="correoNegocio" class="form-label">Correo del Negocio</label>
        <input type="text" class="form-control" id="correoNegocio" aria-describedby="correoNegocio" value="${data.correoNegocio}">
      </div>
      <div class="mb-3">
        <label for="nombreNegocio" class="form-label">Nombre del Negocio</label>
        <input type="text" class="form-control" id="nombreNegocio" value="${data.nombreNegocio}">
      </div>
      <div class="mb-3">
        <label for="direccionNegocio" class="form-label">Direccion del Negocio</label>
        <input type="text" class="form-control" id="direccionNegocio" value="${data.direccionNegocio}">
      </div>
      <div class="mb-3">
        <label for="telefonoNegocio" class="form-label">Telefono del Negocio</label>
        <input type="text" class="form-control" id="telefonoNegocio" value="${data.telefonoNegocio}">
      </div>
      <div class="mb-3">
        <label for="totalLibros" class="form-label">Total de Libros</label>
        <input type="text" class="form-control" id="totalLibros" value="${data.totalLibros}">
      </div>
      <button type='submit'  class="btn btn-save">Save</button>
      ${btnCancel}
      </form>`
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
      btnSave?.addEventListener('click', async (e)=>{
        e.preventDefault()
        const correoNegocio = document.querySelector<HTMLInputElement>('#correoNegocio')!.value
        const nombreNegocio = document.querySelector<HTMLInputElement>('#nombreNegocio')!.value
        const direccionNegocio = document.querySelector<HTMLInputElement>('#direccionNegocio')!.value
        const telefonoNegocio = parseInt((document.querySelector<HTMLInputElement>('#telefonoNegocio')! as HTMLInputElement).value, 10);
        const totalLibros = parseInt((document.querySelector<HTMLInputElement>('#totalLibros')! as HTMLInputElement).value, 10);
        const response = await fetch(`http://localhost:3000/api/negocios/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({correoNegocio, nombreNegocio,direccionNegocio, telefonoNegocio, totalLibros})
        })
        const data = await response.json()
        console.log(data)
        // reload page
        location.reload()
      })
     })
  })

})()



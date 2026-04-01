import { useState } from "react"
import emailjs from "emailjs-com"

// https://www.waivio.com/@jfdesousa7/paso-a-paso-como-crear-un-crud-con-react-y-firebase
// FUNCION CONTACTO

function Contacto()
{
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")

  // LIMPIAR FORMULARIO
  const limpiarFormulario = (e) =>{ // funcion del evento de clic y vacia todos los apartados del formulario
      e.preventDefault();
      setNombre("")
      setEmail("")
      setMensaje("")
    } 
  
  // FUNCION ENVIAR                   
  function enviar(e)
  {
    e.preventDefault()

    emailjs.sendForm(
          'service_1',   // de EmailJS
          'template1',  // de EmailJS
          e.target,          // el formulario
          'WEZgAwya3nU75DG01'    // tu clave pública
        )
        .then(() => {
          alert("Mensaje enviado");
        })
        .catch(() => {
          alert("Error al enviar");
        });


    const formData = new FormData(e.target)
    console.log(formData.get("nombre"))
    setNombre(formData.get("nombre"));

    const texto_email = formData.get("email");
    const texto_mensaje = formData.get("mensaje");

    alert(`Has enviado un '${mensaje}' a '${nombre}' --> '${email}'`); 
    
    formData.preventDefault();
  }

  return ( 
  <div >
    <form onSubmit={enviar} className="formulario"> {/*Enviar */}
          {/*enseña el nombre y el mensaje*/}
          <input name="nombre" placeholder="Escribe tu Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          {/*enseña el correo y el mensaje*/}
          <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input name="titulo" />
          {/*enseña el mensaje y guarda lo que el usuario escriba*/}
          <textarea name="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
          <button type="submit">Enviar</button> {/* Botón enivar */}
          <button type="button" onClick={limpiarFormulario}>Limpiar</button> {/* Botón para borrar */}
    </form>
  </div>
  )
}
export default Contacto

// IMPORTACIONES
import { useState } from "react"
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import SobreMi from "./pages/SobreMi"
import Contacto from "./pages/Contacto"
import Proyectos from "./pages/Proyectos" 
// ESTILOS
import './App.css'
// ESTADO
function App() {
  const [pagina, setPagina] = useState("inicio")

  return (
    <>
      <Navbar setPagina={setPagina} />
      
      {pagina === "inicio" && <Home />}
      {pagina === "sobreMi" && <SobreMi />}      
      {pagina === "contacto" && <Contacto />}    
      {pagina === "proyectos" && <Proyectos />}      
    </>
  )
}

export default App
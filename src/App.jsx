import { useState, useEffect } from "react" 
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import SobreMi from "./pages/SobreMi"
import Contacto from "./pages/Contacto"
import Proyectos from "./pages/Proyectos" 
import Formacion from "./pages/Formacion" 
import PantallaCarga from "./components/PantallaCarga.jsx"; 
import './App.css'

function App() {
  // conrola qué sección se ve de la web y si el loading está activo o no
  const [pagina, setPagina] = useState("inicio")
  const [loading, setLoading] = useState(false) 

  // se activa cada vez que cambio de pestaña de la web ([pagina])
  useEffect(() => {
    setLoading(true) // activa el ClockLoader

    const timer = setTimeout(() => {
      setLoading(false) // duracion de 1 segundo
    }, 1000)

    return () => clearTimeout(timer) // limpia el proceso cuando llega a 1 segundo
  }, [pagina]) 

  // muiestra el ClockLoader si esta en true y muestra la pestaña
  return (
    <>
      {loading && <PantallaCarga />}

      <Navbar setPagina={setPagina} />
      
      <main>
        {pagina === "inicio" && <Home />}
        {pagina === "sobreMi" && <SobreMi />}      
        {pagina === "contacto" && <Contacto />}    
        {pagina === "proyectos" && <Proyectos />}
        {pagina === "formacion" && <Formacion />}      
      </main>
    </>
  )
}

export default App
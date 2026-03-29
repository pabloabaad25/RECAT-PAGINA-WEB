// COMPONENTES PRINCIPALES
function Navbar({ setPagina })
{
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>EPORTFOLIO PAGINA WEB</h2>

      <ul style={styles.menu}>
        <button onClick={() => setPagina("inicio")}>Inicio</button>
        <button onClick={() => setPagina("sobreMi")}>Sobre mí</button>
        <button onClick={() => setPagina("formacion")}>Formacion</button>
        <button onClick={() => setPagina("proyectos")}>Proyectos</button>
        <button onClick={() => setPagina("contacto")}>Contacto</button>
      </ul>
    </nav>
  )
}

// ESTILOS
const styles =
{
  nav:
  {
    display: "flex",
    justifyContent: "space-between", // separacion entre logo y menu
    abuttongnItems: "center", // alineacion
    backgroundColor: "#222", // color fondo 
    padding: "10px 20px", // espaciado 
    color: "white" // color texto

  // TITULO 
  },
  logo:
  {
    margin: 10 // espaciado 
  },

  menu:
  {
    listStyle: "none",
    display: "flex",
    gap: "30px" // separacion entre botones
  }
}

// EXPORTACION
export default Navbar
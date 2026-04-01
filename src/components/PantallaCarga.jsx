import { ClockLoader } from "react-spinners";

const PantallaCarga = () => {
  return (
    // se muestra en toda la pantalla (vw/vh) y esta centrado 
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw", // todo el ancho de la pantalla
      height: "100vh", // toda la altura de la pantalla
      backgroundColor: "#1e293b", 
      display: "flex", // para centrar
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999, // encima de todo (capa)
    }}>
      {/* Config del ClockLoader (librería react-spinners) */}
      <ClockLoader 
        color="#dd0f22" // color
        loading={true} // estado
        size={100} // tamaño en px
        speedMultiplier={3} // velocidad girar
      />
    </div>
  );
};

export default PantallaCarga; 
import { motion } from "framer-motion";
import "../App.css";

import logoLasalle from "../assets/logotipo_lasalle.png";
import logoNineteam from "../assets/logotipo_nineteam.png";

const LOGOS = {
  lasalle: logoLasalle,
  nineteam: logoNineteam,
};

function Formacion() {
  return (
    <div className="formacion-container">

      {/* EXPERIENCIA LABORAL */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            backgroundColor: "#00f",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="formacion-card"
        >
          <div className="encabezado">
            <h2>Experiencia Laboral</h2>
            <span>2024 - 2025</span>
          </div>

          <div className="practicas">
            <h3>Prácticas Empresa Nineteam (Girona)</h3>
            <ul className="practicas">
              <li>
                <strong>Mantenimiento</strong>: Tareas preventivas y correctivas de hardware.
              </li>
              <li>
                <strong>Validación</strong>: Testeo de componentes y periféricos.
              </li>
              <li>
                <strong>Configuración</strong>: Instalación de SO y software.
              </li>
            </ul>
          </div>
          
          {/* Logos alineados horizontalmente y centrados */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0",
              marginTop: "20px"
            }}
          >
            <img
              src={LOGOS.nineteam}
              className="logo-redondo"
              alt="Logo Nineteam 1"
              style={{
                width: "150px",
                height: "auto",
                margin: "0"
              }}
          />
            <img
              src={LOGOS.nineteam}
              className="logo-redondo"
              alt="Logo Nineteam 2"
              style={{
                width: "150px",
                height: "auto",
                margin: "0"
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* EDUCACIÓN */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            backgroundColor: "#00f",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="formacion-card"
        >
          <div className="encabezado">
            <h2>Educación</h2>
          </div>

          <div className="resumen-proyecto">
            <p>
              <strong>CFGS en Desarrollo de Aplicaciones Multiplataforma</strong>
            </p>
            <p>Perfil en Videojuegos y Ocio Digital | 2025 - Actualidad</p>
            <p>
              <strong>CFGM en Sistemas Microinformáticos y Redes</strong>
            </p>
            <p>Promoción 2023 - 2025</p>
          </div>

          <div style={{ textAlign: "center", marginBottom: "15px" }}>
            <img
              src={LOGOS.lasalle}
              className="logo-redondo"
              alt="Logo La Salle"
              style={{ width: "120px", height: "auto" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* HABILIDADES TÉCNICAS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            backgroundColor: "#00f",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="formacion-card"
        >
          <div className="encabezado">
            <h2>Habilidades Técnicas</h2>
          </div>
          <div className="resumen-practicas">
            <ul className="practicas">
              <li>
                <strong>Sistemas</strong>: Windows/Linux, Redes, Servidores.
              </li>
              <li>
                <strong>Dev</strong>: Java, Python, C#, C++, HTML/CSS.
              </li>
              <li>
                <strong>Bases de Datos</strong>: SQL, XML.
              </li>
              <li>
                <strong>Software</strong>: Office (Excel, Access).
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* HABILIDADES PERSONALES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            backgroundColor: "#00f",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="formacion-card"
        >
          <div className="encabezado">
            <h2>Habilidades Personales</h2>
          </div>
          <div className="resumen-practicas">
            <ul className="practicas">
              <li>
                <strong>Resolución</strong>: Enfoque analítico.
              </li>
              <li>
                <strong>Creatividad</strong>: Innovación en soluciones.
              </li>
              <li>
                <strong>Comunicación</strong>: Eficaz y asertiva.
              </li>
              <li>
                <strong>Adaptabilidad</strong>: Flexibilidad ante retos.
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Formacion;
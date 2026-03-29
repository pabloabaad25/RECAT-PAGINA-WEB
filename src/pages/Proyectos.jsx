import imageninteligencia from "../assets/imageninteligencia.png";
import imagenDocker from "../assets/imagen_web_docker.png";
import { motion } from "framer-motion";
import "../App.css";

function Proyectos() {
  return (
    <div className="proyectos-container">
      
      {/* PROYECTO 1 - INTELIGENCIA ARTIFICIAL */}
      <motion.div className="project-card" whileHover={{ scale: 1.05, backgroundColor: "#00f" }}>
        <div className="encabezado">
          <h2 >Proyecto de Síntesis - IA</h2>
          <span>2024 - 2025</span>
        </div>

        <div className="resumen-proyecto">
          <p>
            En mi Proyecto de Síntesis de 2º de CFGM realicé un estudio completo sobre 
            Inteligencia Artificial, centrándome en <strong>Large Language Models (LLM)</strong> y 
            herramientas generativas como Pika Labs, ElevenLabs y HeyGen.
          </p>
          <p>
            La parte práctica consistió en la clonación de voz y creación de vídeos realistas con 
            sincronización labial, además de un plan de viabilidad empresarial.
          </p>

          <ul className="puntosclave-proyecto">
            <li><strong>Evolución</strong>: Del Test de Turing a los LLM modernos.</li>
            <li><strong>Herramientas</strong>: Pika Labs, ElevenLabs y HeyGen.</li>
            <li><strong>Práctica</strong>: Clonación de voz y vídeo realista.</li>
            <li><strong>Empresa</strong>: DAFO, marketing y viabilidad.</li>
          </ul>
        </div>

        <div style={{ textAlign: "center" }}>
          <img 
            src={imageninteligencia} 
            className="estilo-imagen" 
            alt="Proyecto IA" 
          />
        </div>

        <a href="https://www.ibm.com/es-es/think/topics/history-of-artificial-intelligence" target="_blank" rel="noreferrer">
          <button className="boton">Historia de la IA</button>
        </a>
      </motion.div>

      {/* PROYECTO 2 - INSTALACION DOCKER */}
      <motion.div className="project-card" whileHover={{ scale: 1.05, backgroundColor: "#00f" }}>

        <div className="encabezado">
          <h2>Despliegue con Docker & Nginx</h2>
          <span>2026</span>
        </div>

        <div className="resumen-proyecto">
          <p>
            He empaquetado mi web dentro de <strong>Docker</strong> para garantizar su funcionamiento 
            en cualquier entorno sin errores de configuración.
          </p>
          <p>
            Utilicé <strong>Nginx</strong> como servidor de alto rendimiento para asegurar una 
            carga rápida y capacidad para soportar múltiples visitas simultáneas.
          </p>

          <ul className="puntosclave-proyecto">
            <li><strong>Infraestructura</strong>: Creación de imágenes con Dockerfile.</li>
            <li><strong>Automatización</strong>: Gestión con Docker Compose.</li>
            <li><strong>Cloud</strong>: Publicación en Docker Hub.</li>
          </ul>
        </div>

        <div style={{ textAlign: "center" }}>
          <img 
            src={imagenDocker} 
            className="estilo-imagen" 
            alt="Proyecto Docker" 
          />
        </div>

        <a href="https://soka.gitlab.io/blog/post/2019-07-08-docker-imagenes-y-contenedores/" target="_blank" rel="noreferrer">
          <button className="boton">Guía de Instalación Docker</button>
        </a>
      </motion.div>



      {/* PROYECTO 2 - INSTALACION DOCKER */}
      <motion.div className="project-card" whileHover={{ scale: 1.05, backgroundColor: "#00f" }}>
        <div className="encabezado">
          <h2>Despliegue con Docker & Nginx</h2>
          <span>2026</span>
        </div>

        <div className="resumen-proyecto">
          <p>
            He empaquetado mi web dentro de <strong>Docker</strong> para garantizar su funcionamiento 
            en cualquier entorno sin errores de configuración.
          </p>
          <p>
            Utilicé <strong>Nginx</strong> como servidor de alto rendimiento para asegurar una 
            carga rápida y capacidad para soportar múltiples visitas simultáneas.
          </p>

          <ul className="puntosclave-proyecto">
            <li><strong>Infraestructura</strong>: Creación de imágenes con Dockerfile.</li>
            <li><strong>Automatización</strong>: Gestión con Docker Compose.</li>
            <li><strong>Cloud</strong>: Publicación en Docker Hub.</li>
          </ul>
        </div>

        <div style={{ textAlign: "center" }}>
          <img 
            src={imagenDocker} 
            className="estilo-imagen" 
            alt="Proyecto Docker" 
          />
        </div>

        <a href="https://soka.gitlab.io/blog/post/2019-07-08-docker-imagenes-y-contenedores/" target="_blank" rel="noreferrer">
          <button className="boton">Guía de Instalación Docker</button>
        </a>
      </motion.div>

      {/* PROYECTO 2 - INSTALACION DOCKER */}
      <motion.div className="project-card" whileHover={{ scale: 1.05, backgroundColor: "#00f" }}>

        <div className="encabezado">
          <h2>Despliegue con Docker & Nginx</h2>
          <span>2026</span>
        </div>

        <div className="resumen-proyecto">
          <p>
            He empaquetado mi web dentro de <strong>Docker</strong> para garantizar su funcionamiento 
            en cualquier entorno sin errores de configuración.
          </p>
          <p>
            Utilicé <strong>Nginx</strong> como servidor de alto rendimiento para asegurar una 
            carga rápida y capacidad para soportar múltiples visitas simultáneas.
          </p>

          <ul className="puntosclave-proyecto">
            <li><strong>Infraestructura</strong>: Creación de imágenes con Dockerfile.</li>
            <li><strong>Automatización</strong>: Gestión con Docker Compose.</li>
            <li><strong>Cloud</strong>: Publicación en Docker Hub.</li>
          </ul>
        </div>

        <div style={{ textAlign: "center" }}>
          <img 
            src={imagenDocker} 
            className="estilo-imagen" 
            alt="Proyecto Docker" 
          />
        </div>

        <a href="https://soka.gitlab.io/blog/post/2019-07-08-docker-imagenes-y-contenedores/" target="_blank" rel="noreferrer">
          <button className="boton">Guía de Instalación Docker</button>
        </a>
      </motion.div>

    </div>

  );
}

export default Proyectos;
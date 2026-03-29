// Herramientas React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Estilos
import './index.css'
import App from './App.jsx'

// Renderizado
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

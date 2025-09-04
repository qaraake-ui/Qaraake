import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bg from './assets/3209.jpg'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

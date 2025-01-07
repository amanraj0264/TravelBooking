import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Calender } from './Calender'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calender></Calender>
  </StrictMode>,
)

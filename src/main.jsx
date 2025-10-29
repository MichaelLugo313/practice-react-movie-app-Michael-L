import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MovieSelector from './MovieSelector.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieSelector />
  </StrictMode>,
)

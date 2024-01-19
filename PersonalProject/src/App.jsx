import { useState } from 'react'
import './App.css'
import { Experience } from './components/Experience'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <Canvas>
      <Experience/>
    </Canvas>
  )
}

export default App
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useFrame } from 'react-three-fiber'

function Cube(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color="salmon" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <Cube size={[5]} />
      <ambientLight />
      <Cube position={[100.5, 1, 1]} />
      <Cube position={[-100.5, 1, 1]} />
    </Canvas>
  )
}
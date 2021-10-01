import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Cube(props) {
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.x += 0.01
  })
  return (
    <mesh ref={ref} {...props}>
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
      <pointLight position={[10, 10, 15]} />
      <Cube position={[100.5, -30, 1]} />
      <Cube position={[-100.5, 1, 1]} />
    </Canvas>
  )
}
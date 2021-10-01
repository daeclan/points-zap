import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="salmon" />
      </mesh>
    </Canvas>
  )
}
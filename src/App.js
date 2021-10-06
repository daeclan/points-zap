import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Spin({ children }) {
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.x += 0.01
  })
  return <group ref={ref}>{children}</group>
}

function Cube(props) {
  const [active, setActive] = useState(false)
  const [hovered, setHovered] = useState(false)
  return (
    <mesh
      {...props}
      scale={hovered ? 1.2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color={active ? "salmon" : "red"} />
    </mesh>
  )
}
function Plane(props) {
  return (
    <mesh>
      <planeGeometry args={[500, 500, 500]} />
      <meshStandardMaterial color={"black"} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 15]} />
      <Plane />
      <Spin>
        <Cube size={[5]} />
      </Spin>
      <Cube position={[10.5, -1, 1]} />
      <Cube position={[-10.5, 1, 1]} />
      <OrbitControls />
    </Canvas>
  )
}
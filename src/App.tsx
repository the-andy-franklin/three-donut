import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, Text3D } from '@react-three/drei';
import Skybox from './components/Skybox';
import './App.css'

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Center>
        <Text3D font={'/fonts/Roboto.typeface.json'}>
          Click-and-drag to rotate
        </Text3D>
      </Center>
    </Canvas>
  )
}

export default App

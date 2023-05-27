import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';

const Skybox = () => {
  const { scene, camera } = useThree();

  useEffect(() => {
    const loader = new CubeTextureLoader();
    const texture = loader.load([
      '/Starscape.png', '/Starscape.png',
      '/Starscape.png', '/Starscape.png',
      '/Starscape.png', '/Starscape.png'
    ]);

    scene.background = texture;
  }, [camera, scene]);

  return null; 
};

export default Skybox;

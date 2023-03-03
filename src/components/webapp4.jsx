import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../lib/SceneInit';

function WebApp4() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();


    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load('./assets/myscene4/scene.gltf', (gltfScene) => {
      gltfScene.scene.rotation.y = Math.PI / 8;
      gltfScene.scene.position.y = 3;
      gltfScene.scene.scale.set(10, 10, 10);
      test.scene.add(gltfScene.scene);
    });

    const animate = () => {
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className='canvas-master'>
      <canvas className='canvas' id="myThreeJsCanvas" />
    </div>
  );
}

export default WebApp4;

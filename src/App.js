import { Canvas } from '@react-three/fiber';
import React from 'react'
import { Suspense } from 'react';
import './App.css';
import Model from './Components/Model';

function App() {
  return (
    <>
    <Canvas id= "three-canvas-container" shadows>
      <Suspense fallback ={null}>
        <Model/>
      </Suspense>
    </Canvas>
    </>
  );
}

export default App;

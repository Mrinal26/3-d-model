import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { angletoRadians } from "../utils/angle";

function Model() {
  const orbitControlsRef = useRef(null)
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;

      orbitControlsRef.current.setAzimuthalAngle(-angletoRadians(x * 20));
      orbitControlsRef.current.setPolarAngle(
        (y + 0.75) * angletoRadians(90 - 30)
      );
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);

  requestAnimationFrame(() => {});
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angletoRadians(40)}
        maxPolarAngle={angletoRadians(80)}
      />
      {/*ball*/}
      <mesh position={[0, 0.5, 0]} castShadow>
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial color="#000000"  />
      </mesh>
      {/*floor*/}
      <mesh rotation={[-angletoRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial color="#7fffd4" />
      </mesh>
      
      <ambientLight args={["#ffffff", 0.25]} />

      <spotLight args={["#ffffff", 1,7, angletoRadians(45),0.4]} position={[-4,1,0]} castShadow />

      <Environment background>
        <mesh>
          <sphereGeometry args={[50,100,100]}/>
          <meshBasicMaterial color="#cc293" />
        </mesh>
      </Environment>
    </>
  );
}

export default Model;

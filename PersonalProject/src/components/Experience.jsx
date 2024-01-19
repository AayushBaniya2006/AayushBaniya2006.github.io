import { OrbitControls, ScrollControls } from '@react-three/drei';
import { Office } from './Office';


export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <pointLight intensity={200} position={3}></pointLight>
      <ScrollControls pages={3} damping={0.25}>
      <Office/>
      </ScrollControls>
    </>
  );
};
import { OrbitControls, ScrollControls } from '@react-three/drei';
import { Office } from './Office';
import { Overlay } from './Overlay';


export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={2}></ambientLight>
      <ScrollControls pages={3} damping={0.25}>
        <Overlay/>
      <Office/>
      </ScrollControls>
    </>
  );
};
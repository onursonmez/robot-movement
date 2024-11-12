import React from 'react';
import { RobotProvider } from './context/RobotContext';
import RobotDisplay from './components/RobotDisplay';
import ControlPanel from './components/ControlPanel';

const App = () => {
  return (
    <RobotProvider>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <RobotDisplay style={{ width: '300px', height: '300px', marginBottom: '40px' }} />
        <ControlPanel style={{ width: '300px' }} />
      </div>
    </RobotProvider>
  );
};

export default App;
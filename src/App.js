import React from 'react';
import DrumPad from './components/DrumPad';
import SoundContextProvider from './contexts/SoundContext';

function App() {
  return (
    <div className='container'>
      <SoundContextProvider>
        <DrumPad />
      </SoundContextProvider>
    </div>
  );
}

export default App;

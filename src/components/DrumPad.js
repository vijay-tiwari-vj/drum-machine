import React, { Component } from 'react';

import { SoundContext } from '../contexts/SoundContext';
import Box from './Box';

class DrumPad extends Component {
  static contextType = SoundContext;

  render() {
    const [beats] = this.context;

    return (
      <div id='drum-machine' className='drum-container'>
        <div id='display' className='display'><h2>beat</h2></div>
        {beats.map((beat, idx) => (
          <Box
            text={beat.keyTrigger}
            key={idx}
            audio={beat.mp3}
          />
        ))}
      </div>
    )
  }
}

export default DrumPad;

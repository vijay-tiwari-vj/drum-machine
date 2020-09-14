import React, { Component, createRef } from 'react';

export class Box extends Component {
  constructor() {
    super();
    this.audio = createRef();
  }

  playSound = () => {
    this.audio.current.currentTime = 0;
    this.audio.current.play();
    setTimeout(100);

    const id = this.audio.current.id;

    const parent = this.audio.current.parentNode;
    const display = parent.parentNode;
    display.querySelector('h2').innerText = id;
  }

  render() {
    const { text, audio } = this.props;

    document.addEventListener('keydown', (e) => {
      const id = e.key.toUpperCase();
      const audio = document.getElementById(id);
      if (audio) {
        const parent = audio.parentNode;
        parent.classList.add('active');

        audio.currentTime = 0;
        audio.play();

        audio.addEventListener('ended', () => {
          parent.classList.remove('active');
        })

        const display = parent.parentNode;
        display.querySelector('h2').innerText = id;
      }
    });

    return (
      <div id={`drum-${text}`} className='drum-pad' onClick={this.playSound} >
        <audio ref={this.audio} id={text} src={audio} className='clip' />
        { text}
      </div>
    )
  }
}

export default Box;

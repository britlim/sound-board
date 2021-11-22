import React  from 'react';

export default function Board() {
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.volume = 0.1;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach(key =>
    key.addEventListener('transitionend', removeTransition)
  );

  window.addEventListener('keydown', playSound);
  return(
    <div className="keys">
      <section className="left">
        <button className="key">Q</button>
        <button className="key">W</button>
        <button className="key">E</button>
        <button className="key">R</button>
        <button className="key">A</button>
        <button className="key">S</button>
        <button className="key">D</button>
        <button className="key">F</button>
        </section>
        <section className="right">
        <button className="key">U</button>
        <button className="key">I</button>
        <button className="key">O</button>
        <button className="key">P</button>
        <button className="key">H</button>
        <button className="key">J</button>
        <button className="key">K</button>
        <button className="key">L</button>
        </section>
    </div>
  )
}
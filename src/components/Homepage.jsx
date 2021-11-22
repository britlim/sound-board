import React  from 'react';
import Board from './Board.jsx'

import {BrowserRouter, Routes, Route } from "react-router-dom";


export default function Homepage() {
  return (
    <div>
    <div>
      <h1>SOUND BORED BY DAE</h1>
      </div>
      <div className ="board">
        <Board />
      </div>
    </div>
    );
}

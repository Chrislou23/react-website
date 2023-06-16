import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Description from './containers/Description/description';
import Sketch from './containers/Sketch/sketch';
import Flow from './containers/Flow/flow';
import Logbook from './containers/Logbook/logbook'
import Error from './containers/Error/error'

import './App.css';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Description />} />
          <Route path="/flow" element={<Flow />} />
          <Route path="/sketch" element={<Sketch />} />
          <Route path="/logbook" element={<Logbook />} />
          <Route path="*" element={<Error />} />
       </Routes>
    </>
  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { usePosition } from './usePosition'

const App: React.FC = () => {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  // @ts-ignore
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(true);

  return (
      <code>
        latitude: { latitude }<br/>
        longitude: { longitude }<br/>
        timestamp: { timestamp }<br/>
        accuracy: { accuracy && `${ accuracy }m` }<br/>
        error: { error ? error : `👏 No error!` }
      </code>
  );
};

export default App;

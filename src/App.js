import React from 'react';
import './App.css';
import './index.css'
import './reset.css';
import background from './images/background.jpg';
import tooth from './images/logo.png'

function App() {
  return (
    <div className="App">
      <img src={background} className="background-image" alt="whatevs" />
      <div className="header">
      <img src={tooth} className="logo-image" alt="whatevs"/>

      </div>
      <div className="footer">
        <div>
          New website coming soon
        </div>
        <div>
          Now accepting new patients.
        </div>
        <div>
          Please call: <a href= "tel:207-667-3009">(207) 667-3009</a> to make an appointment.
        </div>
      </div>
    </div>
  );
}

export default App;

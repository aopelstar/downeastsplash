import React from 'react';
import './App.css';
import './reset.css';
import background from './images/background.jpg';
import tooth from './images/tooth.png'

function App() {
  return (
    <div className="App">
      <div className="background-image">

        <img src={background} className="background-photo" alt="background" />
        <div className="header">
          <div className="header-text">
            DownEast Dental
        </div>
      </div>
        </div>
        <div className="tooth-image">
          <img src={tooth} className="tooth-photo" alt="tooth"></img>
        </div>



      <div className="footer">
        <div className="footer-text-one">
          Let Me Stick 

          </div>
          <div className="footer-text-two">
          My Drill In Your Mouth
          </div>
      </div>
    </div>
  );
}

export default App;

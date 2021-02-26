import './App.css';
import { useState } from 'react';

function App() {

  const [currentActive, setCurrentActive] = useState(1);
  const [progressWidth, setProgressWidth] = useState(0);

  
  const progressStyle = {
    backgroundColor: '#3498db',
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    height: '4px',
    width: progressWidth,
    zIndex: '-1', 
    /* makes sure it's behind the numbers */
    transition: '.4s ease'
  }

  const incrementCurrentActive = () => {
    let newActive = currentActive
    if (newActive < 4) {
      newActive++;
      setCurrentActive(newActive);
      let width = (newActive - 1) / 3 * 100
      setProgressWidth(width + '%')
    }
  };

  const decrementCurrentActive = () => {
    let newActive = currentActive
    if (newActive > 1) {
      newActive--;
      setCurrentActive(newActive);
      let width = (newActive - 1) / 3 * 100
      setProgressWidth(width + '%')
    }
  };
  

  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" id="idprogress" style={progressStyle} ></div>
        <div className="circle active">1</div>
        <div className={currentActive >= 2 ? "circle active" : "circle"}>2</div>
        <div className={currentActive >= 3 ? "circle active" : "circle"}>3</div>
        <div className={currentActive >= 4 ? "circle active" : "circle"}>4</div>
      </div>
      <button className="btn" id="prev" onClick={decrementCurrentActive} disabled={currentActive === 1}>Prev</button>
      <button className="btn" id="next" onClick={incrementCurrentActive} disabled={currentActive === 4}>Next</button>
    </div>
  );
}

export default App;

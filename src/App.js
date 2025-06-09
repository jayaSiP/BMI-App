import React, { useState, useMemo } from 'react';
import './App.css'

const App = () => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }
  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1)

  }, [weight, height])
  return (
    <main>
      <h2> BMI CALCULATOR</h2>
      <div className='input-section'>
        <p className='slider-output'>Weight:{weight} Kg</p>
        <input
          className='input-slider'
          type='range'
          step='1'
          min='40'
          max='200'
          value={weight}
          onChange={onWeightChange}
        />

        <p className='slider-output'>Height:{height} cm</p>
        <input
          className='input-slider'
          type='range'
          step='1'
          min='140'
          max='250'
          value={height}
          onChange={onHeightChange}
        />
      </div>

      <div className='output-section'>
        <p>Your BMI is</p>
        <p className='output'>{output}</p>
      </div>
    </main>
  );
};

export default App;

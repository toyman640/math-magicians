import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const info = () => ({ total: null, next: null, operation: null });

function Calculator() {
  const [calculatorState, setCalculatorState] = useState(() => info());
  const handleLogic = (buttonValue) => {
    const newState = calculate(calculatorState, buttonValue);
    setCalculatorState(newState);
  };
  return (
    <div className="Container">
      <Screen result={calculatorState.next || calculatorState.total || '0'} />
      <div className="Row">
        <button onClick={() => handleLogic('AC')} className="Other" type="button">AC</button>
        <button onClick={() => handleLogic('+/-')} className="Other" type="button">+/-</button>
        <button onClick={() => handleLogic('%')} className="Other" type="button">%</button>
        <button onClick={() => handleLogic('÷')} type="button" className="Operator">÷</button>
      </div>
      <div className="Row">
        <button onClick={() => handleLogic('7')} className="Other" type="button">7</button>
        <button onClick={() => handleLogic('8')} className="Other" type="button">8</button>
        <button onClick={() => handleLogic('9')} className="Other" type="button">9</button>
        <button onClick={() => handleLogic('x')} type="button" className="Operator">x</button>
      </div>
      <div className="Row">
        <button onClick={() => handleLogic('4')} className="Other" type="button">4</button>
        <button onClick={() => handleLogic('5')} className="Other" type="button">5</button>
        <button onClick={() => handleLogic('6')} className="Other" type="button">6</button>
        <button onClick={() => handleLogic('-')} type="button" className="Operator">-</button>
      </div>
      <div className="Row">
        <button onClick={() => handleLogic('1')} className="Other" type="button">1</button>
        <button onClick={() => handleLogic('2')} className="Other" type="button">2</button>
        <button onClick={() => handleLogic('3')} className="Other" type="button">3</button>
        <button onClick={() => handleLogic('+')} type="button" className="Operator">+</button>
      </div>
      <div className="Row">
        <button onClick={() => handleLogic('0')} className="Zero" type="button">0</button>
        <button onClick={() => handleLogic('.')} className="Other" type="button">.</button>
        <button onClick={() => handleLogic('=')} className="Operator" type="button">=</button>
      </div>
    </div>
  );
}

function Screen({ result }) {
  return (
    <div className="Screen">
      <span className="Digit">{result}</span>
    </div>
  );
}

Screen.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Calculator;

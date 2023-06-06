function Calculator() {
  return (
    <div className="Container">
      <Screen />
      <div className="Row">
        <button className="Other" type="button">AC</button>
        <button className="Other" type="button">+/-</button>
        <button className="Other" type="button">%</button>
        <button type="button" className="Operator">&#247;</button>
      </div>
      <div className="Row">
        <button className="Other" type="button">7</button>
        <button className="Other" type="button">8</button>
        <button className="Other" type="button">9</button>
        <button type="button" className="Operator">x</button>
      </div>
      <div className="Row">
        <button className="Other" type="button">4</button>
        <button className="Other" type="button">5</button>
        <button className="Other" type="button">6</button>
        <button type="button" className="Operator">-</button>
      </div>
      <div className="Row">
        <button className="Other" type="button">1</button>
        <button className="Other" type="button">2</button>
        <button className="Other" type="button">3</button>
        <button type="button" className="Operator">+</button>
      </div>
      <div className="Row">
        <button className="Zero" type="button">0</button>
        <button className="Other" type="button">.</button>
        <button className="Operator" type="button">=</button>
      </div>
    </div>
  );
}

function Screen() {
  return (
    <div className="Screen">
      <span className="Digit">0</span>
    </div>
  );
}

export default Calculator;

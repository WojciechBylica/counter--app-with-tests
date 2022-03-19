import { useState } from 'react';
import PropTypes from 'prop-types';
import counter from './counter.css';

const Counter = ({ start }) => {
  const [result, setResult] = useState(start);
  const [newInitialNumber, setNewInitialNumber] = useState('');

  const handleAddition = () => setResult(result + 1);

  const handleSubtraction = () => setResult(result - 1);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setResult(newInitialNumber);
  };

  const handleReset = () => {
    setResult(start);
    setNewInitialNumber('');
  };

  return (
    <div className="counter">
      <div>
        <button
          className="counter__button counter__button--big"
          data-test="additionButton"
          onClick={handleAddition}
        >
          +
        </button>
        <p data-test="result" className="counter__paragraph">
          {result}
        </p>
        <button
          className="counter__button counter__button--big"
          data-test="subtractionButton"
          onClick={handleSubtraction}
        >
          -
        </button>
      </div>

      <form data-test="form" className="counter__form" onSubmit={onFormSubmit}>
        <input
          className="counter__input"
          data-test="input"
          type="number"
          value={newInitialNumber}
          onChange={({ target }) => setNewInitialNumber(+target.value)}
          required
          placeholder="nowa wartość początkowa"
        />
        <div>
          <button className="counter__button">Zmień</button>
          <button
            type="reset"
            className="counter__button"
            data-test="resetButton"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Counter;

Counter.defaultProps = {
  start: 0,
};

Counter.propTypes = {
  start: PropTypes.number,
};

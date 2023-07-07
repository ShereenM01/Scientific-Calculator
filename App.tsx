import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './App.css';

const ScientificCalculator: React.FC = () => {

  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value: string) => {
    setDisplayValue(prevDisplayValue => prevDisplayValue + value);
  };

  const handleCalculate = () => {
    try {
      const result = evaluateDisplayValue(displayValue); 
      setDisplayValue(String(result));
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  
  const evaluateDisplayValue = (displayValue: string): number => {
    const calculate = (value: string): number => {
      const multiplyDivideRegex = /(\d+\.?\d*)\s*([*/])\s*(\d+\.?\d*)/g;
      const addSubtractRegex = /(\d+\.?\d*)\s*([+-])\s*(\d+\.?\d*)/g;

      // Evaluate multiplication and division
      while (multiplyDivideRegex.test(value)) {
        value = value.replace(multiplyDivideRegex, (_match, num1, operator, num2) => {
          const result = operator === '*' ? parseFloat(num1) * parseFloat(num2) : parseFloat(num1) / parseFloat(num2);
          return String(result);
        });
      }

  // Evaluate addition and subtraction
  while (addSubtractRegex.test(value)) {
    value = value.replace(addSubtractRegex, (_match, num1, operator, num2) => {
      const result = operator === '+' ? parseFloat(num1) + parseFloat(num2) : parseFloat(num1) - parseFloat(num2);
      return String(result);
    });
  }

  return parseFloat(value);
};

// Evaluate the expression using the BODMAS rule
const parenthesesRegex = /(\([^()]+\))/g;

// Evaluate parentheses first
while (parenthesesRegex.test(displayValue)) {
  displayValue = displayValue.replace(parenthesesRegex, (_match, innerDisplayValue) => {
    const evaluatedInnerDisplayValue = calculate(innerDisplayValue.slice(1, -1));
    return String(evaluatedInnerDisplayValue);
  });
}

// Evaluate the final expression
return calculate(displayValue);
};

  const handleClear = () => {
    setDisplayValue('');
  };

  const handleOpenBracket = () => {
    setDisplayValue(prevDisplayValue => prevDisplayValue + '(');
  };

  const handleCloseBracket = () => {
    setDisplayValue(prevDisplayValue => prevDisplayValue + ')');
  };

  if (displayValue === 'handleOpenBracket' && 'handleCloseBracket') {
    if (displayValue.length > 0 && !isNaN(Number(displayValue.charAt(displayValue.length - 1)))) {
      setDisplayValue(prevDisplayValue => prevDisplayValue += '*');
    }
  };
  
  const handleSquareRoot = () => {
    const number = parseFloat(displayValue);

    if (!isNaN(number)) {
      const squareRoot = Math.sqrt(number);
      setDisplayValue(prevDisplayValue => `${squareRoot}`);
    } else {
      setDisplayValue(prevDisplayValue => `Invalid input`);
    }
  };

  const handlePower = () => {
    const number = parseFloat(displayValue);
  
    if (!isNaN(number)) {
      const powerOff = Math.pow(number,2); 
      setDisplayValue(prevDisplayValue => `${powerOff}`);
    } else {
      setDisplayValue(prevDisplayValue => `Invalid input`);
    }
  };

  const handleSine = () => {
    const number = parseFloat(displayValue);
  
    if (!isNaN(number)) {
      const sin = Math.sin(number);
      setDisplayValue(prevDisplayValue => `${sin}`);
    } else {
      setDisplayValue(prevDisplayValue => `Invalid input`);
    }
  };

  const handleCosine = () => {
    const number = parseFloat(displayValue);
  
    if (!isNaN(number)) {
      const cos = Math.cos(number);
      setDisplayValue(prevDisplayValue => `${cos}`);
    } else {
      setDisplayValue(prevDisplayValue => `Invalid input`);
    }
  };

  const handleTangent = () => {
    const number = parseFloat(displayValue);
  
    if (!isNaN(number)) {
      const tan = Math.tan(number);
      setDisplayValue(prevDisplayValue => `${tan}`);
    } else {
      setDisplayValue(prevDisplayValue => `Invalid input`);
    }
  };

  return (
    <main className="calculator">
      <input type="text" className= "display" value={displayValue} readOnly />
    <section className="buttons">

      <button onClick={handleClear} className="clear-button">C</button>
      <button onClick={handleSine}>sin</button>
      <button onClick={handleCosine}>cos</button>
      <button onClick={handleTangent}>tan</button>

      <button onClick={handleOpenBracket}>(</button>
      <button onClick={handleCloseBracket}>)</button>
      <button onClick={handleSquareRoot}>&radic;</button>
      <button onClick={handlePower}>x<sup>y</sup></button>

      <button onClick={() => handleButtonClick('7')}>7</button>
      <button onClick={() => handleButtonClick('8')}>8</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      <button onClick={() => handleButtonClick('/')}>&divide;</button>

      <button onClick={() => handleButtonClick('4')}>4</button>
      <button onClick={() => handleButtonClick('5')}>5</button>
      <button onClick={() => handleButtonClick('6')}>6</button>
      <button onClick={() => handleButtonClick('*')}>&times;</button>

      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('2')}>2</button>
      <button onClick={() => handleButtonClick('3')}>3</button>
      <button onClick={() => handleButtonClick('-')}>-</button>

      <button onClick={handleCalculate} id="equal">=</button>
      <button onClick={() => handleButtonClick('0')}>0</button>
      <button onClick={() => handleButtonClick('+')}>+</button>
     
    </section>
    </main>
  );
};

export default ScientificCalculator;



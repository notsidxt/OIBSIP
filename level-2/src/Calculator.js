import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'Clear') {
      setInput('');
      setResult('');
    } else if (value === 'Delete') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleSpecialButtonClick = (specialValue) => {
    switch (specialValue) {
      case '+/-':
        setInput((prevInput) => (prevInput.startsWith('-') ? prevInput.slice(1) : '-' + prevInput));
        break;
      case '%':
        setInput((prevInput) => (parseFloat(prevInput) / 100).toString());
        break;
      case 'sqrt':
        setInput((prevInput) => Math.sqrt(parseFloat(prevInput)).toString());
        break;
      case '(':
      case ')':
        setInput((prevInput) => prevInput + specialValue);
        break;
      default:
        break;
    }
  };

  const buttonLayout = [
    ['7', '8', '9', '(', ')'],
    ['4', '5', '6', '*', '/'],
    ['1', '2', '3', '+', '-'],
    ['0', '.', '+/-', '%', 'Delete'],
    ['Clear', '='],
  ];

  return (
    <div className="font-mono flex items-center justify-center h-screen bg-blue-500 text-white">
      <div className="bg-blue-400 border-2 border-black shadow-2xl drop-shadow-2xl p-4 rounded-xl shadow-lg w-4/12">
        <h2 className="text-2xl text-black font-bold mb-4 text-center">Calculator</h2>
        <div className="mb-4">
          <input
            className="border-black border-2 text-black w-full p-2 rounded-2xl border-gray-300 outline-none bg-blue-300 h-16 text-2xl font-bold mb-4"
            type="text"
            value={input}
            readOnly
          />
        </div>
        <div className="mb-4">
          <h3 className="font-bold bg-white text-black p-4 text-lg border-2 border-black rounded-2xl h-16">Result: {result}</h3>
        </div>
        {buttonLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 gap-2 mb-2">
            {row.map((value) => (
              <button
                key={value}
                className={`w-full p-2 bg-black text-white rounded-xl active:bg-white active:text-black hover:bg-gray-700 transition-all duration-300 ease-in-out h-16 text-xl ${
                  (value === 'Clear' || value === '=') && 'col-span-2 w-full ml-12'
                }`}
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

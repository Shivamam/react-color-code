import React from 'react';
import './style.css';

const Main = () => {
  const onColorClick = (colorCode) => {
    const actualCode = colorCode.substring(1);
    window.open(`/display/?code=${actualCode}`, '_blank');
  };

  const colors = [
    '#3246a8',
    '#65a832',
    '#2dc5f4',
    '#fcee21',
    '#f16164',
    '#70327e',
    '#a42963',
    '#0b6a88',
    '#f89e4f',
    '#a432a8',
  ];
  return (
    <div className='App' style={{ backgroundColor: '#1d1b36' }}>
      <h1>React Colors</h1>
      <div className='container'>
        {colors.map((color, index) => (
          <div key={index} className='card' onClick={() => onColorClick(color)}>
            <div
              style={{
                background: color,
                filter: 'brightness(85%)',
              }}
              className='box'
            />
            <button onClick={() => navigator.clipboard.writeText(color)}>
              {color}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;

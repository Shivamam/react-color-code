import React from 'react';
import './style.css';
const Display = () => {
  const params = new URLSearchParams(window.location.search);
  const colorCode = `#${params.get('code')}`;

  return (
    <div
      style={{
        background: colorCode,
        filter: 'brightness(85%)',
      }}
      className='new-container'
      onClick={() => navigator.clipboard.writeText(colorCode)}
    >
      <h2>
        The Hex code for this color is {colorCode}. Click anywhere on the screen
        to copy the code!!
      </h2>
    </div>
  );
};

export default Display;

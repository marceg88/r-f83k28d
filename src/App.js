import React, { Component, useState } from 'react';

import './App.css';

function App () {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  }
  
    return (
      <div>
        <span className="value">{count}</span>
        <button id="inc" onClick={increment}>Incrementa</button>
      </div>
    );
}

export default App;

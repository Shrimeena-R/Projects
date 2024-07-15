import React from 'react';
import WithoutFibers from './WithoutFibers';
import WithFibers from './WithFibers';

function App() {
  return (
    <div className="App">
      <WithoutFibers />
      <WithFibers />
    </div>
  );
}

export default App;

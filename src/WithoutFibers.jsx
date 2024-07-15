import React, { useEffect, useState } from 'react';

function IncrementalList() {
  const [items, setItems] = useState([]);

  const handleLoad = () => {
    const newItems = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Incremental Rendering Example</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>Item {item}</li>
        ))}
      </ul>
      <button onClick={handleLoad}>Non Incremental Loading</button>
    </div>
  );
}

export default IncrementalList;

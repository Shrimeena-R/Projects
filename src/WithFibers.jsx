import React, { useState, startTransition } from 'react';

function WithFibers() {
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = () => {
    const newItems = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
    setItems(newItems);
    setVisibleItems([]);
    setIsLoading(true);

    let currentIndex = 0;
    const chunkSize = 100;

    const loadMoreItems = () => {
      startTransition(() => {
        const nextItems = newItems.slice(currentIndex, currentIndex + chunkSize);
        setVisibleItems((prev) => [...prev, ...nextItems]);
        currentIndex += chunkSize;

        if (currentIndex < newItems.length) {
          requestIdleCallback(loadMoreItems);
        } else {
          setIsLoading(false);
        }
      });
    };

    loadMoreItems();
  };

  return (
    <div>
      <br />
      <button onClick={handleLoad} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Load Items Incrementally'}
      </button>
      <div>
        {visibleItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default WithFibers;

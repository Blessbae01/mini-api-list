// ListComponent.js
import React from 'react';

function ListComponent({ items, renderItem }) {
  if (!items.length) {
    return <p>No items to show.</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default ListComponent;

import React from 'react';
import Card from './Card';

const CardsList = ({ extensions, onRemove, filter }) => {
  const filtered = extensions.filter((ext) => {
    if (filter === 'active') return ext.isActive;
    if (filter === 'inactive') return !ext.isActive;
    return true;
  });

  return (
    <div id="cards">
      {filtered.map((ext) => (
        <Card key={ext.name} extension={ext} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default CardsList;
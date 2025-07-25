import React from 'react';

const Card = ({ extension, onRemove }) => {
  return (
    <div className={`card-single ${extension.hidden ? 'desativada' : ''}`}>
      <div className="card-header">
        <img src={extension.logo} alt={extension.name} />
        <div className="info-header">
          <h3>{extension.name}</h3>
          <p>{extension.description}</p>
        </div>
      </div>
      <div className="status">
        <button className="btn-remove" onClick={() => onRemove(extension.name)}>
          Remove
        </button>
        <input
          type="checkbox"
          className="toggle"
          checked={extension.isActive}
          onChange={() => extension.toggle(extension.name)}
        />
      </div>
    </div>
  );
};

export default Card;

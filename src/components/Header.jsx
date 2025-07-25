import React from 'react';

const Header = ({ toggleTheme, isDark }) => {
  return (
    <header>
      <div id="logo">
        <img src="/assets/images/logo.svg" alt="Logo" />
        <h2>Extensions</h2>
      </div>
      <button id="toggleTheme" onClick={toggleTheme}>
        <img
          id="img-toggle"
          src={`/assets/images/${isDark ? 'icon-sun' : 'icon-moon'}.svg`}
          alt="Toggle theme"
        />
      </button>
    </header>
  );
};

export default Header;

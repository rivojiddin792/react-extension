import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CardsList from './components/CardsList';
import './main.css';

function App() {
  const [extensions, setExtensions] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((ext) => ({
          ...ext,
          hidden: false,
          toggle: handleToggle
        }));
        setExtensions(formatted);
      });
  }, []);

  const handleRemove = (name) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));
  };

  const handleToggle = (name) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.body.classList.toggle('darkmode-bg');
  };

  return (
    <div className="container">
      <Header toggleTheme={toggleTheme} isDark={isDark} />

      <main>
        <section id="options">
          <h1>Manage Extensions</h1>
          <div id="filter">
            <button className={`btn ${filter === 'all' ? 'auto' : ''}`} onClick={() => setFilter('all')}>
              All
            </button>
            <button className={`btn ${filter === 'active' ? 'auto' : ''}`} onClick={() => setFilter('active')}>
              Active
            </button>
            <button className={`btn ${filter === 'inactive' ? 'auto' : ''}`} onClick={() => setFilter('inactive')}>
              Inactive
            </button>
          </div>
        </section>

        <CardsList extensions={extensions} onRemove={handleRemove} filter={filter} />
      </main>
    </div>
  );
}

export default App;
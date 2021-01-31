import React, { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import items from './data';

const allcategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allcategories);

  const filteredItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filteredItems={filteredItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 2, description: "charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleClearList() {
    const confirmed = window.confirm(
      "are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  function handleAdditems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAdditems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItemCheck={handleChecked}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

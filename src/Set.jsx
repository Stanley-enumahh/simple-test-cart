import { useState } from "react";
import { data } from "./components/data";

export default function Set() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  function AddToCart(product) {
    setCart([...cart, { ...product, quantity: product.quantity + 1 }]);
  }

  function Increase(id) {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }
  return (
    <div className=" w-[500px] flex gap-7 flex-col">
      {products.map((item) => (
        <List
          item={item}
          key={item.id}
          Increase={Increase}
          AddToCart={AddToCart}
        />
      ))}
    </div>
  );
}

function List({ item, Increase, AddToCart }) {
  return (
    <li className="flex flex-row justify-between">
      <p>{item.name}</p>
      <p>{item.quantity}</p>
      <button onClick={() => Increase(item.id)}>+</button>
      <button onClick={() => AddToCart(item)}>Add</button>
    </li>
  );
}

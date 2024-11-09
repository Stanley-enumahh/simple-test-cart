import { data, datacart } from "./components/data";
import cartIcon from "./assets/images/icon-add-to-cart.svg";
import removeIcon from "./assets/images/icon-remove-item.svg";
import carbonIcon from "./assets/images/icon-carbon-neutral.svg";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  function AddnewItem(item) {
    setCartItems((items) => [...items, item]);
    console.log(cartItems);
  }
  return (
    <div className="w-full p-[30px] h-fit flex justify-center bg-[#fcf9f7]">
      <div className="w-[50%] gap-6 justify-center items-center flex flex-col  h-full">
        <Header />
        <Shop onAddnewItem={AddnewItem} />
      </div>
      <div className="w-[300px] h-[400px] bg-white shadow-md rounded-lg p-4">
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="w-full">
      <h1 className="ml-[35px] text-xl font-bold">Desserts</h1>
    </div>
  );
}

function Shop({ onAddnewItem }) {
  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-6">
      {data.map((item) => (
        <Product item={item} key={item.id} onAddnewItem={onAddnewItem} />
      ))}
    </div>
  );
}

function Product({ item, onAddnewItem }) {
  const [quantity, setQuantiy] = useState(0);
  function handleIncrement(id) {
    const newItem = { name, quantity, id };
    onAddnewItem(newItem);

    setQuantiy(quantity + 1);
  }
  function handleDecrement(id) {
    if (quantity > 0) setQuantiy(quantity - 1);
  }

  return (
    <div className="h-[300px] relative gap-12 flex flex-col w-[180px] rounded">
      <img
        src={item.image.desktop}
        className={`w-full ${
          quantity > 0 ? "border-2" : "border-none"
        } select-none object-cover h-[60%] rounded border-[#c73a0f]`}
        alt={item.name}
      />
      <div className="flex justify-center items-center  absolute top-[54%] left-[20%]">
        {quantity === 0 ? (
          <button
            onClick={() => handleIncrement(item.id)}
            className="flex flex-row items-center text-xs px-4 py-2 rounded-2xl border border-[#c73a0f] gap-1 bg-white font-semibold select-none"
          >
            <img src={cartIcon} width={15} /> Add to Cart
          </button>
        ) : (
          <div className="bg-[#c73a0f] gap-6 items-center text-xs px-4 py-1 rounded-2xl  flex flex-row justify-between text-white">
            <button
              onClick={() => handleDecrement(item.id)}
              className="select-none text-lg"
            >
              -
            </button>
            <p className="select-none">{quantity}</p>
            <button
              onClick={() => handleIncrement(item.id)}
              className="select-none text-lg"
            >
              +
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 select-none">
        <p className="text-xs text-gray-700">{item.category}</p>
        <p className="text-xs font-bold"> {item.name} </p>
        <p className="text-xs text-[#c73a0f] font-bold">${item.price}</p>
      </div>
    </div>
  );
}

function Cart({ cartItems }) {
  return (
    <div className="select-none flex flex-col gap-4">
      <h1 className="font-bold text-[#c73a0f]">Your cart (X)</h1>
      <CartItem cartItems={cartItems} />
      <Stats />
    </div>
  );
}

function CartItem({ item, cartItems }) {
  return (
    <div className="flex flex-col gap-2">
      {cartItems.map((item) => {
        return (
          <div
            key={item.id}
            className="text-xs flex flex-row justify-between py-3 items-center border-b"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold">{item.name}</p>
              <ul className="flex flex-row gap-1 items-center">
                <li className="text-[#c73a0f] font-bold">1x</li>
                <li className="ml-2 text-gray-600 font-semibold">
                  ${item.price}
                </li>
                <li className="text-gray-600 font-semibold">${item.price}</li>
              </ul>
            </div>
            <span className="rounded-full border w-fit h-fit">
              <img src={removeIcon} />
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Stats() {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-between">
        <p className="text-xs">total order</p>
        <p className="text-xl font-bold">$49.90</p>
      </div>
      <div className="flex flex-row gap-2 w-full justify-center items-center bg-[#ccc] py-3 rounded-lg my-3">
        <img src={carbonIcon} width={15} />
        <p className="text-xs">This a carbon-neutral delivery</p>
      </div>
      <button className="bg-[#c73a0f] text-white text-sm rounded-2xl py-2">
        Confirm order
      </button>
    </div>
  );
}

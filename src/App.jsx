import { data } from "./components/data";
import { useState } from "react";
import { GiCakeSlice } from "react-icons/gi";
import ConfirmOrder from "./components/confirmOrder";
import Header from "./components/header";
import Product from "./components/products";
import CartItem from "./components/cartItem";
import Stats from "./components/stats";

export default function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const cartCount = cart.length;
  const [showConfirmOrder, setShowConfirmOrder] = useState(false);
  console.log(showConfirmOrder);

  function handleConfirmOrder() {
    setShowConfirmOrder(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleNewOrder() {
    setShowConfirmOrder(false);
    setCart([]);
    setProducts(products.map((product) => ({ ...product, quantity: 0 })));
  }
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleAddToCart(item) {
    const existingItem = cart.find((item) => item.id === item.id);
    // if (existingItem) return;

    setCart([...cart, { ...item, quantity: (item.quantity = 1) }]);
  }

  function handleDelete(id) {
    setCart(cart.filter((item) => item.id !== id));
    setProducts(
      products.map((item) => (item.id === id ? { ...item, quantity: 0 } : item))
    );
  }

  function handleIncrement(id) {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function handleDecrement(id) {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
    setCart(
      cart
        .map((item) =>
          item.id === id && item.quantity >= 1
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className="w-full p-[30px] h-fit relative md:flex-row flex-col flex justify-center bg-[#fcf9f7]">
      <div className="w-full md:w-[50%] gap-6 justify-center items-center flex flex-col  h-full">
        {showConfirmOrder && (
          <ConfirmOrder
            cart={cart}
            handleNewOrder={handleNewOrder}
            totalPrice={totalPrice}
          />
        )}
        <Header />

        <Shop
          products={products}
          handleAddToCart={handleAddToCart}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>

      <div
        className={`w-full md:mt-0 mt-7 md:w-[300px] ${
          cartCount > 0 ? "h-fit" : "md:h-fit h-[300px]"
        } bg-white shadow-md rounded-lg p-4`}
      >
        <Cart
          cart={cart}
          cartCount={cartCount}
          totalPrice={totalPrice}
          handleDelete={handleDelete}
          handleConfirmOrder={handleConfirmOrder}
        />
      </div>
    </div>
  );
}

export function OrderList({ cart }) {
  return (
    <ul className="h-[65%] md:h-[200px]  overflow-y-scroll">
      {cart.map((item) => (
        <Order item={item} key={item.id} />
      ))}
    </ul>
  );
}

function Order({ item }) {
  return (
    <li className="items-center flex h-[60px] overflow-hidden flex-row justify-between w-full bg-red-600 bg-opacity-10 p-4">
      <div className="flex flex-row gap-2 ju">
        <img
          src={item.image.thumbnail}
          className="h-[40px] w-[40px] rounded-md object-cover"
          alt={item.name}
        />
        <div className="flex text-xs flex-col justify-between">
          <p>{item.name}</p>
          <span className="flex flex-row gap-2">
            <p className="text-red-600">{item.quantity}x</p>
            <p className="text-slate-500">@${item.price}</p>
          </span>
        </div>
      </div>

      <p className="font-semibold">${item.quantity * item.price}</p>
    </li>
  );
}

function EmptyCart() {
  return (
    <div className="w-full p-4 h-[220px] flex flex-col justify-center items-center text-gray-600 gap-4">
      <GiCakeSlice size={50} />
      <p className="text-sm md:text-xs">Your added items will aplly here</p>
    </div>
  );
}

function Shop({ products, handleAddToCart, handleIncrement, handleDecrement }) {
  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-x-4 gap-y-6">
      {products.map((item) => (
        <Product
          item={item}
          key={item.id}
          handleAddToCart={handleAddToCart}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      ))}
    </div>
  );
}

function Cart({
  cart,
  quantity,
  cartCount,
  totalPrice,
  handleDelete,
  handleConfirmOrder,
}) {
  return (
    <div className="select-none flex flex-col gap-4">
      <h1 className="font-bold text-[#c73a0f] md:text-lg text-xl">
        Your cart ({cartCount})
      </h1>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartItem
            cart={cart}
            quantity={quantity}
            cartCount={cartCount}
            handleDelete={handleDelete}
          />
          <Stats
            totalPrice={totalPrice}
            handleConfirmOrder={handleConfirmOrder}
          />
        </>
      )}
    </div>
  );
}

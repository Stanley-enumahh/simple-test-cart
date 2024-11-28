import cartIcon from "../assets/images/icon-add-to-cart.svg";
import { CiCircleMinus } from "react-icons/ci";

import { CiCirclePlus } from "react-icons/ci";
export default function Product({
  item,
  handleAddToCart,
  handleIncrement,
  handleDecrement,
}) {
  return (
    <div className="md:h-[300px] h-[350px] relative gap-8 md:gap-12 flex flex-col w-full md:w-[180px] rounded-lg md:rounded">
      <img
        src={item.image.desktop}
        className={`w-full ${
          item.quantity > 0 ? "border-2" : "border-none"
        } select-none object-cover h-[60%]  rounded-lg md:rounded border-[#c73a0f]`}
        alt={item.name}
      />
      <div className="flex justify-center items-center absolute top-[54%] left-[28%] md:left-[20%]">
        {item.quantity === 0 ? (
          <button
            onClick={() => handleAddToCart(item)}
            className="flex flex-row items-center text-xs px-8 md:px-4 py-3 md:py-2 rounded-3xl md:rounded-2xl border border-[#c73a0f] gap-1 bg-white font-semibold select-none"
          >
            <img src={cartIcon} width={15} /> Add to Cart
          </button>
        ) : (
          <div className="bg-[#c73a0f] gap-6 items-center text-xs px-8 md:px-4 py-2 rounded-3xl md:rounded-2xl flex flex-row justify-between text-white">
            <button
              onClick={() => handleDecrement(item.id)}
              className="select-none text-lg"
            >
              <CiCircleMinus />
            </button>
            <p className="select-none">{item.quantity}</p>
            <button
              onClick={() => handleIncrement(item.id)}
              className="select-none text-lg"
            >
              <CiCirclePlus />
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 select-none">
        <p className="md:text-xs text-gray-700">{item.category}</p>
        <p className="md:text-xs font-bold"> {item.name} </p>
        <p className="md:text-xs text-[#c73a0f] font-bold">${item.price}</p>
      </div>
    </div>
  );
}

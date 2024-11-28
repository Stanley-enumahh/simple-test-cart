import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { OrderList } from "../App";

export default function ConfirmOrder({ cart, handleNewOrder, totalPrice }) {
  return (
    <div className="absolute bg-[#000] top-0 left-0 z-50 bg-opacity-50  items-center flex flex-col w-full h-screen md:h-full">
      <div className="w-full md:w-[370px] relative mt-[80px] md:mt-[100px] gap-5 flex flex-col bg-white p-5 h-[90%] md:h-[420px] rounded-md">
        <div className="flex flex-col text-xs gap-1">
          <IoCheckmarkDoneCircleOutline className="text-green-600 text-3xl md:text-xl" />
          <h1 className="text-3xl md:text-2xl font-bold">Order Confirmed</h1>
          <p>we hope you enjoy yout food!</p>
        </div>
        <OrderList cart={cart} handleNewOrder={handleNewOrder} />
        <div className="flex flex-row justify-between">
          <p className="md:text-xs">order total</p>
          <h1 className="font-bold text-xl md:text-sm">${totalPrice}</h1>
        </div>
        <button
          onClick={handleNewOrder}
          className="capitalize md:text-xs bottom-5 w-[87%] absolute bg-[#c73a0f] rounded-3xl md:rounded-2xl text-white py-3 md:py-2"
        >
          start new order
        </button>
      </div>
    </div>
  );
}

import carbonIcon from "../assets/images/icon-carbon-neutral.svg";

export default function Stats({ totalPrice, handleConfirmOrder }) {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-between">
        <p className="text-xs">total order</p>
        <p className="text-xl font-bold">${Number(totalPrice)}</p>
      </div>
      <div className="flex flex-row gap-2 w-full justify-center items-center bg-[#ccc] py-3 rounded-lg my-3">
        <img src={carbonIcon} width={15} />
        <p className="text-xs">This a carbon-neutral delivery</p>
      </div>
      <button
        onClick={handleConfirmOrder}
        className="bg-[#c73a0f] hover:bg-[#a13f22] transition-all duration-150 text-white text-sm rounded-2xl py-2"
      >
        Confirm order
      </button>
    </div>
  );
}

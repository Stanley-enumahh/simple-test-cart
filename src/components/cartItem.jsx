import removeIcon from "../assets/images/icon-remove-item.svg";

export default function CartItem({ cart, quantity, cartCount, handleDelete }) {
  return (
    <div className="flex flex-col gap-2 h-[230px] md:h-[170px] overflow-auto">
      {cart.map((cartItem, i) => {
        return (
          <div
            key={i}
            className="text-xs flex flex-row justify-between py-3 items-center border-b"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold">{cartItem.name}</p>
              <ul className="flex flex-row gap-1 items-center">
                <li className="text-[#c73a0f] font-bold">
                  {cartItem.quantity}x
                </li>
                <li className="ml-2 text-gray-600 font-semibold">
                  ${cartItem.price}
                </li>
                <li className="text-gray-600 font-semibold">
                  ${Number(cartItem.quantity * cartItem.price)}
                </li>
              </ul>
            </div>
            <span className="rounded-full border w-fit h-fit">
              <img onClick={() => handleDelete(cartItem.id)} src={removeIcon} />
            </span>
          </div>
        );
      })}
    </div>
  );
}

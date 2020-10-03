import React, { useContext } from "react";
import { Context } from "../Context";

function CartItem({ item }) {
  const { removeItemFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onClick={() => removeItemFromCart(item.id)}
      ></i>
      <img src={item.url} width="180px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;

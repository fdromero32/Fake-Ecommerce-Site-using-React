import React, { useState, useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonText, setButtonText] = useState("Add Items to your Cart");

  // Setting total cost assuming static value.
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      alert("Order placed!");
      setButtonText("Order placed!");
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay} </p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={() => placeOrder()}>{buttonText}</button>
        ) : (
          <p>You need to add things to your cart!</p>
        )}
      </div>
    </main>
  );
}

export default Cart;

import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from '../Context'

function Header() {
  const { cartItems } = useContext(Context)

  function checkCartItems() {
    if(cartItems.length === 0){
      return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
    } else if( cartItems.length >= 1){
      return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
    }
  }
  return (
    <header>
      <h2>
        <Link to="/">Pic Some</Link>
      </h2>
      <Link to="/cart">
        {checkCartItems()}
      </Link>
    </header>
  );
}

export default Header;

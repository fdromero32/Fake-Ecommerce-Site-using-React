import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(
    () =>
      fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
        .then((response) => response.json())
        .then((data) => setPhotos(data)),
    []
  );

  function toggleFavorite(id) {
    const updatedArray = photos.map((photo) => {
      if (id === photo.id) {
        photo.isFavorite = !photo.isFavorite;
      }
      return photo;
    });
    setPhotos(updatedArray);
  }

  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }

  function removeItemFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <Context.Provider value={{ photos, toggleFavorite, cartItems,  addToCart, removeItemFromCart}}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

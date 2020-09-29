import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);

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
        console.log(id);
        console.log(!photo.isFavorite);
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
  }

  return (
    <Context.Provider value={{ photos, toggleFavorite }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

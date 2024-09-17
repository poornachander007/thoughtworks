import React, { useEffect, useState } from "react";
import BookCard from "../BookCard"; // Ensure correct import path

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      <div className="favorites-list">
        {favorites.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

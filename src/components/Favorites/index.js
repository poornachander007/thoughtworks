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
          <BookCard
            key={index}
            book={book}
            // title={book.title}
            // author={book.author_name?.[0]}
            // cover={book.cover_url} // Assuming you have a cover_url in the book data
            // description={book.description} // Assuming a description field exists
            // year={book.first_publish_year} // If applicable
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

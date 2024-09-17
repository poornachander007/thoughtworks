import React from "react";
// import BookCard from "./BookCard";
import BookCard from "../BookCard";

const BookList = ({ books, addToFavorites }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.key} book={book} addToFavorites={addToFavorites} />
      ))}
    </div>
  );
};

export default BookList;

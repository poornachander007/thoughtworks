// import React from "react";

// const BookCard = ({ book, addToFavorites }) => {
//   const coverUrl = book.cover_i
//     ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
//     : "https://via.placeholder.com/150";

//   return (
//     <div className="book-card">
//       <img src={coverUrl} alt={book.title} />
//       <h3>{book.title}</h3>
//       <p>{book.author_name?.[0]}</p>
//       <button onClick={() => addToFavorites(book)}>Add to Favorites</button>
//     </div>
//   );
// };

// export default BookCard;

// import React from "react";

// const BookCard = ({ title, author, cover, description, year }) => {
//   return (
//     <div className="book-card">
//       {cover && <img src={cover} alt={`${title} cover`} />}
//       <h3>{title}</h3>
//       <p>{author}</p>
//       {year && <p>Published in: {year}</p>}
//       {description && <p>{description}</p>}
//     </div>
//   );
// };

// export default BookCard;

// BookCard.js
import React from "react";

const BookCard = ({
  book, // Book object containing data for display
  addToFavorites, // Function to add book to favorites
  showDescription = false, // Optional flag to show description
}) => {
  // Construct the cover image URL or fallback to a placeholder
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="book-card">
      {/* Display the cover image */}
      <img src={coverUrl} alt={book.title} />

      {/* Display the book title */}
      <h3>{book.title}</h3>

      {/* Display the author's name */}
      <p>{book.author_name?.[0]}</p>

      {/* Conditionally display the publication year */}
      {book.first_publish_year && (
        <p>Published in: {book.first_publish_year}</p>
      )}

      {/* Conditionally display the description */}
      {showDescription && book.description && <p>{book.description}</p>}

      {/* Display the "Add to Favorites" button if the function is provided */}
      {addToFavorites && (
        <button onClick={() => addToFavorites(book)}>Add to Favorites</button>
      )}
    </div>
  );
};

export default BookCard;

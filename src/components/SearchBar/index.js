import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, searchBooks }) => {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for books by title or author"
      />
      <button onClick={searchBooks}>Search</button>
    </div>
  );
};

export default SearchBar;

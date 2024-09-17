import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import Favorites from "./components/Favorites";
import Loader from "./Loader"; // Adjust the path as needed
import "./styles.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const searchBooks = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${searchTerm}`
    );
    setBooks(response.data.docs);
    setLoading(false);
  };

  const addToFavorites = (book) => {
    const updatedFavorites = [...favorites, book];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchBooks={searchBooks}
      />
      {loading ? (
        <Loader />
      ) : (
        <BookList books={books} addToFavorites={addToFavorites} />
      )}

      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;

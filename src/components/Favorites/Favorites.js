import React, { useEffect, useState } from "react";
import "./Favorites.css";

const Favorites = (props) => {
  const [title, setTitle] = useState("New List");
  const [movies, setMovies] = useState([]);

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    setMovies(props.movies);
  }, [props.movies]);

  const handleDelete = (imdbID) => {
    const newList = [...movies];
    const index = movies.find((item) => item.imdbID === imdbID);
    newList.splice(index, 1);
    setMovies(newList);
  };

  return (
    <div className="favorites">
      <input
        value={title}
        type="text"
        placeholder="Give name to list"
        onChange={changeHandler}
        className="favorites__name"
      />
      <ul className="favorites__list">
        {movies.map((item) => {
          return (
            <div className="fav_list_items">
              <li key={item.imdbID}>
                {item.Title} ({item.Year})
              </li>
              <button onClick={() => handleDelete(item.imdbID)}>X</button>
            </div>
          );
        })}
      </ul>
      <button type="button" disabled={!title} className="favorites__save">
        Save list
      </button>
    </div>
  );
};

export default Favorites;

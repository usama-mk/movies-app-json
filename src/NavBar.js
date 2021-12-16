import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setMovies } from "./actions";
import j from "./moviesList.json";
import { useHistory } from "react-router-dom";

function NavBar({ upcoming }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleUpcoming = () => {
    dispatch(setMovies(j.movies.reverse()));
    var element = document.getElementById("upm");
    element.classList.add("active");
    var element = document.getElementById("currentm");
    element.classList.remove("active");
    history.push("/upcomingmovies");
  };

  const handleLatestMovies = () => {
    var element = document.getElementById("upm");
    element.classList.remove("active");
    var element = document.getElementById("currentm");
    element.classList.add("active");
    history.push("/");
  };

  return (
    <div className="NavBar">
      <nav class="nav nav-pills flex-column flex-sm-row">
        <div
          class={`flex-sm-fill text-sm-center nav-link pointer ${
            !upcoming ? "active" : ""
          }`}
          id="currentm"
          onClick={handleLatestMovies}
        >
          Latest Movies
        </div>
        <div
          class={`flex-sm-fill text-sm-center nav-link pointer ${
            upcoming ? "active" : ""
          }`}
          id="upm"
          onClick={handleUpcoming}
        >
          Upcoming Movies
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

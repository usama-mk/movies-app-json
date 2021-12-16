import React, { useEffect } from "react";
import CardList from "./CardList";
import Scroll from "./Scroll";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "./actions";
import j from "./moviesList.json";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function UpcomingApp({ history }) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.reverse());
  const [searchField, setSearchField] = useState("");

  const getData = () => {
    // console.log(j.movies)
    dispatch(setMovies(j.movies));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  const submitButton = () => {
    history.push("/booking");
  };

  return (
    <div className="tc">
      <h1 className="f1">Movies ticket</h1>
      {movies ? (
        <Scroll>
          <NavBar upcoming={true} />
          <div className="search">
            <input
              className="mb-3 mt-3"
              placeholder="Search.."
              type="search"
              id="form1"
              class="form-control "
              onChange={handleSearch}
              value={searchField}
            />
          </div>
          <CardList
            moviesx={j.movies}
            searchField={searchField}
            func={submitButton}
          />
        </Scroll>
      ) : (
        <h1>Fetching Data..</h1>
      )}
    </div>
  );
}

export default UpcomingApp;

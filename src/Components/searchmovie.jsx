import { useState } from "react";
import MovieCard from "./movieCard.jsx";

const SearchMovie = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d3d2087aece245a3e20278d186aa6d46&language=en-US&query=${query}&page=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMovie(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const changeInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="movie-form">
        <form className="form flex justify-between gap-6 items-center py-2" onSubmit={searchMovie}>
          <input
            className="input text-[1.6rem] px-[2rem] py-[.75rem] rounded-[20px] w-[80%]"
            type="text"
            name={movie}
            placeholder="Search Movie"
            value={query}
            onChange={changeInput}
          />
          <button
            className="button bg-blue-500 py-4 px-6 text-white rounded-[20px] text-[1.4rem] w-[20%] hover:bg-blue-400 "
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <div className="card-list mt-16 ">
        {movie
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />  // always add key in map function
          ))}
      </div>
    </>
  );
};

export default SearchMovie;

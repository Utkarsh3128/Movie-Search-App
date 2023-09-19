import PropTypes from "prop-types";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="card py-8 px-16 rounded-[10px] mb-8 bg-white">
        <img
          className=" mx-auto block "
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        />
        <div className="card-content px-4">
          <h3 className="card--title mb-2 text-center font-bold text-[3.2rem] ">{movie.title}</h3>
          <div className="flex justify-between my-5">
            <div className="text-[1.5rem] font-bold ">
              Release Date: {movie.release_date}
            </div>
            <div className="text-[1.5rem] font-bold" >
            Rating: {movie.vote_average}
            </div>
          </div>
          <p className="card--description text-[1.5rem] ">{movie.overview}</p>
        </div>
      </div>
    </>
  );
};


MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }),
};

export default MovieCard;

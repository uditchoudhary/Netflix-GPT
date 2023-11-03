import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard posterPath={movie.poster_path} key={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

//https://image.tmdb.org/t/p/w780/1E5baAaEse26fej7uHcjOgEE2t2.jpg

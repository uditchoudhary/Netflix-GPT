import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
      {/* 
      
      Main Container
      - Video Background
      - Video Title

      Secondary Container
      - MovieList * n
        - cards * n
      */}
    </div>
  );
};

export default Browse;

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { TMDB_API_OPTIONS } from '../utils/tmdbConstants';
import { addTrailerVideo } from '../utils/movieSlice';

const useTrailerVideo = (movieId) => {
   const dispatch = useDispatch();
   const getMovieVideoData = async () => {
     const data = await fetch(
       `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
       TMDB_API_OPTIONS
     );
     const json = await data.json();

     const trailerVideos = json.results.filter(
       (video) => video.type === "Trailer"
     );
     const trailerVideo = trailerVideos.length
       ? trailerVideos[0]
       : json.results[0];
     dispatch(addTrailerVideo(trailerVideo));
   };

   useEffect(() => {
     getMovieVideoData();
   }, []);
}

export default useTrailerVideo
import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);

  const trailerVideoKey = useSelector(
    (state) => state.movies?.trailerVideo?.key
  );

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoKey +
          "?&autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideoKey
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; controls; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

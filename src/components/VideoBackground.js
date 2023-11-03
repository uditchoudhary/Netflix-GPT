import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);

  const trailerVideoKey = useSelector(
    (state) => state.movies?.trailerVideo?.key
  );

  return (
    <div className="w-full h-full hidden xl:block">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoKey +
          "?&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; controls; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

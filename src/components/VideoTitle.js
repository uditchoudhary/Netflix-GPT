import React from "react";

const VideoTitle = ({ overview, title }) => {
    return (
      <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-2/5">{overview}</p>
        <button className="bg-white p-4 px-12 text-xl text-black rounded-lg hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="mx-4 p-4 px-12 text-xl text-white bg-slate-800 rounded-lg hover:bg-opacity-70">
          More Info
        </button>
      </div>
    );
};

export default VideoTitle;

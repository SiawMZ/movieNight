import React, { useState } from "react";

export default function RandomMove() {
  const [position, setPosition] = useState({ x: "", y: "" });
  const [sentence, setSentence] = useState("Movie?");
  const [imageUrl, setImageUrl] = useState(
    "https://media.tenor.com/Kpu7dZ4tO7MAAAAi/popping-corn-watching-movie.gif"
  );
  const [showNoButton, setShowNoButton] = useState(true);

  const getRandomPosition = () => {
    const maxWidth = window.innerWidth - 100; // Adjust as needed
    const maxHeight = window.innerHeight - 40; // Adjust as needed
    const newPosition = {
      x: Math.random() * maxWidth,
      y: Math.random() * maxHeight,
    };
    setPosition(newPosition);
  };

  const handleYesBtn = () => {
    setSentence("Help me Buy Popcorn");
    setImageUrl(
      "https://media.tenor.com/-i5DxaW3J70AAAAi/tkthao219-bubududu.gif"
    );

    const centerX = window.innerWidth + 20; // Adjust width as needed
    const centerY = (window.innerHeight - 100) / 2; // Adjust height as needed
    setPosition({ x: centerX, y: centerY });
    setShowNoButton(false);
  };

  return (
    <>
      <div className="m-28 ml-24 ">
        <div>
          <img src={imageUrl} className="mb-8" />
        </div>

        <div className="text-4xl font-bold text-orange-950 flex justify-center">
          {sentence}
        </div>
        <br />
        <div className="justify-center ml-6">
          <button
            className="btn mr-10 bg-pink-800 hover:bg-pink-600 outline outline-pink-500 px-10 text-white hover:scale-110 focus:translate-x-16"
            onClick={handleYesBtn}
          >
            Yes
          </button>

          {showNoButton && (
            <button
              className="btn bg-black outline text-white px-10 "
              onMouseMove={getRandomPosition}
              style={{
                position: "absolute",
                left: position.x,
                top: position.y,
              }}
            >
              No
            </button>
          )}
        </div>
      </div>
    </>
  );
}

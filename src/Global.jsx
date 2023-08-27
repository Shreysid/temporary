import React from "react";
import Rocket from "./assets/Rocket";

const Global = () => {
  return (
    // container
    <div className="w-full m-auto flex flex-col px-8 md:justify-center">
      {/* chevron text */}
      <div className="flex justify-center items-center text-navy my-16 md:my-20">
        <p className="text-5xl md:text-6xl pr-1 md:pr-4">&lt;</p>
        <p className="text-center text-lg md:text-xl mt-2">
          Click a picture and <span className="text-orange">share</span>, it's
          that simple.
        </p>
        <p className="text-5xl md:text-6xl pl-1 md:pl-4">&gt;</p>
      </div>
      {/* Get Global copy */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-navy text-3xl mt-4">
          Get <span className="text-orange">Global</span>
        </h2>
        <p className="text-center text-gray md:text-xl max-w-5xl my-2 tracking-wider">
          Transform your product into a worldwide phenomenon with our{" "}
          <span className="text-orange">
            AI ad generation and publishing platform.
          </span>{" "}
          <p className="mt-4 md:mt-0">
            Don’t let your dreams be limited by borders anymore. Unleash the
            potential of your business today!
          </p>
        </p>
      </div>
      {/* cards space */}
      <div className=""></div>
    </div>
  );
};

export default Global;

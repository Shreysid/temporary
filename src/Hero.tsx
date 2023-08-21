import hero from "./assets/hero.png";
const Hero = () => {
  return (
    <div className="w-full m-auto flex flex-col md:flex-row lg:flex-row h-[80vh] w-full px-12 md:px-8 lg:px-4">
      <div className="flex flex-col md:w-1/2 justify-center text-center items-center md:items-start md:text-left lg:text-left">
        <h1 className="text-orange font-bold text-5xl md:text-6xl lg:text-7xl leading-none md:leading-tight">
          {" "}
          <span className="text-navy">Supercharge</span> your online business{" "}
        </h1>
        <p className="text-gray pt-4 text-2xl">
          Selling online is as simple as sharing content.
        </p>
        <button className="px-6 py-2 bg-orange w-36 my-4 text-white rounded-full">
          Explore
        </button>
      </div>
      <div className="md:w-1/2 mx-auto flex justify-center items-center">
        <img className="w-full" src={hero} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;

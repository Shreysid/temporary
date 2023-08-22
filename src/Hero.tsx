import Star from "./assets/Star";
import hero from "./assets/hero.png";
const Hero = () => {
  return (
    <div className="w-full m-auto flex flex-col md:flex-row lg:flex-row h-[80vh] w-full px-12 md:px-8 lg:px-4">
      <div className="flex flex-col md:w-1/2 justify-center text-center items-center md:items-start md:text-left lg:text-left">
        <h1 className="text-orange font-bold text-3xl md:text-5xl lg:text-7xl md:w-3/4">
          {" "}
          <span className="text-navy">Supercharge</span> your online business{" "}
        </h1>
        <h2 className="text-gray pt-4 text-xl md:text-2xl">
          Selling online is as simple as sharing content.
        </h2>
        <button className="px-6 py-2 bg-orange w-36 my-4 text-white rounded-full">
          Explore
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="flex">
            <div className="h-10 w-10 bg-red-400 rounded-full"></div>
            <div className="h-10 w-10 bg-blue-400 rounded-full -translate-x-4"></div>
            <div className="h-10 w-10 bg-yellow-400 rounded-full -translate-x-8"></div>
          </div>
          <div className="flex flex-col items-start md:-translate-x-4">
            <h3 className="font-bold text-sm">Customer reviews</h3>
            <p className="flex items-center"><span className="flex items-center"><Star/> 4.8</span> (5k reviews)</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mx-auto flex justify-center items-center">
        <img className="w-full" src={hero} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;

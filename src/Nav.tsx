import Boost from "./assets/Boost.tsx";

function Nav() {
  return (
    <nav className="w-full h-20 mx-4 flex">
      <div className="flex items-center">
        <Boost />
        <h1 className="font-poppins font-light text-2xl md:text-3xl p-2 text-orange">
          BOOST
        </h1>
      </div>
    </nav>
  );
}

export default Nav;

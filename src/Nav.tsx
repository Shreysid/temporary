import Boost from "./assets/Boost.tsx";

function Nav() {
  return (
    <nav className="w-full mx-4">
      <div className="flex items-center">
        <Boost />
        <h1 className="font-poppins font-light text-3xl p-2 text-orange">
          BOOST
        </h1>
      </div>
    </nav>
  );
}

export default Nav;

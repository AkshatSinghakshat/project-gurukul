import { Link } from "react-router-dom";

function Navbar() {
return ( <header className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 shadow-xl"> <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


    {/* Logo */}
    <Link
      to="/"
      className="text-3xl font-extrabold text-white tracking-wider"
    >
      Gurukul
    </Link>

    {/* Navigation */}
    <div className="flex items-center gap-6">
      <Link
        to="/"
        className="text-white hover:text-yellow-300 transition duration-300"
      >
        Home
      </Link>

      <Link
        to="/about"
        className="text-white hover:text-yellow-300 transition duration-300"
      >
        About
      </Link>

      <Link
        to="/login"
        className="text-white hover:text-yellow-300 transition duration-300"
      >
        Login
      </Link>

      <Link
        to="/register"
        className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5 py-2 rounded-lg transition duration-300"
      >
        Register
      </Link>
    </div>
  </nav>
</header>

);
}

export default Navbar;

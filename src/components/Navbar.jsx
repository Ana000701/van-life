import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex h-[110px] items-center py-2.5">
      <Link
        to="/"
        className="mr-auto text-[25px] font-black text-black uppercase"
      >
        #VANLIFE
      </Link>
      <nav>
        <ul className="flex gap-3">
          <li className="px-5 py-[5px] text-base font-semibold text-[#4D4D4D] hover:text-[#161616] hover:underline">
            <Link to="about">About</Link>
          </li>
          <li className="px-5 py-[5px] text-base font-semibold text-[#4D4D4D] hover:text-[#161616] hover:underline">
            <Link to="vans">Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

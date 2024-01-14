import { Link } from "react-router-dom";
import "../../src/App.css";
import Logo from "../../src/images/steet-logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-navDark md:px-20 py-3 px-6">
      <div className="md:px-4 py-3 px-6">
        <img src={Logo} alt="" />
      </div>
      <div className="inset-y-0 left-0 w-3/5 md:block md:text-base text-xl pr-20 md:pr-0 text-white font-light absolute md:relative bg-navDark">
        <ul className="md:flex md:space-x-8 ml-24 mt-28 md:mt-0 md:ml-40">
          <li className="my-5 md:my-0">
            <Link to="" className="hover:text-navBrown">
              Home
            </Link>
          </li>
          <li className="my-5 md:my-0">
            <Link to="" className="hover:text-navBrown">
              About Us
            </Link>
          </li>
          <li className="my-5 md:my-0">
            <Link to="" className="hover:text-navBrown">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-navBrown">
              Contact US
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block space-x-4">
        <Link
          to=""
          className="border-solid border-2 border-navBrown text-white text-sm px-3 py-2 rounded-xl"
        >
          Sign in
        </Link>
        <Link
          to=""
          className="bg-navBrown hover:bg-navBrown/70 text-sm text-white px-3 py-2 rounded-xl"
        >
          Sign up
        </Link>
      </div>
      <button className="md:hidden text-3xl text-white">&#9776;</button>
      {/* <div>
        <button className="text-8xl self-end px-6 text-white">&times;</button>
      </div> */}
    </div>
  );
};

export default Navbar;

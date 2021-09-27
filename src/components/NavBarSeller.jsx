import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const NavBarSeller = () => {
  return (
    <div className="w-full px-8 py-2 fixed shadow-xl top-0 z-20 bg-mainWhite">
      {/* Main */}
      <div className="flex items-center py-4">
        <div className="logo w-1/4 flex justify-center">
          <Link to="/">
            <img
              className="w-1/3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex search-main w-1/2 shadow rounded"></div>
        <div className="cart w-1/4">
          <nav className="w-full">
            <ul className="flex items-center justify-evenly">
              <Link to="/">Home</Link>
              <li>
                <AiFillFacebook className="rounded-lg" />
              </li>
              <li>
                <AiFillInstagram className="rounded-lg" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBarSeller;

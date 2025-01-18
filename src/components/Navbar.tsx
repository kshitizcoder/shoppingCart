import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const Navbar: React.FC = () => {
  const [mobile, setMobile] = useState(false);
  const { productInCart } = useAppSelector((state) => state.addedProducts);
  return (
    <nav className="navbar  container py-5 px-8 mx-auto flex justify-between items-center">
      <div className="logo">
        <div className="font-bold">HorizonStore</div>
      </div>
      <ul
        className={
          mobile
            ? " py-5 absolute z-50 transition-all  ease-in-out flex flex-col items-center left-0 top-[7%] w-full bg-pure"
            : " hidden lg:flex  md:w-full text-md font-medium md:items-center gap-5 md:justify-end "
        }
        onClick={() => setMobile(false)}
      >
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "text-black"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/cart"}
            className={({ isActive }) =>
              `${isActive ? "text-blue-700" : "text-black"} flex`
            }
          >
            Cart
            <sup className="text-xl md:px-2 xl:px-3 hidden lg:block text-white  rounded-full bg-blue-800">
              {productInCart?.length}
            </sup>
          </NavLink>
        </li>
      </ul>

      <button className="mobile-menu-icon " onClick={() => setMobile(!mobile)}>
        {mobile ? (
          <ImCross className="lg:hidden" />
        ) : (
          <FaBars className="lg:hidden" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;

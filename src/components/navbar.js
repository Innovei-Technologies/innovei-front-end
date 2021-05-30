import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { ReactComponent as Logo } from "../res/logo.svg";

function Navbar() {
  const path = useLocation().pathname;
  const buttonStyle = (pathName) => {
    if (path === "/" + pathName) {
      console.log("H");
      return "text-gray-100 bg-gray-900";
    }
    return "text-gray-400 hover:text-gray-200 hover:bg-gray-600";
  };

  return (
    <div className="absolute left-0 top-0 w-full h-16 bg-gray-800">
      <div className="pt-2 flex flex-row content-center justify-between">
        <div className="flex flex-row">
          <Link to="/">
            <Logo className="h-12 block mx-5" />
          </Link>

          <button
            className={
              "rounded-md my-2 focus:outline-none mx-4 " + buttonStyle("about")
            }
          >
            <Link to="/about">
              <h4 className="mx-3 font-sm">Company</h4>
            </Link>
          </button>
          <button
            className={
              "rounded-md my-2 focus:outline-none mx-4 " +
              buttonStyle("business-services")
            }
          >
            <Link to="/business-services">
              <h4 className="mx-2 font-sm">Business Services</h4>
            </Link>
          </button>
          <button
            className={
              "rounded-md my-2 focus:outline-none mx-4 " +
              buttonStyle("government-services")
            }
          >
            <Link to="/government-services">
              <h4 className="mx-2 font-sm">Government Services</h4>
            </Link>
          </button>
        </div>
        <button
          className={
            "rounded-md my-2 focus:outline-none mx-4 " +
            buttonStyle("contact-us")
          }
        >
          <Link to="/contact-us">
            <h4 className="mx-2 font-sm">Contact Us</h4>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;

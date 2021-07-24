import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as Logo } from "../res/logo.svg";
import { ReactComponent as LogoSmall } from "../res/logo_small.svg";

import Hamburger from "hamburger-react";

function Navbar() {
  const path = useLocation().pathname;
  const [isOpen, setOpen] = useState();
  const buttonStyle = (pathName) => {
    if (path === "/" + pathName) {
      return "text-gray-100 bg-gray-900";
    }
    return "text-gray-400 hover:text-gray-200 hover:bg-gray-600";
  };

  return (
    <Fragment>
      <div className="absolute left-0 top-0 w-full h-16 bg-gray-800">
        <div className="w-15/16 mx-auto pt-2 flex flex-row content-center justify-between">
          <div className="flex flex-row">
            <Link to="/">
              <Logo className="h-12 mx-5 hidden lg:block" />
              <LogoSmall className="h-12 mx-5 block lg:hidden" />
            </Link>
            <div className="hidden md:flex flex-row">
              <button
                className={
                  "rounded-md my-2 focus:outline-none mx-4 " +
                  buttonStyle("about")
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
          </div>
          <div className="hidden md:flex">
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
          <div className="flex md:hidden pr-5">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFFFF" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden w-full absolute top-16 right-0 h-96 bg-gray-700">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col mt-8">
              <button
                className={
                  "rounded-md my-2 py-4 focus:outline-none mx-4 " +
                  buttonStyle("about")
                }
              >
                <Link to="/about">
                  <h4 className="mx-3 font-sm">Company</h4>
                </Link>
              </button>
              <button
                className={
                  "rounded-md my-2 py-4 focus:outline-none mx-4 " +
                  buttonStyle("business-services")
                }
              >
                <Link to="/business-services">
                  <h4 className="mx-2 font-sm">Business Services</h4>
                </Link>
              </button>

              <button
                className={
                  "rounded-md my-2 py-4 focus:outline-none mx-4 " +
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
                "rounded-md mt-10 py-4 focus:outline-none mx-4 " +
                buttonStyle("contact-us")
              }
            >
              <Link to="/contact-us">
                <h4 className="mx-2 font-sm">Contact Us</h4>
              </Link>
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Navbar;

import React from "react";

import { Link } from "react-router-dom";

import bannerImage from "../../res/banner_image.png";
import warehousingImage from "../../res/warehousing.jpg";
import customerServiceImage from "../../res/customer_service.jpg";
import repairImage from "../../res/repair.jpg";
import mapImage from "../../res/us_can_map.svg";

function Home() {
  return (
    <div>
      <div className="md:h-screen pt-10">
        <div className="md:h-5/6  bg-gray-800 w-14/16 md:w-15/16 2xl:w-13/16 rounded-3xl mx-auto mb-24">
          <div className="flex flex-col-reverse md:flex-row h-full">
            <div className="flex-1 h-full">
              <div className="mt-16 mb-16 md:mt-0 my-auto flex flex-col justify-center h-full ml-10 mr-10 xl:ml-16 xl:mr-16">
                <h1 className=" text-gray-50 font-bold text-4xl md:text-6xl mb-16">
                  Logistics Made Easy
                </h1>
                <p className=" text-gray-300 font-light text-lg mb-16">
                  As a premier repair, customer service, and logistics service
                  provider, we are dedicated to the{" "}
                  <span className="font-semibold text-xl text-red-400">
                    best services
                  </span>{" "}
                  in support of In-Warranty and Out-of-Warranty{" "}
                  <span className="font-semibold text-xl text-red-400">
                    repair
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-xl text-red-400">
                    support
                  </span>{" "}
                  needs.
                </p>

                <button className="w-1/2 md:w-1/4 border border-gray-200 rounded-md hover:bg-gray-200">
                  <Link to="/contact-us">
                    <h3 className="py-4 font-semibold text-white text-base hover:text-gray-800">
                      Get Started
                    </h3>
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex-1 my-auto md:my-auto">
              <img
                src={bannerImage}
                className="pt-16 md:pt-0 px-4 2xl:px-24 md:px-0 lg:px-12 select-none"
                alt="main banner"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bg-gray-100">
        <div className="w-15/16 2xl:w-13/16 mx-auto md:pl-10 pb-10">
          <h1 className="text-gray-800 pl-10 md:pl-0 font-bold text-5xl pb-10 pt-20">
            Powering Smarter Descisions
          </h1>
          <div className="flex flex-col md:flex-row pb-16">
            <div className="flex-1">
              <img
                className="px-10 2xl:px-20 pb-5 md:pb-0"
                src={warehousingImage}
                alt="warehouse"
              ></img>
              <div></div>
            </div>
            <div className="flex-1 my-auto">
              <div className="ml-16 mr-16 text-center md:text-left">
                <h2 className="text-gray-800 font-bold text-4xl mb-10">
                  Warehousing Logistics
                </h2>
                <p className="font-normal text-lg text-gray-600 mb-5">
                  Coordinate materials management with ease. Innovei ensures
                  your merchandise is stored and protected at the lowest cost
                  possible.
                  {
                    //Track your units in detail in real time.
                  }
                </p>
                <Link to="/404">
                  <h3 className="font-medium text-lg text-gray-900 underline">
                    Learn More
                  </h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row pb-10">
            <div className="flex-1">
              <img
                className="px-10 2xl:px-20 pb-5 md:pb-0"
                src={customerServiceImage}
                alt="customer service"
              ></img>
            </div>
            <div className="flex-1 my-auto">
              <div className="ml-16 mr-16 text-center md:text-left">
                <h2 className="text-gray-800 font-bold text-4xl mb-10">
                  Customer Service
                </h2>
                <p className="font-normal text-lg text-gray-600 mb-5">
                  Innovei gives you a dedicated support team focused on your
                  customers. Get quick response times, high SLA %, and a support
                  team that acts on your behalf.
                </p>
                <Link to="/404">
                  <h3 className="font-medium text-lg text-gray-900 underline">
                    Learn More
                  </h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <img
                className="px-10 2xl:px-20 pb-5 md:pb-0"
                src={repairImage}
                alt="repair"
              ></img>
            </div>
            <div className="flex-1 my-auto">
              <div className="ml-16 mr-16 text-center md:text-left">
                <h2 className="text-gray-800 font-bold text-4xl mb-10">
                  Product Repair
                </h2>
                <p className="font-normal text-lg text-gray-600 mb-5">
                  Operate more efficiently by relying on a single source to
                  manage repair, refurb, and rework. Innovei ensures low
                  turnaround time and low high repair satisfaction.{" "}
                  {
                    //Track repairs in real time.
                  }
                </p>
                <Link to="/404">
                  <h3 className="font-medium text-lg text-gray-900 underline">
                    Learn More
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-15/16 2xl:w-13/16 mx-auto">
        <div className="md:ml-10">
          <h1 className="text-gray-800 pl-10 md:pl-0 font-bold text-5xl pb-10 pt-20">
            Ship Anywhere with Ease
          </h1>
        </div>
        <div className="w-13/16 md:w-10/16 2xl:w-8/16 mx-auto">
          <img src={mapImage} alt="distance map" />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { Fragment } from "react";

import contactUsImage from "../../res/contact_us.jpg";
import phoneImage from "../../res/phone.svg";
import emailImage from "../../res/email.svg";

function ConstactUs() {
  return (
    <Fragment>
      <div className="w-15/16 2xl:w-13/16 p-10 mx-auto bg-gray-800 rounded-3xl mt-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 my-auto mx-1 md:mx-10">
            <h1 className=" text-gray-50 font-bold text-5xl md:text-6xl mb-10">
              Get in Touch
            </h1>
            <p className=" text-gray-300 font-light text-lg mb-16 mr-4 md:mr-20">
              Want to get in touch? We'd love to hear from you. Here's how you
              can reach us.{" "}
            </p>
          </div>
          <div class="flex-1 my-auto mx-auto rounded-2xl">
            <img src={contactUsImage} className="" alt="contact us" />
          </div>
        </div>
      </div>
      <div className="-mt-24 w-14/16 2xl:w-12/16 flex flex-col lg:flex-row mx-auto">
        <div className="flex-1 bg-gray-200 md:mx-12 pt-10 rounded-lg mb-10 lg:mb-0">
          <img
            src={phoneImage}
            className="w-2/16 2xl:w-1/16 mx-auto"
            alt="phone"
          />
          <h1 className="text-center font-medium text-2xl pb-6">
            Talk to Sales{" "}
          </h1>
          <p className="text-gray-800 font-light text-lg text-center px-4 pb-6">
            Interested in working with Innovei? Just pick up the phone to chat
            with a member of our support team
          </p>
          <div className="my-auto">
            <p className=" text-center font-semibold text-2xl mb-10">
              <a href="tel:+19152255277">+1 915-225-5277</a>
            </p>
          </div>
        </div>
        <div className="flex-1 bg-gray-200 md:mx-12 pt-10 rounded-lg mb-10 lg:mb-0">
          <img
            src={emailImage}
            className="w-2/16 2xl:w-1/16 mx-auto"
            alt="phone"
          />
          <h1 className="text-center font-medium text-2xl pb-6">
            Contact our Team{" "}
          </h1>
          <p className="text-gray-800 font-light text-lg text-center px-4 pb-6">
            Sometimes a phone call just isn't enough. Don't worry... we're here
            to help
          </p>
          <div className="text-center pb-10">
            <button class="mx-auto w-1/2 md:w-1/4 border border-gray-800 rounded-md hover:bg-gray-800">
              <h3 class="py-4 font-semibold text-gray-800 text-base hover:text-gray-300">
                <a href="mailto: support@innovei.com">Contact us</a>
              </h3>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ConstactUs;

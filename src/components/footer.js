import React from "react";

function Footer() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-16">
      <div className="flex flex-row-reverse bg-gray-100 h-16 content-center">
        <h1 className="py-5 mr-5 font-medium">
          {"© " + new Date().getFullYear() + " Innovei Technologies"}
        </h1>
      </div>
    </div>
  );
}

export default Footer;

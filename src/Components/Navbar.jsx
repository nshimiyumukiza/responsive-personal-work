import React from "react";
import { useState } from "react";
import Data from "./Data";
import { IoMdRadioButtonOn } from "react-icons/io";
const Navbar = () => {
  const [showAll, setShowAll] = useState(false);
  const [isBlackThem, setIsBlackThem] = useState(true);
  let pro =
    "You know that tingly feeling you get on the back of your neck sometimes? I just got that feeling when talking with her. You know I don't believe in sixth senses, but there is something not right with her. I don't know how I know, but I just do.";
  if (!showAll) {
    pro = pro.substring(0, 97) + "...";
  }
  return (
    <div
    className={`bg-black text-white space-x-4 space-y-3 ${
      isBlackThem ? "bg-black" : "bg-sky-950"
    }`}>
    
      <div className="flex justify-between pt-8 pl-12">
        <h1 className="text-3xl font-bold pt-4">well come to my website</h1>
        <div className="space-x-4 pt-4 pb-8">
          <a href="">home</a>
          <a href="">about</a>
          <a href="">contact</a>
        </div>
        <button
          className="mr-4 bg-gradient-to-r from-pink-500 to-blue-500 p-1 rounded-full"
          onClick={() => setIsBlackThem((prev) => !prev)}
        >
          <IoMdRadioButtonOn className="text-red-500"/>
        </button>
      </div>
      <p className="text-md font-bold space-y-3">{pro}</p>
      <div className="flex justify-center pb-8">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="bg-gradient-to-r from-pink-500 to-blue-500 p-2 rounded-full"
        >
          show {showAll ? "less" : "more"}{" "}
        </button>
      </div>
      <div className="grid grid-cols-2">
      <Data name="computer" price={5000} image="src/assets/computer.png" />
      <Data name="headphone" price={3000} image="src/assets/headphone.png" />
      <Data name="mashine" price={2000} image="src/assets/mashine.png" />
      <Data name="phone" price={4000} image="src/assets/phone.png" />
      </div>
    </div>
  );
};

export default Navbar;

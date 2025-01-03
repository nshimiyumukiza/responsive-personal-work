import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { useState } from "react";
const Data = ({ name, price, image }) => {
  const [isLiked, setIsLiked] = useState(true);
  return (
    <>
      <div className="text-center font-bold p-8">
        <img src={image} alt="my image" className="h-[500px]" />
        <h1 className="pt-4">{name}</h1>
        <h2>{price} rwf</h2>

        <div onClick={()=>setIsLiked(prev=>!prev)} >{isLiked ? <AiOutlineLike /> : <AiFillLike className="text-red-500"/>}</div>
      
      </div>
      
    </>
    
  );
};

export default Data;

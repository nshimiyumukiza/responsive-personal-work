import React from "react";
import { FcLike } from "react-icons/fc";

import { useState } from "react";
const LikeButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center gap-4">
      <span>{count}</span>

      <button onClick={() => setCount((prev) => prev + 1)}>
        {" "}
        <FcLike />
        <p>{count <= 1 ? "like" : "likes"}</p>
      </button>
    </div>
  );
};

export default LikeButton;

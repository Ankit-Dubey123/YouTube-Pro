import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-1 m-1 bg-gray-200 rounded-xl">{name}</button>
    </div>
  );
};

export default Button;

import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Football",
  "Podcasts",
  "Albums",
  "Skills",
];

const ButtonList = () => {
  return (
    <div className="z-40 flex pt-3">
      {list.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;

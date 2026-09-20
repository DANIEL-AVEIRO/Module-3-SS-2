import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({to,label}) => {
  return (
    <Link
      className="inline-block px-6 py-4 bg-black text-white capitalize 
        rounded-sm border border-black border-solid cursor-pointer
        hover:bg-transparent hover:text-black duration-300 transition-all"
      to={to}
    >
      {label}
    </Link>
  );
};

export default LinkButton;

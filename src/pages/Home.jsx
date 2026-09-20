import React from "react";
import LinkButton from "../components/LinkButton";
import links from "../data/links";

const Home = () => {
  return (
    <div className="flex gap-4">
      {links.map((link) => {
        return <LinkButton to={link.to} label={link.label} />;
      })}
    </div>
  );
};

export default Home;

import React from "react";

import "../css/skeleton.css";
import "../css/normalize.css";
import "../css/components.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Card(props) {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeIn",
        type: "spring",
        stiffness: 50,
      },
    }),
    hidden: { opacity: 0, y: 200 },
  };
  return (
    <Link to={props.title.toLowerCase()} target="_blank">
      <motion.div
        className="Card four columns"
        initial="hidden"
        animate="visible"
        custom={props.i}
        variants={variants}
      >
        <img className="cover" src={props.cover} alt={props.title}></img>
        <div className="data">
          <h2>{props.title}</h2>
          <p>{props.subtitle}</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default Card;

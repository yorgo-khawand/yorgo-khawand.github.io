import { motion } from "framer-motion";
import Link from 'next/link';
const SocialLink = (props) => {
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
    
    <Link href={props.link} target="_blank">
      <motion.div
        className="py-2"
        initial="hidden"
        animate="visible"
        custom={props.i}
        variants={variants}
      >
          <a className={`bg-black px-4 w-full py-3 font-semibold text-white inline-flex items-center space-x-5 rounded`}>
          <i className={`fas ${props.icon} text-white`}></i>
        <span>{props.title}</span>
    </a>
      </motion.div>
    </Link>
  );
}

export default SocialLink;

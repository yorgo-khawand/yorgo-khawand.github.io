import { motion } from "framer-motion";
import Link from 'next/link';
import ReactGA from 'react-ga';
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
  const trackEvent = (event, props) => {
    event.preventDefault();
    ReactGA.event({
      category: props.title,
      action: 'Click',
      label: 'SocialButton'
    })
    window.location.href = props.link;
  }
  return (
    
    <Link href={props.link} target="_blank">
      <motion.div
        className="py-2"
        initial="hidden"
        animate="visible"
        custom={props.i}
        variants={variants}
      >
          <a onClick={(e)=>trackEvent(e,props)} className={`bg-white border-black border-2 hover:bg-black  px-5 w-full py-3 grow font-semibold text-black hover:text-white inline-flex content-center justify-center items-center space-x-5 rounded-full`}>
          <i className={`fas ${props.icon}`}></i>
          <span>{props.title}</span>
    </a>
      </motion.div>
    </Link>
  );
}

export default SocialLink;

import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div id="About" className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="../public/me.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Master Expert in web development .
        </motion.h1>

        <p className="sub-title">
          Je m'appelle Sayed Mejbri, développeur web full stack passionné par la
          création de solutions numériques innovantes. Actuellement inscrit en
          Master Expert en Développement Web à l'École d’Informatique et du
          Digital à Marseille (Doranco), je maîtrise aussi bien le développement
          front-end que back-end. Mes compétences incluent HTML, CSS,
          JavaScript, ainsi que php Java et JEE .... pour des applications
          robustes et performantes. Fort de mon expertise, je suis capable de
          concevoir et développer des sites web et des applications complètes,
          allant de la conception de l'interface utilisateur à la gestion de
          bases de données et à la logique serveur.
        </p>

        <div className="all-icons flex">
          {/* <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div> */}
          <a href="https://github.com/SAYED-MEJBRI">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://www.linkedin.com/in/sayed-mejbri-442173224/">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;

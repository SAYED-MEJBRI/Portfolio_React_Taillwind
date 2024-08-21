import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero flex ">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img src="./avatar.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Master Expert En développement Web</h1>
        <p className="sub-title">
          {" "}
          👨‍💻 **Développeur Full-Stack à la recherche d'un contrat de
          professionnalisation** pour mon parcours Master Expert en
          Développement Web. 🌐 **Passionné par la création d'applications web
          complètes**, je maîtrise les technologies front-end : HTML, CSS,
          JavaScript, et back-end : Java, C, C++, PHP, JEE...🚀 **Prêt à relever
          de nouveaux défis et à contribuer à des projets innovants**, je suis
          disponible pour intégrer une entreprise dynamique où je pourrais
          mettre en œuvre mes compétences et développer mon expertise.
        </p>
        <div className="icons flex">
          <div className=" icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right-section border animation">animation</div>
    </section>
  );
};

export default Hero;

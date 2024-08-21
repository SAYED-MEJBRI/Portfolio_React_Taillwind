import { useState } from "react";
import "./main.css";
const myProjects = [
  { projectTitle: "react project", category: "react", imgpath: "a" },
  { projectTitle: "css project", category: "css", imgpath: "b" },
  { projectTitle: "javavcript", category: "javascript", imgpath: "c" },
];

[{ projectTitle: "css project", category: "css", imgpath: "b" }];
const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  return (
    <main className="flex">
      <section className="  left-section flex">
        <button
          onClick={() => {
            setcurrentActive("all");
            

            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setcurrentActive("css");
            const newArr = myProjects.filter((item) =>{
              return item.category === "css"
            })

            setArr(newArr);
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            setcurrentActive("javascript");
            const newArr = myProjects.filter((item) =>{
              return item.category === "javascript"
            })

            setArr(newArr);
          }}
          className={currentActive === "javascript" ? "active" : null}
        >
         JavaScript
        </button>
        <button
          onClick={() => {
            setcurrentActive("react");
            const newArr = myProjects.filter((item) =>{
              return item.category === "react"
            })

            setArr(newArr);
          }}
          className={currentActive === "react" ? "active" : null}
        >
         React
        </button>
      </section>
      <section className=" flex right-section">
        {arr.map((item) => {
          return (
            <article key={item.imgpath} className="card">
              <img src="./test.jpg" width={266} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">
                  👨‍💻 **Développeur Full-Stack à la recherche d'un contrat de
                  professionnalisation*
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a
                    style={{ alignSelf: "end" }}
                    className="link  flex"
                    href=""
                  >
                    more <span className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;

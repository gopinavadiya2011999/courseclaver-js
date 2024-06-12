import person from "./assets/person.svg";
import search from "./assets/search.svg";
import image from "./assets/image.png";
import React, { useState, useEffect } from "react";

import one from "./assets/one.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import four from "./assets/four.png";
import five from "./assets/five.png";
import six from "./assets/six.png";
import linkedin from "./assets/linkedin.png";
import facebook from "./assets/facebook.png";
import behance from "./assets/behance.png";
import pinterest from "./assets/pinterest.png";
import instagram from "./assets/instagram.png";
import "./App.css";

const PersonImages = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth >= 992);
    }

    handleResize();
    console.log(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardList = [
    {
      title: "Lörem ipsum patt karirenyst",
      image: one,
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
    },
    {
      title: "Lörem ipsum patt karirenyst",
      image: two,
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
    },
    {
      title: "Lörem ipsum patt karirenyst",
      image: three,
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
    },
    {
      title: "Lörem ipsum patt karirenyst",
      image: four,
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
    },
    {
      title: "Lörem ipsum patt karirenyst",
      image: five,
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
    },
    {
      title: "Lörem ipsum patt karirenyst",
      image: four,
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
    },
    {
      title: "Lörem ipsum patt karirenyst",
      image: six,
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
    },
    {
      title: "Lörem ipsum patt karirenyst",
      image: three,
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
    },
    {
      title: "Lörem ipsum patt karirenyst",
      image: two,
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
    },
  ];

  return (
    <>
      <nav>
        <div>
          <ul className="navclass">
            <li>
              <a href="https://www.google.com/search?q=translate+english+to+gujarati&rlz=1C5CHFA_enIN1043IN1043&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQwxNTU1ODcwOWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8">
                <img
                  src="https://picsum.photos/200/300"
                  alt="Avatar Logo"
                  style={{ width: "35px", height: "35px" }}
                  className="rounded-pill"
                />
              </a>
            </li>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#" style={{ margin: "0px 8vw 0px 1.5vw" }}>
                  Contact
                </a>
              </li>

              <li>
                <a
                  style={{ margin: "0px 0.5vw 0px 0px" }}
                  href="https://www.google.com/search?q=translate+english+to+gujarati&rlz=1C5CHFA_enIN1043IN1043&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQwxNTU1ODcwOWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8"
                >
                  <img
                    src={search}
                    style={{ width: 17, height: 15 }}
                    alt="Search"
                  ></img>
                </a>
              </li>
              <li>
                <a
                  style={{ margin: "0px 0vw" }}
                  href="https://www.google.com/search?q=translate+english+to+gujarati&rlz=1C5CHFA_enIN1043IN1043&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQwxNTU1ODcwOWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8"
                >
                  <img
                    src={person}
                    style={{ width: 15, height: 20 }}
                    alt="Profile"
                  ></img>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </nav>

      <hr style={{ width: "100vw", border: "1px solid white" }} />

      <div className="navnav">
        <ul>
          <li>
            <span className="latestBlog">Latest Blog</span>
          </li>
          <ul>
            <li>
              <a>Urban Planning</a>
            </li>
            <li>
              <a>Graphics Design</a>
            </li>
            <li>
              <a>Web Design</a>
            </li>
            <li>
              <a>UX/UI Design</a>
            </li>
            <li>
              <a>Technology</a>
            </li>
          </ul>
        </ul>
      </div>

      <div className="container-fluid mt-4">
        <div className="position-relative">
          <img src={image} alt="image" className="image-stack " />
          <div
            className="position-absolute top-50"
            style={{ right: "2vh", transform: "translateY(-50%)" }}
          >
            <div class="spnaclass ">
              <div style={{ fontSize: "1.3vw" }}>Urban Planning</div>
              <div className="desc1">
                Lörem ipsum europlande krohiskap panstik, förväntis.
              </div>
              <div style={{ fontSize: "1vw" }}>
                Lörem ipsum europlande krohiskap panstik, förväntis. Klicktivism
                plada. Ekrofiling hedår, medan al, monoktig härgjord.
                Supranylingar kask. Geologi byligt dikapobelt. Lörem ipsum
                europlande krohiskap panstik, förväntis. Klicktivism plada.
              </div>

              <div className="d-flex justify-content-center align-content-center">
                <button
                  type="button"
                  className="btn btn-ligh button"
                  style={{
                    marginTop: "10px",
                    padding: "0.1vw 1.2vw",
                    fontSize: "1vw",

                    borderRadius: "25px",
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pad-mar">Recent Posts</div>
      <div
        className={`${
          isLargeScreen ? "" : "d-flex justify-content-center flex-wrap"
        }`}
        style={{ margin: "0px 20px" }}
      >
        {cardList.map(function (object, i) {
          return (
            <div
              key={i}
              className="card"
              style={{
                display: "inline-block",
                margin: "10px 10px",
                padding: "10px 10px",
                borderRadius: "20px",
                width: "22rem",
                background: "rgba(20, 94, 42, 1)",
              }}
            >
              <img
                src={object.image}
                style={{ height: "284px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{object.title}</h5>
                <p className="card-text">{object.desc}</p>
                <div className="d-flex justify-content-center align-content-center">
                  <button
                    type="button"
                    className="btn btn-light button"
                    style={{
                      boxShadow:
                        "0 8px 16px 0 rgba(7, 25, 23, 0.5), 0 6px 20px 0 rgba(7, 25, 23, 0.2)",
                      borderRadius: "20px",
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="container text-center"
        style={{ fontWeight: "bold", fontSize: "28px", marginTop: "3vw" }}
      >
        daily blog
      </div>
      <div
        className="container text-center"
        style={{
          fontSize: "20px",
          marginTop: "1vw",
          width: "58%",
          marginBottom: "2vw",
        }}
      >
        Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i
        mandatpingis tes. Analigt anede. Arat lagen.Lörem ipsum patt kar i
        renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt
        anede.
      </div>
      

      <div className="container text-center" style={{marginBottom:"29px"}}>
        <img src={instagram} />
        <img className="pads" src={behance} />
        <img src={linkedin} />
        <img className="pads" src={facebook} />
        <img src={pinterest} />
    
      </div>
      <div className="container-fluid text-start mx-2 bg-dark" style={{position:"fixed",bottom:'0'}}>
      © 2023 dailyblog. All rights reserved.
      </div>
    </>
  );
};

export default PersonImages;

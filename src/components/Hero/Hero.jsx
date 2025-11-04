import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";

import back from "../Hero/images/back.jpg";
import back1 from "../Hero/images/back1.jpg";
import back2 from "../Hero/images/back2.jpg";

const Hero = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: back,
      title: t("hero.slide1.title"),
      subtitle: t("hero.slide1.subtitle"),
    },
    {
      image: back1,
      title: t("hero.slide2.title"),
      subtitle: t("hero.slide2.subtitle"),
    },
    {
      image: back2,
      title: t("hero.slide3.title"),
      subtitle: t("hero.slide3.subtitle"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>
          <div className="content container">
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <a href="#contact" className="hero-btn">
              {t("hero.contactBtn")}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;

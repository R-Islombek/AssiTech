import React from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import raketa from "../Services/images/raketa.png";
import "./Services.css";

const Services = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="services" ref={ref}>
      <div className="container">
        <div className="services__container">
          <div className="services__left">
            <h3 className="services__title">{t("services.title")}</h3>
            <p className="services__text">{t("services.text1")}</p>
          </div>

          <div className="services__bottom">
            <h3 className="services__title-name">{t("services.title1")}</h3>
            <ul className="services__list">
              <li className="services__item">
                {inView && (
                  <CountUp
                    end={25}
                    duration={2.5}
                    suffix="+"
                    className="countup"
                  />
                )}
                <p className="services__label">{t("services.text2")}</p>
              </li>

              <li className="services__item">
                {inView && (
                  <CountUp
                    end={40}
                    duration={2.5}
                    suffix="+"
                    className="countup"
                  />
                )}
                <p className="services__label">{t("services.text3")}</p>
              </li>

              <li className="services__item">
                {inView && (
                  <CountUp
                    end={70}
                    duration={2.5}
                    suffix="+"
                    className="countup"
                  />
                )}
                <p className="services__label">{t("services.text4")}</p>
              </li>

              <li className="services__item">
                {inView && (
                  <CountUp
                    end={300}
                    duration={2.5}
                    suffix="+"
                    className="countup"
                  />
                )}
                <p className="services__label">{t("services.text5")}</p>
              </li>

              <li className="services__item raketa__item">
                <img src={raketa} alt="Rocket" className="raketa__img" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

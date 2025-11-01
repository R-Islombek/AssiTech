import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css"
import Logo from "../Header/images/logo.jpg";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <a href="#" className="header__logo">
            <img src={Logo} alt="Logo" />
          </a>
          <ul className={`header__list ${menuOpen ? "open" : ""}`}>
            <li className="header__item" onClick={handleLinkClick}>
              <a className="header__link" href="#about">{t("header.about")}</a>
            </li>
            <li className="header__item" onClick={handleLinkClick}>
              <a className="header__link" href="#product">{t("header.product")}</a>
            </li>
            <li className="header__item" onClick={handleLinkClick}>
              <a className="header__link" href="#services">{t("header.services")}</a>
            </li>
            <li className="header__item" onClick={handleLinkClick}>
              <a className="header__link" href="#contact">{t("header.contact")}</a>
            </li>
            <li className="header__item" onClick={handleLinkClick}>
              <a className="header__link" href="#installation">{t("header.installation")}</a>
            </li>
            <li className="header__item lang">
              <select
                className="lang-select"
                onChange={(e) => changeLanguage(e.target.value)}
                value={localStorage.getItem("i18nextLng") || "en"}
              >
                <option value="uz">UZ</option>
                <option value="en">EN</option>
                <option value="ru">RU</option>
              </select>
            </li>
          </ul>

          <button
            className={`burger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

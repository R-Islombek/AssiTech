import React from 'react'
import { useTranslation } from "react-i18next";
import "./Main.css"
import Logo from "../Main/images/logo.jpg"
const main = () => {
     const { t, i18n } = useTranslation();
     return (
          <div className='main'>
               <div className='container'>
                    <div className='main__container'>
                         <h2 className='main__title'>{t("main.title")}</h2>
                         <ul className='main__list'>
                              <li className='main__item'>
                                   <p className='main__text1'>{t("main.span")}</p>
                                   <p className='main__text2'>{t("main.span1")}</p>
                              </li>
                              <li className='main__item'>
                                   <p className='main__text3'>{t("main.text1")}</p>
                                   <p className='main__text4'>{t("main.text2")}</p>
                                   <p className='main__text5'>{t("main.text3")}</p>
                              </li>
                              <li className='main__item1'>
                                   <img className='main__img' src={Logo} alt="" />
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     )
}

export default main
import React from 'react';
import { useTranslation } from "react-i18next";
import "./Services.css"
const Services = () => {
      const { t } = useTranslation();
  return (
      <div className='services'>
            <div className='container'>
                 <div className='services__container'>
                       <div className='services__left'>
                            <h3 className='services__title'>{t("services.title")}</h3>
                            <p className='services__text'>{t("services.text1")}</p>
                       </div>  
                       <div className='services__bottom'>
                            <h3 className='services__title-name'>{t("services.title1")}</h3>
                            <ul className='services__list'>
                                <li className='services__item'>
                                      
                                </li>
                            </ul>
                       </div>
                 </div>
            </div>
      </div>
  )
}

export default Services
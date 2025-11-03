import React from 'react';
import { useTranslation } from "react-i18next";
import Header from './components/Header/Header';
import Main from './components/Main/main';
import "./App.css"
import Hero from './components/Hero/Hero';
const App = () => {
  const { i18n } = useTranslation();
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value); 
  };

  return (
    <div>
         <Header/>
         <Hero/>
         <Main/>
    </div>
  )
}

export default App
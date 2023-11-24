import Skills from "./components/Skills/Skills";
import Header from "./components/Header/Header";
import AboutME from "./components/AboutMe/AboutMe";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";



export default function App() {
  return (
    <div className="app">

     <Header/>
     <AboutME />
     <Skills />
     <Portfolio/>
     <Contact />
     
    </div>
  );
}




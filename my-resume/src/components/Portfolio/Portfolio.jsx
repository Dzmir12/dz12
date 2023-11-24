import style from "./Portfolio.module.css";
import img1 from "./../../assets/weather-app1.png";
import img2 from "./../../assets/old-calculator.png";
import img3 from "./../../assets/paper-with-pen-.png";
import SubHead from "../SubHead/SubHead";
import { useMediaQuery } from "react-responsive";

let portfolioItem=[
  {
    id:1,
    img:img1,
    title:'Weatherapp',
    gitLink:"https://github.com/Dzmir12/amir12/tree/main/weather-app",
    demoLink:"https://weather12a.vercel.app/"
  },
  {
    id:2,
    img:img2,
    title:'Calculatorapp',
    gitLink:"https://github.com/Dzmir12/amir12/tree/main/calculator",
    demoLink:"https://calculator12a.vercel.app/"
  },
  {
    id:3,
    img:img3,
    title:'Quizapp',
    gitLink:"https://github.com/Dzmir12/amir12/tree/main/quize-app",
    demoLink:"https://quizapp12a.vercel.app/"
  },

]



function Portfolio() {
    
  const isWeb = useMediaQuery({ query: "(max-width: 1444px)" });
  const isWeb2 = useMediaQuery({ query: "(max-width: 1077px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 866px)" });
  const isTablet2 = useMediaQuery({ query: "(max-width: 606px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 496px)" });

  return (
    <div className={style.portfolio}>
      <SubHead
        subtitle={"ShowCase"}
        title={"My Portfolio"}
        className={style.subHeadFixed}
      />
       <div className={style.portfolioItemContainer}>
      {portfolioItem.map((item,i)=>{
        return (<div className={` ${item.id===(2*i)?style.portfolioContainer2:style.portfolioContainer} ${isWeb?style.portfolioContainerFix:style.portfolioContainer} ${isWeb &&item.id===(2*i)?style.portfolioContainerFix1:style.portfolioContainer} 
        ${isWeb2?style.portfolioContainerFix2:style.portfolioContainer}
         ${isWeb2 &&item.id===(2*i)?style.portfolioContainerFix3:style.portfolioContainer}
         ${isTablet?style.portfolioContainerFix4:style.portfolioContainer}
         ${isTablet &&item.id===(2*i)?style.portfolioContainerFix5:style.portfolioContainer}
         ${isTablet2?style.portfolioContainerFix6:style.portfolioContainer}
         ${isTablet2 &&item.id===(2*i)?style.portfolioContainerFix7:style.portfolioContainer}
         ${isMobile?style.portfolioContainerFix8:style.portfolioContainer}
         ${isMobile &&item.id===(2*i)?style.portfolioContainerFix9:style.portfolioContainer}`} key={item.id}>
          <div className={style.portfolioImgContainer}>
            <img src={item.img} alt={item.title} className={style.portfolioImg} />
          </div>
          <p className={` ${item.id===(2*i)?style.portfolioP2:style.portfolioP}`}>{item.title}</p>

          <div className={` ${isMobile?style.portfolioButtonContainerFix:style.portfolioButtonContainer} ${isMobile&&item.id===(2*i)?style.portfolioButtonContainerFix1:style.portfolioButtonContainer}`}>
            <button className={` ${item.id===(2*i)?style.portfolioButton2:style.portfolioButton} `}><a href={item.gitLink} className={` ${item.id===(2*i)?style.a:''} `}>GitHub</a></button>
            <button className={` ${item.id===(2*i)?style.portfolioButton2:style.portfolioButton} `}><a href={item.demoLink} className={` ${item.id===(2*i)?style.a:''} `}>Live Demo</a></button>
          </div>
        </div>)
      })}
      </div>

    </div>
  );
}

export default Portfolio;

import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Faq from './Components/Faq';
import Utility from './Components/Utlitiy';
import Tokenomics from './Components/Tokenomics';
import Roadmap from './Components/Roadmap';
import Footer from './Components/Footer'; 
import BackToTop from "../src/assets/images/BackToTop.webp"
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Loader from './Components/Loader';


function App() {
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
   const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3000);
  }, []);
  return (
  <>
      {screenLoading ? (
        <Loader />
      ) : (
    <div className="App bg-[#0A4740] overflow-x-clip">
      <div className='bg-[url(./assets/images/herobg.webp)] lg:bg-BgSize bg-cover bg-center bg-repeat xl:min-h-screen sm:h-[730px] md:h-[874px] lg:h-[930px] h-[600px]'>
        <Header/>
      </div>  
      <About />
      <Tokenomics/>
      <Utility />
      <Roadmap/>
      <Faq />
      <Footer />
       <div onClick={() => top()} className={backToTop ? "shadow-[0_5px_16px_rgba(225,_225,_225,_1)] fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center backTopBtn rounded-[50px] bg-[#65AD41] cursor-pointer border-[2px] border-solid border-white transition-all ease-linear duration-300 right-[2%] z-[10]" : "hidden"}>
            <img src={BackToTop} alt='BackToTop' />
          </div>
      
          </div>
           )}
          </>
    
  );
}
 
export default App;

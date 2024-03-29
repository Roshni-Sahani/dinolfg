import React from "react";
import { useState } from "react";
import Aeroplane from "../assets/images/aeroplane.webp";
import CycleDino from "../assets/images/footcyclecroco.webp";
import SmallCycle from "../assets/images/bycyclecroco.webp";
import insta from "../assets/images/insta.svg"
import discord from "../assets/images/discord.svg"
import twitr from "../assets/images/twitr.svg"

const Header = () => {
  const [nav, setNav] = useState(true);
  if (nav === false) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <>
      <div className="lg:bg-BgSize bg-cover bg-center bg-repeat xl:min-h-screen sm:h-[730px] md:h-[874px] lg:h-[930px] h-[600px] relative">
        <img
          src={CycleDino}
          alt="CartoonImg1"
          className=" absolute right-[7%] bottom-[10%] lg:max-w-[211px] sm:max-w-[140px] max-w-[80px] z-[1] walking-img w-full"
        />
        <img
          src={SmallCycle}
          alt="CartoonImg2"
          className=" absolute left-[50%] bottom-[18%] ImgAnimate sm:max-w-[131px] max-w-[40px] w-full"
        />
        <div className="container xl:max-w-[1156px] mx-auto xl:px-3 px-6 pt-[28px]">
          <div className=" flex justify-between items-center md:pt-[4px] py-[10px] md:pb-[5.43px] pl-6 pr-[7.42px] bg-white border-b-[4px] border-solid border-[black] rounded-[61.102px] ">
            <h1 className="ff-lucky font-normal cursor-pointer leading-[94%] drop-shadow-[0px_1.337px_0px_#000] sm:text-[39.125px] text-[24px]">
              <span className="text-[#FBA11D]">D</span>
              <span className="text-[#23AAAC]">i</span>
              <span className="text-[#D45B07]">n</span>
              <span className="text-[#8EC627]">o</span>
              <span className="text-[#FCCA2B]">L</span>
              <span className="text-[#8F78D2]">F</span>
              <span className="text-[#8EC627]">G</span>
            </h1>
            <div className="flex gap-[136px]">
              <ul
                className={`${nav ? "left-[-100%]" : "left-0"}
            max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:z-[7] bg-white max-lg:transition-all max-lg:ease-linear max-lg:duration-300 max-lg:min-h-screen max-lg:flex-col max-lg:justify-center flex gap-[28px] items-center`}
              >
                <li onClick={() => setNav(!nav)}>
                  <a
                    className="hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] font-chewy relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear ff_chewy text-black text-[18px] font-normal leading-normal no-underline"
                    href="#About"
                  >
                    About
                  </a>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <a
                    className="hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] font-chewy relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear ff_chewy text-black text-[18px] font-normal leading-normal no-underline"
                    href="#Tokenomic"
                  >
                    Tokenomic
                  </a>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <a
                    className="hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] font-chewy relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear ff_chewy text-black text-[18px] font-normal leading-normal no-underline"
                    href="#Roadmap"
                  >
                    Roadmap
                  </a>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <a
                    className="hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] font-chewy relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear ff_chewy text-black text-[18px] font-normal leading-normal no-underline"
                    href="#Faq"
                  >
                    FAQ
                  </a>
                </li>
                <li className="md:hidden">
                  <div className="flex gap-2 items-center">
                    <a
                      href="https://twitter.com/login"
                      target="_blank"
                      className="duration-300 hover:translate-y-[-5px]"
                    >
                      <img src={twitr} alt="insta" />
                    </a>
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      className="duration-300 hover:translate-y-[-5px]"
                    >
                      <img src={discord} alt="discord" />
                    </a>
                    <a
                      href="https://www.instagram.com/accounts/login/"
                      target="_blank"
                      className="duration-300 hover:translate-y-[-5px]"
                    >
                      <img src={insta} alt="insta" />
                    </a>
                  </div>
                </li>
                <li className="md:hidden">
                  <a
                    href=""
                    className="bg-[url(./assets/images/joinbtnbg.webp)] bg-cover bg-no-repeat text-black font-chewy text-[18px] font-normal leading-normal px-9 pt-[10px] pb-[17px]  hover:text-white transition-all duration-500 ease-in-out"
                  >
                    Join Now
                  </a>
                </li>
              </ul>
              <div className="hidden md:flex items-center gap-[13px]">
                <div className="flex gap-2 items-center">
                  <a href="" className="duration-300 hover:translate-y-[-5px]">
                    <img src={twitr} alt="" />
                  </a>
                  <a href="" className="duration-300 hover:translate-y-[-5px]">
                    <img src={discord} alt="discord" />
                  </a>
                  <a href="" className="duration-300 hover:translate-y-[-5px]">
                    <img src={insta} alt="" />
                  </a>
                </div>
                <a
                  href=""
                  className="bg-[url(./assets/images/joinbtnbg.webp)] bg-cover bg-no-repeat text-black font-chewy text-[18px] font-normal leading-normal px-9 pt-[10px] pb-[17px]  hover:text-white transition-all duration-500 ease-in-out"
                >
                  Join Now
                </a>
              </div>
            </div>
            <div
              onClick={() => setNav(!nav)}
              className="lg:hidden w-[27px] h-[21px] mr-[17px] relative z-[7] flex justify-between flex-col"
            >
              <span
                className={`${
                  nav ? "" : "rotate-[50deg] translate-y-[15px]"
                } bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  nav ? "" : "hidden"
                } bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  nav ? "" : "rotate-[-50deg] translate-y-[-50%]"
                } bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col-reverse items-center flex-wrap sm:pt-[83px] pt-[32px]">
            <div className="sm:w-5/12 w-full pt-[32px] sm:pt-0 flex items-end justify-center sm:justify-start">
              <img
                src={Aeroplane}
                alt="HelicopterImg"
                className="w-full sm:max-w-[394.14px] helo-header max-w-[250px]"
                data-aos="fade-right"
              />
            </div>
            <div className="sm:w-7/12 w-full flex justify-center">
              <h1
                className="text-[#FBA11D] leading-[90%] text-center lg:max-w-[398px] drop-shadow-[0px_6px_0px_#000] ff-lucky font-normal lg:text-[175.636px] md:text-[130px] sm:text-[100px] text-[64px] uppercase"
                data-aos="fade-left"
              >
                <span className="sm:block">
                  D<span className="text-[#23AAAC]">I</span>
                  <span className="text-[#D45B07]">N</span>
                  <span className="text-[#8EC627]">O</span>
                </span>
                <span className="text-[#8EC627]">L</span>
                <span className="text-[#FCCA2B]">F</span>
                <span className="text-[#8F78D2]">G</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;


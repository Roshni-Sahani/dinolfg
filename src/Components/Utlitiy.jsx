// import React from "react";
// import bigimg from "../assets/images/bigimg.webp"
// import cycleimg from "../assets/images/cycleimg.webp"
// import greentree from "../assets/images/greentree.webp"
// import utilityLayer from "../assets/images/utilitylayer.webp";
// import TimelineLayer from "../assets/images/roadmaplayer.webp";

// const Utility = () => {
//   return (
//     <div className="relative overflow-hidden xl:pb-[466px] md:pb-[300px] sm:pb-[190px] xl:pt-[230px] sm:pt-[150px] pt-[100px] pb-[150px]">
//       <div className="container mx-auto xl:max-w-[1038px] xl:px-3 px-6 relative z-10">
//         <h2 className="font-chewy sm:text-[64px] text-[50px] font-normal text-white text-center leading-[132%]">
//           Utility and Usecase
//         </h2>
//         <div className="relative z-10 xl:mt-[158px] max-lg:overflow-hidden lg:mt-[100px] md:mt-[70px] mt-[40px] rounded-[20px] border border-solid lg:h-[266px] border-white bg-[#09655A] lg:py-[62px] pt-[40px] lg:pl-[39px] lg:pr-[26px] px-[20px] flex lg:justify-between lg:flex-row flex-col">
//           <div data-aos="fade-right">
//             <p className="max-w-[681px] xl:text-[32px] lg:text-[29px] sm:text-[32px] text-[23px] font-bal font-normal text-white leading-[119%]">
//               We are going to work hard in otder to add{" "}
//               <span className="text-[#8EC627]">$</span>
//               <span className="text-[#FBA11D]">D</span>
//               <span className="text-[#23AAAC]">I</span>
//               <span className="text-[#D45B07]">N</span>
//               <span className="text-[#FB5352]">O</span> to main platforms as a
//               form of payment
//             </p>
//             <p className="max-w-[695px] xl:text-[32px] lg:text-[29px] font-bal sm:text-[32px] text-[23px] font-normal text-white mt-[28px] leading-[120%]">
//               You will be able to buy a lot of things with{" "}
//               <span className="text-[#8EC627]">$</span>
//               <span className="text-[#FBA11D]">D</span>
//               <span className="text-[#23AAAC]">I</span>
//               <span className="text-[#D45B07]">N</span>
//               <span className="text-[#FB5352]">O</span>
//             </p>
//           </div>
//           <img
//             src={bigimg}
//             alt="crocoWithGlasses"
//             className="sm:max-w-[253px] max-w-[160px] lg:mt-0 mt-6  lg:h-[332px] utility_croco w-full"
//           />
//         </div>
//         <div className="relative max-lg:overflow-hidden z-20 lg:mt-[125px] mt-[60px] rounded-[20px] border border-solid bg-[#09655A] lg:py-[95px] pt-[40px] lg:pr-[27px] lg:pl-0 px-5 lg:h-[266px] border-white flex lg:justify-between lg:flex-row flex-col-reverse lg:items-center ">
//           <img
//             src={cycleimg}
//             alt="crocoWithCycle"
//             className="sm:max-w-[267px] utility_croco1 max-w-[160px] lg:h-[334px] lg:translate-y-[-35px] lg:mt-0 mt-7 lg:ml-[-6px]"
//           />
//           <div data-aos="fade-left" className="">
//             <p className="sm:text-[32px] text-[25px] font-normal lg:text-end font-bal text-center text-white leading-[119%]">
//               We are going to have staking and buyback/ burning mechanism
//             </p>
//           </div>
//         </div>
//         <img
//           src={greentree}
//           alt="utilityTree"
//           className="lg:max-w-[320px] max-w-[200px] w-full absolute lg:right-[-20%] right-[-14%] bottom-0"
//         />
//       </div>
//       <img
//         src={utilityLayer}
//         alt="utilityLayer"
//         className="absolute top-0 left-0 right-0 w-full"
//       />
//       <img
//         src={TimelineLayer}
//         alt="TimelineLayer"
//         className="absolute left-0 right-0 bottom-[-13px] w-full"
//       />
//     </div>
//   );
// };

// export default Utility;
import React from "react";
import UtilityCartoon1 from "../assets/images/UtilityCartoon1.webp";
import UtilityCartoon2 from "../assets/images/UtilityCartoon2.webp";
import utilityLayer from "../assets/images/utilitylayer.webp";
import UtilityTree from "../assets/images/UtilityTree.webp";
import roadmaplayer from "../assets/images/roadmaplayer.webp";

const Utility = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src={roadmaplayer}
          alt="RoadmapLayer"
          className="absolute xl:h-[298px] sm:h-[250px] h-[110px] bottom-0 left-0 right-0 w-full"
        />
        <img
          src={utilityLayer}
          alt="UtilityLayer"
          className="absolute top-0 w-full left-0 right-0"
        />
        <div className="container mx-auto xl:max-w-[1038px] xl:pt-[250px] lg:pt-[180px] pt-[80px] mb-[168px] xl:px-3 px-6 z-[1] relative">
          <img
            src={UtilityTree}
            alt="UtilityTree"
            className="absolute bottom-[11px] right-[-22%] z-[-1] w-full max-w-[350px]"
          />
          <h2
            className=" sm:text-[64px] text-[50px] font-normal leading-[131%] text-white text-center font-chewy"
            data-aos="zoom-in"
          >
            Utility and Usecase
          </h2>
          <div
            className="rounded-[20px] border sm:pl-[39px] sm:pr-[24px] px-6 border-white bg-[#09655A] border-solid lg:h-[266px] flex items-center lg:flex-row flex-col xl:mt-[158px] lg:mt-[100px] sm:mt-[80px] mt-[45px]"
            data-aos="zoom-in"
          >
            <div className="pt-[28px] lg:pt-0">
              <p className="text-white lg:max-w-[681px] lg:text-start text-center font-normal font-bal leading-[119%] sm:mb-[28px] mb-[18px] lg:text-[32px] text-[24px]">
                We are going to work hard in otder to add{" "}
                <span className="text-[#8EC627] font-bold">$</span>
                <span className="text-[#FBA11D] font-bold">D</span>
                <span className="text-[#23AAAC] font-bold">I</span>
                <span className="text-[#D45B07] font-bold">N</span>
                <span className="text-[#FB5352] font-bold">O</span> to main
                platforms as a form of payment
              </p>
              <p className="text-white lg:text-[32px] text-[24px] lg:text-start text-center font-normal font-bal leading-[119%] lg:max-w-[695px]">
                You will be able to buy a lot of things with{" "}
                <span className="text-[#8EC627] font-bold">$</span>
                <span className="text-[#FBA11D] font-bold">D</span>
                <span className="text-[#23AAAC] font-bold">I</span>
                <span className="text-[#D45B07] font-bold">N</span>
                <span className="text-[#FB5352] font-bold">O</span>
              </p>
            </div>
            <img
              src={UtilityCartoon1}
              alt="UtilityCartoon1"
              className=" w-full sm:max-w-[255.51px] max-w-[180px] vert_move1 lg:translate-y-[-27px] mt-[60px] lg:mt-0 lg:h-[323px]"
            />
          </div>
          <div
            className="lg:mt-[125px] sm:mt-[80px] mt-[50px] flex lg:flex-row flex-col-reverse items-center lg:pr-[27px] px-6 lg:px-0 lg:pt-0 pt-[28px] lg:justify-between bg-[#09655A] border border-solid border-white rounded-[20px] lg:h-[266px] xl:mb-[441px] md:mb-[407px] mb-[180px]"
            data-aos="zoom-in"
          >
            <img
              src={UtilityCartoon2}
              alt="UtilityCartoon2"
              className="w-full sm:max-w-[267px] max-w-[180px] lg:h-[334.16px] vert_move2 lg:translate-y-[-41px]"
            />
            <p className="lg:max-w-[681px] lg:text-end text-center mb-[70px] lg:mb-0 text-white font-normal font-bal lg:text-[32px] text-[24px]">
              We are going to have staking and buyback/ burning mechanism
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Utility;

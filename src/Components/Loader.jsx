import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loading bg-gradient-to-b from-[#c3e9ff] to-[#eaf7ff] min-h-screen fixed flex flex-col justify-center items-center left-0 right-0">
        <div className="typewriter">
          <h1 className="ff_luckydino font-normal cursor-pointer leading-[94%] drop-shadow-[0px_1.337px_0px_#000] sm:text-[80px] text-[50px] ff-lucky animate-bounce">
            <span className="text-[#FBA11D]">D</span>
            <span className="text-[#23AAAC]">i</span>
            <span className="text-[#D45B07]">n</span>
            <span className="text-[#8EC627]">o</span>
            <span className="text-[#FCCA2B]">L</span>
            <span className="text-[#8F78D2]">F</span>
            <span className="text-[#8EC627]">G</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Loader;

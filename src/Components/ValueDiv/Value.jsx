/* eslint-disable react/no-unescaped-entities */
import simple from '../../Assets/images/khazzilogo.png';
import dane from '../../Assets/images/logo1.png';

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[20px] md:text-[25px] py-[2rem] pb-[3rem] font-bold w-full md:w-[400px] block">
        The value
      </h1>
      
      {/* Grid for Values */}
      <div className="grid gap-[3rem] md:gap-[5rem] lg:gap-[10rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        
        {/* First Value Card */}
        <div className="singleGrid bg-[#e2dcdcee] cursor-pointer rounded-[10px] hover:bg-[#97979c] p-[1.5rem] transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" className="w-[70%] bg-black" />
            </div>
            <span className="font-semibold text-textColor text-[16px] md:text-[18px]">Khazzi The Dev</span>
          </div>
          <p className="text-[12px] md:text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Solving problems is our cause.
          </p>
        </div>

        {/* Second Value Card */}
        <div className="singleGrid bg-[#e2dcdcee] cursor-pointer rounded-[10px] hover:bg-[#97979c] p-[1.5rem] transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={dane} alt="" className="w-[70%] bg-black" />
            </div>
            <span className="font-semibold text-textColor text-[16px] md:text-[18px]">The HuntDev</span>
          </div>
          <p className="text-[12px] md:text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Solving problems is our cause.
          </p>
        </div>

        {/* Third Value Card */}
        <div className="singleGrid bg-[#e2dcdcee] cursor-pointer rounded-[10px] hover:bg-[#97979c] p-[1.5rem] transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={dane} alt="" className="w-[70%] bg-black" />
            </div>
            <span className="font-semibold text-textColor text-[16px] md:text-[18px]">The HuntDev</span>
          </div>
          <p className="text-[12px] md:text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Solving problems is our cause.
          </p>
        </div>

      </div>

      {/* Call-to-Action Card */}
      <div className="card mt-[2rem] flex flex-col md:flex-row justify-between items-center bg-blueColor p-[2rem] md:p-[5rem] rounded-[10px] text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h1 className="text-blueColor text-[24px] md:text-[30px] font-bold">
            Ready to hire?
          </h1>
          <h2 className="text-textColor text-[20px] md:text-[25px] font-bold">
            Let's get Started!
          </h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[4px] px-[20px] md:px-[50px] text-[16px] md:text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Value;

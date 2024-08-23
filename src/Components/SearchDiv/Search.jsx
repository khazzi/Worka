import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { CiLocationOn } from 'react-icons/ci';

const Search = () => {
  return (
    <div className="searchDiv bg-greyIsh rounded-[10px] p-[2rem] md:p-[3rem]">
      <form action="">
        <div className="firstDiv flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 bg-white p-4 md:p-5 rounded-[8px] shadow-lg shadow-greyIsh-700">
          
          {/* Search by Product */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <AiOutlineSearch className="icon text-[20px] md:text-[25px]" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search by Product..."
            />
            <AiOutlineCloseCircle className="text-[25px] md:text-[30px] hover:text-textColor icon" />
          </div>

          {/* Search by Location */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <CiLocationOn className="icon text-[20px] md:text-[25px]" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search by Location..."
            />
            <AiOutlineCloseCircle className="text-[25px] md:text-[30px] hover:text-textColor icon" />
          </div>

          {/* Search by Skill */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <GiSkills className="icon text-[20px] md:text-[25px]" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search by Skill..."
            />
            <AiOutlineCloseCircle className="text-[25px] md:text-[30px] hover:text-textColor icon" />
          </div>

          {/* Search Button */}
          <button className="bg-blueColor text-white py-3 md:py-4 px-6 md:px-10 rounded-[10px] mt-4 md:mt-0 w-full md:w-auto">
            Search
          </button>
        </div>
      </form>

      {/* Secondary Filters */}
      <div className="secDiv flex flex-col md:flex-row items-center gap-4 md:gap-10 justify-center mt-5">
        
        {/* Sort by */}
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-sm md:text-base">Sort by:</label>
          <select
            name="relevance"
            id="relevance"
            className="bg-white px-4 py-2 rounded-[3px] text-sm md:text-base"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        {/* Type */}
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-sm md:text-base">Type:</label>
          <select
            name="type"
            id="type"
            className="bg-white px-4 py-2 rounded-[3px] text-sm md:text-base"
          >
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        {/* Level */}
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-sm md:text-base">Level:</label>
          <select
            name="level"
            id="level"
            className="bg-white px-4 py-2 rounded-[3px] text-sm md:text-base"
          >
            <option value="">Beginner</option>
            <option value="">Intermediary</option>
            <option value="">Pro</option>
            <option value="">Master</option>
          </select>
        </div>

        {/* Clear All */}
        <span className="text-[#a1a1a1] cursor-pointer text-sm md:text-base mt-2 md:mt-0">
          Clear All
        </span>
      </div>
    </div>
  );
};

export default Search;

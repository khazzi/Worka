import database from '../database'; // Ensure correct path to database
import { BiTimeFive } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Jobs = () => {
  // Get the first 2 jobs for small screens
  const jobsToShow = database.slice(0, 2);

  return (
    <div>
      
      <div className='jobContainer flex flex-wrap gap-6 justify-center py-10'>
      <h1 className='text-blueColor font-bold text-[16px]'>Trending Hire!!!</h1>
        {jobsToShow.map((data) => {
          return (
            <div
              key={data.id}
              className="group w-full sm:w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg hover:shadow-lg transition-all duration-300"
            >
              <div className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>
                  {data.title}
                </h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive />
                  {data.time}
                </span>
              </div>
              <h6 className="text-[#333]">{data.location}</h6>
              <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] group-hover:text-white'>
                {data.desc}
              </p>
              <div className="company flex items-center gap-2 mt-4">
                <img
                  src={data.image}
                  alt="Company Logo"
                  className='w-[15%] h-[15%] sm:w-[10%] sm:h-[10%] rounded-full'
                />
                <span className="text-[14px] text-textColor group-hover:text-white">
                  {data.company}
                </span>
              </div>
              <button className='mt-4 border-[2px] rounded-[10px] p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover:text-textColor'>
                Hire Now
              </button>
            </div>
          );
        })}
      </div>
      <div className='flex justify-center mt-6'>
        <Link to="/all-jobs" className='text-blueColor font-bold text-[16px]'>
          View More
        </Link>
      </div>
    </div>
  );
};

export default Jobs;

import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navBar flex justify-between items-center p-[3rem] relative'>
      <div className='logoDiv'>
        <h1 className='logo text-[25px] text-blueColor'>
          <Link to="/"> <strong>Wor</strong>ka</Link>
        </h1>
      </div>

      {/* Hamburger menu icon for mobile */}
      <div
        className='md:hidden cursor-pointer hover:bg-blue-100 p-2 rounded'
        onClick={toggleMenu}
      >
        <svg
          className='w-6 h-6 text-blueColor'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      </div>

      {/* Full menu for larger screens */}
      <div className='menu hidden md:flex gap-8'>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Jobs</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Companies</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>About</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Contact</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Blog</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Login</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Register</li>
      </div>

      {/* Dropdown menu for mobile */}
      <div
        className={`menu ${isOpen ? 'block' : 'hidden'} md:hidden flex flex-col gap-4 mt-2 absolute top-[4rem] right-0 bg-white shadow-md p-4 rounded-lg z-50`}
      >
        <li className='menuList text-[#6f6f6f] sm:hover:text-blueColor'>Jobs</li>
        <li className='menuList text-[#6f6f6f] sm:hover:text-blueColor'>Companies</li>
        <li className='menuList text-[#6f6f6f] sm:hover:text-blueColor'>About</li>
        <li className='menuList text-[#6f6f6f] sm:hover:text-blueColor'>Contact</li>
        <li className='menuList text-[#6f6f6f] sm:hover:text-blueColor'>Blog</li>
        <li className='menuList text-[#6f6f6f] sm:hover:text-blueColor'>Login</li>
        <li className='menuList text-[#6f6f6f] sm:hover:text-blueColor'>Register</li>
      </div>
    </div>
  );
}

export default NavBar;

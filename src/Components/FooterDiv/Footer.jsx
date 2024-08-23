/* eslint-disable react/no-unescaped-entities */
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-blueColor text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-white">Wor</span>
            <span className="text-white">ka</span>
          </h1>
          <p className="opacity-70">
          We specialize in workforce solutions, offering recruitment process outsourcing, contractual and logistics management.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li className="opacity-70 hover:opacity-100 cursor-pointer">About us</li>
            <li className="opacity-70 hover:opacity-100 cursor-pointer">Features</li>
            <li className="opacity-70 hover:opacity-100 cursor-pointer">News</li>
            <li className="opacity-70 hover:opacity-100 cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li className="opacity-70 hover:opacity-100 cursor-pointer">Account</li>
            <li className="opacity-70 hover:opacity-100 cursor-pointer">Support Center</li>
            <li className="opacity-70 hover:opacity-100 cursor-pointer">Feedback</li>
            <li className="opacity-70 hover:opacity-100 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <p className="opacity-70">Khazzi.dev@gmail.com</p>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" aria-label="Instagram" className="bg-white text-blueColor p-2 rounded-full hover:opacity-80 transition-opacity">
              <AiFillInstagram size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="bg-white text-blueColor p-2 rounded-full hover:opacity-80 transition-opacity">
              <AiOutlineTwitter size={24} />
            </a>
            <a href="#" aria-label="Facebook" className="bg-white text-blueColor p-2 rounded-full hover:opacity-80 transition-opacity">
              <BsFacebook size={24} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-white opacity-20 pt-5 text-center">
        <p className="opacity-70">&copy; 2023 Worka. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

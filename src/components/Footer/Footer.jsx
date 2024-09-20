import React from "react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { BsLink } from "react-icons/bs"; 
import { MdOutlineWeb } from "react-icons/md"; 

const Footer = () => {
  return (
    <div className="rounded-t-3xl">
      <div className="bg-primary/5">
        <div className="container">
          <div className="py-5 border-t-2 border-gray-300/10 text-black text-center">
            {/* Brand info section */}
            <div className="py-8 px-4 space-y-4 flex flex-col items-center">
              <div className="text-2xl flex items-center gap-2 font-bold justify-center">
                <MdComputer className="text-secondary text-4xl" />
                <p className="">CryptoMinds</p>
              </div>
              <p className="max-w-lg text-center">
  Welcome to our platform, where development meets collaboration. Connect with experts, share your code, and contribute to open source projects. Together, we build solutions for tomorrow.
</p>

            </div>

            {/* Footer Links */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold mb-5 text-center">Important Links</h1>
              <ul className="flex flex-wrap gap-8 justify-center">
                <li>
                  <a href="#" className="hover:text-secondary duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary duration-200">
                    Notes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary duration-200">
                    Interview Prep
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary duration-200">
                    Contact Us
                  </a>
                </li>
              </ul>

              {/* Social media icons */}
              <div className="flex justify-center gap-5 mt-6">
              <a href="https://github.com/dpvasani" target="_blank" className="hover:text-secondary duration-200">
                  <FaGithub className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/dpvasani56/" className="hover:text-secondary duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
              <a href="https://www.instagram.com/dp_vasani56" className="hover:text-secondary duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="mailto:cryptominds.developers@gmail.com" className="hover:text-secondary           duration-200">
                    <FaEnvelope className="text-3xl" />
                </a>

                
                
                <a href="https://x.com/vasanidarshan56/" target="_blank" className="hover:text-secondary duration-200">
                  <FaTwitter className="text-3xl" />
                </a>
                <a href="https://leetcode.com/dpvasani_56" target="_blank" className="hover:text-secondary duration-200">
                  <SiLeetcode className="text-3xl" />
                </a>
                <a href="https://linktr.ee/dpvasani56" target="_blank" className="hover:text-secondary duration-200">
                  <BsLink className="text-3xl" />
                </a>
                <a href="https://topmate.io/dpvasani_56" target="_blank" className="hover:text-secondary duration-200">
                  <MdOutlineWeb className="text-3xl" />
                </a>
                <a href="https://codolio.com/profile/dpvasani56" target="_blank" className="hover:text-secondary duration-200">
                  <MdOutlineWeb className="text-3xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-8">
            <div className="text-center py-6 border-t-2 border-gray-800/10">
              <span className="text-sm text-black/60">
                @ Copyright 2024 Darshan Vasani
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

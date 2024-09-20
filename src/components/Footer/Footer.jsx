import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdComputer } from "react-icons/md";

const Footer = () => {
  return (
    <div className="rounded-t-3xl">
      <div className="bg-primary/5">
        <div className="container">
          <div className="py-5 border-t-2 border-gray-300/10 text-black text-center">
            {/* Brand info section */}
            <div className="py-8 px-4 space-y-4 flex flex-col items-center">
              <div className="text-2xl flex items-center gap-2 font-bold uppercase justify-center">
                <MdComputer className="text-secondary text-4xl" />
                <p className="">E-Tutor</p>
              </div>
              <p className="max-w-lg text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                accusamus nulla labore cumque id ipsum molestias architecto
                voluptatum saepe ab.
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
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary duration-200">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary duration-200">
                    Login
                  </a>
                </li>
              </ul>

              {/* Social media icons */}
              <div className="flex justify-center gap-5 mt-6">
                <a href="#" className="hover:text-secondary duration-200">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-8">
            <div className="text-center py-6 border-t-2 border-gray-800/10">
              <span className="text-sm text-black/60">
                @copyright 2024 Darshan Vasani
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

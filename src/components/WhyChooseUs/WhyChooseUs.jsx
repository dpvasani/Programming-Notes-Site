import React from "react";
import { FaBook, FaDownload, FaGithub, FaLaptopCode, FaPoll } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import { FaCode } from "react-icons/fa";

const WhyChooseData = [
    {
      id: 1,
      title: "Production-Grade Code Notes",
      desc: "Access high-quality, production-ready code notes curated by industry professionals.",
      icon: <FaCode />,
      bgColor: "#0063ff",
      delay: 0.3,
    },
    {
      id: 2,
      title: "Comprehensive Coverage",
      desc: "Find a wide variety of notes covering multiple programming languages, frameworks, and tools.",
      link: "/",
      icon: <FaBook />,
      bgColor: "#694afb",
      delay: 0.6,
    },
    {
      id: 3,
      title: "Downloadable Resources",
      desc: "Download notes and code snippets easily for offline access and future reference.",
      link: "/",
      icon: <FaDownload />,
      bgColor: "#38b6ff",
      delay: 0.9,
    },
    {
      id: 4,
      title: "Code with GitHub Integration",
      desc: "Explore code notes integrated with GitHub repositories for better version control and collaboration.",
      link: "/",
      icon: <FaGithub />,
      bgColor: "#000000",
      delay: 0.9,
    },
    {
      id: 5,
      title: "Accessible Anywhere",
      desc: "Access your notes anytime, anywhere, from any device with ease.",
      link: "/",
      icon: <FaLaptopCode />,
      bgColor: "#3533cd",
      delay: 0.9,
    },
    {
      id: 6,
      title: "Real-Time Collaboration",
      desc: "Collaborate with others in real-time to share knowledge and improve your code.",
      link: "/",
      icon: <FaPoll />,
      bgColor: "#8a0dfa",
      delay: 0.9,
    },
  ];
  
const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="font-semibold text-orange-600">
            Why Choose Us
          </h1>
          <p className="font-semibold text-3xl">
            Benefits of Downloading Notes From Us
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              >
                {/* icon section */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

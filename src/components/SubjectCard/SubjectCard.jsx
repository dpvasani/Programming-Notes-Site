import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCloud, FaRobot, FaShieldAlt, FaNetworkWired, FaDatabase, FaMobileAlt, FaBrain, FaCube, FaVrCardboard } from "react-icons/fa";

const subjectList = [
  {
    id: 1,
    name: "Artificial Intelligence",
    icon: <FaRobot />,
    color: "#ff6f00",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Web Development",
    icon: <FaLaptopCode />,
    color: "#007bff",
    delay: 0.3,
  },
  {
    id: 3,
    name: "Mobile App Development",
    icon: <FaMobileAlt />,
    color: "#28a745",
    delay: 0.4,
  },
  {
    id: 4,
    name: "Cloud Computing",
    icon: <FaCloud />,
    color: "#17a2b8",
    delay: 0.5,
  },
  {
    id: 5,
    name: "Cybersecurity",
    icon: <FaShieldAlt />,
    color: "#dc3545",
    delay: 0.6,
  },
  {
    id: 6,
    name: "Blockchain",
    icon: <FaCube />,
    color: "#6f42c1",
    delay: 0.7,
  },
  {
    id: 7,
    name: "Game Development",
    icon: <FaVrCardboard />,
    color: "#e83e8c",
    delay: 0.8,
  },
  {
    id: 8,
    name: "Networking",
    icon: <FaNetworkWired />,
    color: "#ffc107",
    delay: 0.9,
  },
  {
    id: 9,
    name: "Data Science",
    icon: <FaDatabase />,
    color: "#6610f2",
    delay: 1.0,
  },
  {
    id: 10,
    name: "See all",
    icon: <FaBrain />,
    color: "#343a40",
    delay: 1.1,
  },
];

const SubjectCard = () => {
  return (
    <>
      <div className="container py-14 md:py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className=" font-semibold text-orange-500">
            Our Notes & Code Domain
          </h1>
          <p className="font-semibold text-3xl">
            Find Online Notes in Any Domain
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {subjectList.map((subject) => {
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: subject.delay,
                }}
                className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
              >
                <div
                  style={{
                    color: subject.color,
                    backgroundColor: subject.color + "20",
                  }}
                  className="w-10 h-10 rounded-md flex justify-center items-center"
                >
                  {subject.icon}
                </div>
                <p>{subject.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SubjectCard;

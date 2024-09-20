import React from "react";
import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className="bg-secondary text-white py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              start={0}
              end={8147}
               suffix="+"
              duration={5}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Followers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={32000}
              separator=","
              suffix="+"
              duration={5}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Post Impression</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={10}
               suffix="+"
              duration={5}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Courses And Topic Notes</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={10000}
              separator=","
              suffix="+"
              duration={5}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Active students</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;

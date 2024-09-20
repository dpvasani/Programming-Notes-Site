import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";
import Banner from "./components/Banner/Banner";
import SubjectCard from "./components/SubjectCard/SubjectCard";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const BannerData = {
    image: Img1,
    tag: "Contribute On Your Time",
    title: "Empowering Developers through Open Source Contributions",
    subtitle:
      "Our platform allows you to contribute to open source projects based on your availability. Track your contributions, collaborate with other developers, and build your portfolio. The best system for managing open source contributions with easy accessibility. Whether you're a beginner or experienced developer, contribute to impactful projects.",
    link: "#",
  };
  
  const BannerData2 = {
    image: Img2,
    tag: "Flexible Collaboration",
    title: "Join a Global Community of Open Source Developers",
    subtitle:
      "Collaborate with talented developers across the world. Our platform helps you work on impactful open source projects that fit your schedule. Gain hands-on experience, build your network, and contribute to projects that matter. The easiest way to get involved in the open source community with flexible collaboration options.",
    link: "#",
  };
  

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <SubjectCard />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default App;

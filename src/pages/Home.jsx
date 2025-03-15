import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import HeroSection from "../components/UI/HeroSection";
import About from "./About";

const Home = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center gap-[350px]"> 
      <HeroSection />
      <About/>
    </div>
    </>
  );
};

export default Home;

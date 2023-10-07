import React from "react";
import Image from "next/image";
import startAbout from "../assets/star-about.png";

const About = () => {
  return (
    <div className="w-full bg-white border-4 border-t-0 border-black relative -z-10" id="about">
      <div className="absolute top-12 md:top-4 right-1/4 md:left-1/4 -z-10 max-sm:w-12">
        <Image src={startAbout} width={200} height={200} alt="about" />
      </div>
      <div className="md:w-4/5 mx-6 md:mx-auto py-16">
        <h2 className="text-black text-5xl md:text-8xl font-semibold mb-16 z-10">About</h2>
        <p className="text-black text-xl md:text-3xl font-semibold leading-relaxed">
          Hi, I&apos;m Arfi. <br/>A mobile application developer based in Surabaya
          with more than one year of experience. 
          {/* I am passionate about creating
          unique yet usable mobile applications. */}
        </p>
      </div>
    </div>
  );
};

export default About;

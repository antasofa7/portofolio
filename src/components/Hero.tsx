import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import searchIcon from "../assets/search-icon.png";
import dotSquare from "../assets/dot-square.png";
import starGreen from "../assets/star-green.png";
import rectangleViolet from "../assets/rectangle-violet.png";
import trianglePink from "../assets/triangle-pink.png";
import rectangleyellow from "../assets/rectangle-yellow.png";
import starMagenta from "../assets/star-magenta.png";
import ellipseViolet from "../assets/ellipse-violet.png";
import triangleGreen from "../assets/triangle-green.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-reindeer-moss border-4 border-black">
      <div className="max-sm:flex justify-center w-full p-4 hidden">
        <Link
          href="#"
          draggable="false"
          aria-labelledby="title"
          className="px-8 py-3 group bg-coin-slot shadow-neubrutal rounded-md text-white font-semibold hover:shadow-none"
        >
          <span id="title" className="tracking-wider">
            menu
          </span>
          <div
            className="flex justify-center absolute z-20 inset-0 py-6 px-12 bg-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path: polygon(0%_0%, 100%_0%, 100%_100%, 0%_100%)] group-hover:[clip-path: polygon(0%_0%, 100%_0%, 100%_0%, 0%_0%)]"
            aria-hidden="true"
          >
            <Navbar />
          </div>
        </Link>
      </div>
      <div className="max-sm:hidden">
        <Navbar />
      </div>
      <section className="relative h-5/6 max-sm:m-4">
        <div className="flex flex-col items-center w-full md:w-auto right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="text-8xl md:text-hero uppercase text-center font-extrabold text-black dr drop-shadow-neubrutal whitespace-pre-line leading-zero">
            arfi <br />
            anta <br />
            sofa
          </h1>
          <div className="flex items-center w-full md:w-3/4 mt-12 bg-white border-4 border-black rounded-md shadow-neubrutal">
            <div className="bg-yellow p-3 md:px-6 py-3 border-r-4 border-black">
              <Image src={searchIcon} width={40} height={40} alt="Search" />
            </div>
            <h2 className="text-lg md:text-3xl text-black font-medium mx-3 md:mx-6 w-60 md:w-96 animate-typing whitespace-nowrap overflow-hidden border-r-2 border-black">
              mobile developer
            </h2>
          </div>
        </div>
        <div className="flex md:w-4/5 h-full m-auto">
          <div className="w-full md:w-7/12 relative">
            <Image
              src={dotSquare}
              width={140}
              height={140}
              alt="dotSquare"
              className="absolute md:relative bottom-0 left-24"
            />
            <Image
              src={starGreen}
              width={140}
              height={140}
              alt="starGreen"
              className="absolute max-sm:top-0 md:bottom-64 right-0 md:left-0"
            />
            <Image
              src={rectangleViolet}
              width={140}
              height={140}
              alt="rectangleViolet"
              className="absolute bottom-64 -right-11 hidden md:block"
            />
            <Image
              src={trianglePink}
              width={140}
              height={140}
              alt="trianglePink"
              className="absolute -bottom-14 -right-11 hidden md:block"
            />
          </div>
          <div className="w-5/12 relative hidden md:block">
            <Image
              src={starMagenta}
              width={100}
              height={100}
              alt="starMagenta"
              className="absolute left-14 top-10"
            />
            <Image
              src={rectangleyellow}
              width={100}
              height={100}
              alt="rectangleyellow"
              className="absolute right-0 top-10"
            />
            <Image
              src={ellipseViolet}
              width={100}
              height={100}
              alt="rectangleViolet"
              className="absolute left-56 top-64"
            />
            <Image
              src={triangleGreen}
              width={100}
              height={100}
              alt="triangleGreen"
              className="absolute right-0 top-64"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

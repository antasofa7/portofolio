import Image from "next/legacy/image";
import React from "react";
import wave from "../assets/wave.png";
import starCyan from "../assets/star-cyan.png";
// import imagePlaceholder from '../assets/image-placeholder.png';
import tambalBan from "../assets/tambal-ban.webp";
import phbd from "../assets/phbd-laut.webp";
import pwri from "../assets/pwri.webp";
import Link from "next/link";

const Work = () => {
  return (
    <div
      className="w-full md:h-screen bg-sugar-pills border-4 border-t-0 border-black"
      id="work"
    >
      <div className="md:w-4/5 mx-6 md:mx-auto py-16">
        <div className="flex items-center mb-16">
          <h2 className="text-black text-5xl md:text-8xl font-semibold md:mr-16">
            Work
          </h2>
          <div className="w-full">
            <Image src={wave} width={400} height={60} alt="wave" />
          </div>
          <div className="w-auto">
            <Image src={starCyan} width={100} height={100} alt="starCyan" />
          </div>
        </div>
        <div className="mt-24">
          <div className="flex max-sm:flex-col gap-6">
            <div className="w-full">
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.tambal_ban"
                }
                target="_blank"
              >
                <div className="border-4 border-black rounded-md shadow-neubrutal hover:shadow-none aspect-square relative">
                  <Image
                    src={tambalBan}
                    alt="tambal ban"
                    // layout="fill"
                    objectPosition="center"
                    objectFit="cover"
                  />
                </div>
              </Link>
              <h5 className="text-lg md:text-3xl text-black font-bold mt-4 md:mt-9">
                Tambal Ban Online
              </h5>
            </div>
            <div className="w-full">
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.mge.phbidlaut"
                }
                target="_blank"
              >
                <div className="border-4 border-black rounded-md bg-blue-400 shadow-neubrutal hover:shadow-none aspect-square relative">
                  <Image
                    src={phbd}
                    alt="phbd"
                    // layout="fill"
                    objectPosition="center"
                    objectFit="cover"
                  />
                </div>
              </Link>
              <h5 className="text-lg md:text-3xl text-black font-bold mt-4 md:mt-9">
                PH Bid Pengurus
              </h5>
            </div>
            <div className="w-full">
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=id.or.pwri.digikop"
                }
                target="_blank"
              >
                <div className="border-4 border-black rounded-md shadow-neubrutal hover:shadow-none aspect-square relative">
                  <Image
                    src={pwri}
                    alt="pwri"
                    // layout="fill"
                    objectPosition="center"
                    objectFit="cover"
                  />
                </div>
              </Link>
              <h5 className="text-lg md:text-3xl text-black font-bold mt-4 md:mt-9">
                Digikop PWRI
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

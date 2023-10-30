"use client";

import Link from "next/link";
import React from "react";
import bubleChat from "../assets/bubble-chat.png";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  return (
    <div
      className="w-full bg-turquoise-sea border-4 border-t-0 border-black"
      id="contact"
    >
      <div className="md:w-4/5 mx-4 md:mx-auto py-16 relative -z-0">
        <div className="absolute md:top-24 right-0 md:right-36 -z-10 max-sm:w-12">
          <Image src={bubleChat} width={100} height={80} alt="bubble chat" />
        </div>
        <h2 className="text-black text-5xl md:text-8xl font-semibold mb-16">contact</h2>
        <div className="flex max-sm:justify-between md:gap-16">
          <div className="flex justify-center items-center w-24 md:w-48 h-24 md:h-48 p-4 bg-diva border-4 border-black rounded-full shadow-neubrutal hover:shadow-none">
            <button
              // href=""
              onClick={() => router.push("mailto:arfiantasofa@gmail.com")}
              className="text-sm md:text-2xl text-black font-semibold underline"
            >
              email
            </button>
          </div>
          <div className="flex justify-center items-center w-24 md:w-48 h-24 md:h-48 p-4 bg-sandy-bay border-4 border-black rounded-full shadow-neubrutal hover:shadow-none">
            <Link
              href={"https://www.linkedin.com/in/arfi-a-45aa43a3/"}
              target="_blank"
              className="text-sm md:text-2xl text-black font-semibold underline"
            >
              linkedin
            </Link>
          </div>
          <div className="flex justify-center items-center w-24 md:w-48 h-24 md:h-48 p-4 bg-orochimaru border-4 border-black rounded-full shadow-neubrutal hover:shadow-none">
            <Link
              href={"https://github.com/antasofa7"}
              target="_blank"
              className="text-sm md:text-2xl text-black font-semibold underline"
            >
              github
            </Link>
          </div>
        </div>
        <div className="mt-20">
          <p className="text-black text-sm md:text-2xl font-medium">@ 2023 arfiantasofa</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

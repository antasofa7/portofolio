import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center p-4 md:p-12" id="top">
      <ul className="flex max-sm:flex-col items-center gap-16 md:gap-10">
        <li>  
          <Link href="#about" scroll className="px-8 py-3 bg-coin-slot shadow-neubrutal rounded-md text-white font-semibold hover:shadow-none">about</Link>
        </li>
        <li>
          <Link href="#work" scroll className="px-8 py-3 bg-coin-slot shadow-neubrutal rounded-md text-white font-semibold hover:shadow-none">work</Link>
        </li>
        <li>
          <Link href="#contact" scroll className="px-8 py-3 bg-coin-slot shadow-neubrutal rounded-md text-white font-semibold hover:shadow-none">contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Image from "next/legacy/image";
import toTop from "../assets/arrow-top.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Hero />
      <About />
      <Work />
      <Contact />
      <Link href="#top" scroll={true} className="absolute bottom-10 md:bottom-24 right-6 md:right-20 flex justify-center items-center p-2 w-12 md:w-24 h-12 md:h-24 bg-white border-black border-4 rounded-full shadow-neubrutal hover:shadow-none">
        <Image src={toTop} width={50} height={52} alt="to top" />
      </Link>
    </main>
  );
}

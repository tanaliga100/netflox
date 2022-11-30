import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { BiBell, BiSearchAlt2 } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";

import icon from "../assets/icon.png";
type Props = {
  icon?: StaticImageData | any;
};

const Header = (props: Props) => {
  // FUNCTIONS
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  //HOOKS
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#111]"}`}>
      <section className="flex items-center space-x-2 md:space-x-5 ">
        <Image
          src={icon}
          width={100}
          height={100}
          alt="icon"
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-5 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </section>
      <section className="w-full flex items-center justify-end space-x-5 md:space-x-10 px-7 font-light">
        <BiSearchAlt2 className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline-block text-white items-center"> Kids</p>
        <BiBell className=" cursor-pointer" />
        <Link href="/account">
          <RxAvatar className=" h-6 w-6 cursor-pointer " />
        </Link>
      </section>
    </header>
  );
};

export default Header;

import React from "react";
import { motion, useCycle } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Logo from "../assets/logo.svg";
import HamburgerIcon from "../assets/icon-hamburger.svg";

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "25%" },
  };

  const links = ["About", "Services", "Projects"];

  return (
    <motion.header
      className="fixed left-0 top-0 z-10 flex w-full select-none items-center justify-between px-6 py-[34px] lg:px-12"
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <img src={Logo} alt="sunnyside" className="h-8 cursor-pointer lg:h-8" />
      <button onClick={toggleOpen} className="lg:hidden">
        <img
          src={HamburgerIcon}
          alt=""
          className={
            isOpen ? "opacity-50 transition-opacity" : "transition-opacity"
          }
        />
      </button>
      {isDesktop ? (
        <nav>
          <ul className="flex items-center gap-11 font-barlow text-[20px]">
            {links.map((link, index) => (
              <li key={`link_${index}`}>
                <a href="#" className="relative overflow-hidden text-white">
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="flex h-14 w-[140px] items-center justify-center rounded-full bg-white font-fraunces text-base font-black uppercase text-very-dark-desaturated-blue transition hover:bg-[#6ECEFF] hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <motion.nav
          className="absolute left-6 top-[106px] z-10 flex h-[305px] w-[calc(100%-48px)] flex-col bg-white py-[39px] before:absolute before:right-[-1px] before:top-[-21px] before:aspect-square
          before:h-[23px] before:bg-white before:content-[''] before:[clip-path:polygon(0%100%,100%100%,100%0%)]
          "
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={variants}
        >
          <ul className="mx-auto flex h-full flex-col items-center justify-between font-barlow text-[20px] font-semibold">
            {links.map((link, index) => (
              <li key={`link_${index}`}>
                <a href="#" className="text-dark-grayish-blue">
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="flex h-14 w-[140px] items-center justify-center rounded-full bg-yellow font-fraunces text-base font-black uppercase text-very-dark-desaturated-blue transition hover:bg-[#6ECEFF] hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}

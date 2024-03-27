import desktopHeroBackground from "../assets/desktop/image-header.jpg";
import mobileHeroBackground from "../assets/mobile/image-header.jpg";
import DownArrow from "../assets/icon-arrow-down.svg";

import useMediaQuery from "../hooks/useMediaQuery";

import { motion } from "framer-motion";

export default function Hero() {
  const title = "We are creatives";
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section
      className="flex flex-col items-center bg-[#3ebfff] bg-cover bg-[center_bottom] bg-no-repeat"
      style={{
        backgroundImage: useMediaQuery("(min-width: 600px)")
          ? `url(${desktopHeroBackground})`
          : `url(${mobileHeroBackground}`,
        paddingTop: "clamp(9.375rem, 8.1426rem + 5.2582vi, 12.875rem)",
        height: "clamp(33.625rem, 27.8592rem + 24.6009vi, 50rem)",
      }}
    >
      <motion.h1 className="relative select-none overflow-hidden text-center font-fraunces text-[2.4rem] font-black uppercase leading-tight tracking-[0.475rem] text-white md:text-[3.3rem] lg:tracking-[0.8rem]">
        {title.split("").map((letter, i) => (
          <motion.span
            className="relative inset-0"
            key={`l_${i}`}
            initial={{ top: "100%", opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{
              delay: 1.1,
              duration: 0.4 + i * 0.075,
              type: "spring",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      <div className="mx-auto mt-[48px] inline-block">
        <motion.img
          src={DownArrow}
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "35%" }}
          exit={{}}
          transition={{
            delay: 1.75,
            repeat: Infinity,
            duration: 0.9,
            repeatDelay: 2.25,
          }}
        />
        <motion.img src={DownArrow} className="pointer-events-none opacity-0" />
      </div>
    </section>
  );
}

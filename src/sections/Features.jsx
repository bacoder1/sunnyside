import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import useMediaQuery from "../hooks/useMediaQuery.jsx";

import TransformImageMobile from "../assets/mobile/image-transform.jpg";
import TransformImageDesktop from "../assets/desktop/image-transform.jpg";
import StandoutImageMobile from "../assets/mobile/image-stand-out.jpg";
import StandoutImageDesktop from "../assets/desktop/image-stand-out.jpg";

export default function Features() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const image = [
    {
      mobile: TransformImageMobile,
      desktop: TransformImageDesktop,
    },
    {
      mobile: StandoutImageMobile,
      desktop: StandoutImageDesktop,
    },
  ];

  return (
    <section className="font-barlow lg:grid lg:grid-cols-2 lg:grid-rows-2">
      <img
        src={isDesktop ? image[0].desktop : image[0].mobile}
        alt=""
        className="order-1 w-full lg:order-2"
      />
      <article className="order-2 flex flex-col items-center justify-center py-16 text-center lg:order-1 lg:items-start lg:pl-[50px] lg:text-start min-[1380px]:pl-[160px]">
        <h3 className="mx-4 select-none font-fraunces text-[2rem] font-black leading-[38px] text-very-dark-desaturated-blue lg:m-0 lg:text-[2.45rem] lg:leading-[50px]">
          Transform your
          <br className="hidden lg:block" /> brand
        </h3>
        <p className="mx-6 mt-[26px] max-w-prose text-[18px] leading-[30px] text-dark-grayish-blue lg:mx-0 lg:max-w-[45ch]">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a
          href="#"
          className="relative mt-[30px] font-fraunces font-black uppercase text-very-dark-desaturated-blue after:absolute after:bottom-0 after:left-[50%] after:z-[-1] after:h-[10px] after:w-[112%] after:rounded-full after:bg-yellow/25 after:transition after:content-[''] after:[transform:translateX(-50%)] hover:after:bg-yellow lg:mt-8"
        >
          Learn More
        </a>
      </article>
      <img
        src={isDesktop ? image[1].desktop : image[1].mobile}
        alt=""
        className="order-3 w-full"
      />
      <article className="order-4 flex flex-col items-center justify-center py-16 text-center lg:items-start lg:pl-[50px] lg:text-start min-[1380px]:pl-[105px]">
        <h3 className="mx-4 select-none font-fraunces text-[2rem] font-black leading-[38px] text-very-dark-desaturated-blue lg:m-0 lg:text-[2.45rem] lg:leading-[50px]">
          Stand out to the right
          <br className="hidden lg:block" /> audience
        </h3>
        <p className="mx-6 mt-[26px] max-w-prose text-[18px] leading-[30px] text-dark-grayish-blue lg:mx-0 lg:max-w-[45ch]">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we&apos;ll build and
          extend your brand in digital places.
        </p>
        <a
          href="#"
          className="relative mt-[30px] font-fraunces font-black uppercase text-very-dark-desaturated-blue after:absolute after:bottom-0 after:left-[50%] after:z-[-1] after:h-[10px] after:w-[112%] after:rounded-full after:bg-soft-red/25 after:transition after:content-[''] after:[transform:translateX(-50%)] hover:after:bg-soft-red lg:mt-8"
        >
          Learn More
        </a>
      </article>
    </section>
  );
}

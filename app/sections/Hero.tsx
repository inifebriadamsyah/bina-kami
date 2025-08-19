"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimate,
} from "framer-motion";

import localFont from "next/font/local";

import leftCloud from "@/app/assets/left-cloud.png";
import rightCloud from "@/app/assets/right-cloud.png";
import clouds from "@/app/assets/clouds.png";
import mainCloud from "@/app/assets/main-cloud.png";
import male from "@/app/assets/male.png";
import female from "@/app/assets/female.png";
import participant from "@/app/assets/participant.png";
import location from "@/app/assets/location.png";

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../assets/fonts/CabinetGrotesk-Black.woff",
      weight: "800",
      style: "black",
    },
    // {
    //   path: "../assets/fonts/CabinetGrotesk-ExtraBold.woff",
    //   weight: "700",
    //   style: "extrabold",
    // },
    {
      path: "../assets/fonts/CabinetGrotesk-Bold.woff",
      weight: "600",
      style: "bold",
    },
    {
      path: "../assets/fonts/CabinetGrotesk-Extralight.woff",
      weight: "100",
      style: "extralight",
    },
    {
      path: "../assets/fonts/CabinetGrotesk-Light.woff",
      weight: "200",
      style: "light",
    },
    {
      path: "../assets/fonts/CabinetGrotesk-Medium.woff",
      weight: "400",
      style: "medium",
    },
    {
      path: "../assets/fonts/CabinetGrotesk-Regular.woff",
      weight: "300",
      style: "regular",
    },
    {
      path: "../assets/fonts/CabinetGrotesk-Variable.woff",
      weight: "500",
      style: "semibold",
    },
  ],
});

export const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const translatingYY = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <div className="relative top-0 min-h-screen">
      <Image
        src={male}
        alt="male"
        height={1440}
        className="fixed bottom-0 lg:h-[22rem] h-[12rem] z-40 w-auto left-0"
      />
      <Image
        src={female}
        alt="female"
        height={1440}
        className="fixed bottom-0 lg:h-[22rem] h-[12rem] z-40 w-auto right-0"
      />

      <motion.img
        src={clouds.src}
        ref={imageRef}
        alt="clouds"
        height={1920}
        className="absolute md:-top-[6.5rem] md:left-0 min-h-full w-auto scale-105 hidden md:block"
        style={{
          translateY: translatingYY,
        }}
        animate={{
          translateX: [-25, 200],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
          duration: 24,
        }}
      />
      <div className="relative w-auto hidden">
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute md:h-20 md:w-auto h-3 w-auto -top-[3rem] right-[27%]"
        />
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute md:h-16 md:w-auto h-3 w-auto top-[2rem] left-[28%]"
        />
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute md:h-16 md:w-auto h-3 w-auto top-[26rem] -right-[4%]"
        />
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute md:h-20 md:w-auto h-3 w-auto top-[22rem] -left-[5%]"
        />
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute md:h-20 md:w-auto h-3 w-auto top-[39rem] right-[19%]"
        />
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute md:h-16 md:w-auto h-3 w-auto top-[36rem] left-[24%]"
        />
      </div>

      <div className="relative container mx-auto p-8 pt-28">
        <div className="container text-center md:max-w-screen-xl md:w-full pb-20 pt-10 mx-auto">
          <div className="flex items-center justify-center">
            <h1
              className={`md:text-[60px] text-3xl font-semibold tracking-[0.05rem] text-black/70 z-10 ${cabinetGrotesk.className}`}
            >
              {/* <Typewriter
                    text={[
                      "Selamat datang di",
                      "Sugeng rawuh",
                      "Salamet dhateng",
                      "مرحباً بكم",
                    ]}
                    speed={70}
                    className="text-black/70 "
                    waitTime={2500}
                    deleteSpeed={40}
                    cursorChar={"_"}
                  /> */}
              Selamat datang di
            </h1>
            <motion.img
              src={participant.src}
              alt="participant"
              height={300}
              className="md:h-[54px] md:w-auto h-14 mx-4 shadow-md rounded-[36px] shadow-gray-200 origin-left hidden md:block"
              animate={{
                rotate: ["2deg", "-15deg"],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2.5,
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="md:flex md:items-center justify-center">
            <motion.img
              src={location.src}
              alt="location"
              height={500}
              className="md:h-[102px] md:w-auto h-24 w-auto mr-3 md:mt-4 mt-6 origin-right hidden md:block"
              animate={{
                rotate: ["2deg", "-3deg"],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <h1
              className={`md:text-[64px] text-3xl font-semibold tracking-[0.05rem] text-[#FF990A] z-10 ${cabinetGrotesk.className}`}
            >
              Aplikasi
              <span
                className={`text-[#4C9E3B] font-medium ${cabinetGrotesk.className}`}
              >
                {" "}
                Bina Kami
              </span>
            </h1>
          </div>

          <div className="max-w-[32rem] mt-14 mx-auto">
            <p
              className={`text-gray-600 md:text-[1.2rem] font-normal tracking-normal  ${cabinetGrotesk.className}`}
            >
              Bina kami adalah aplikasi bimbingan perkawinan online untuk
              mempersiakan calon pengantin di Kota Madiun agar pernikannya sakinah, mawaddah wa
              rahmah.
            </p>
            <button
              className={`px-8 p-4 rounded-full mt-16 font-normal tracking-wide text-xl bg-[#FF990A] cursor-pointer border-4 border-[#CE7F11] text-white w-fit ${cabinetGrotesk.className} shadow-[6px_6px_0px_rgba(206,_127,_17,_0.925)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-350 `}
            >
              {" "}
              <div className="flex items-center">
                <div className="h-4 w-4 border-white border-[3px] rounded-full mr-4"></div>
                Gabung Sekarang!
              </div>
            </button>
            <p className="mt-10 font-medium md:text-base text-gray-700 text-[.925rem]">
              Bimwin Virtual Kemenag Kota Madiun
              <span className="font-bold text-[#f28d00]"> versi 1.0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

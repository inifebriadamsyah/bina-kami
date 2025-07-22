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

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/app/components/ui/resizable-navbar";
import localFont from "next/font/local";

import leftCloud from "@/app/assets/left-cloud.png";
import rightCloud from "@/app/assets/right-cloud.png";
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
    {
      path: "../assets/fonts/CabinetGrotesk-ExtraBold.woff",
      weight: "700",
      style: "extrabold",
    },
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
  const navItems = [
    {
      name: "Beranda",
      link: "#beranda",
    },
    {
      name: "Tentang",
      link: "#tentang",
    },
    {
      name: "Pelatihan",
      link: "#pelatihan",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#F5F9EE] overflow-x-clip">
      <div className="relative w-auto">
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute h-20 w-auto top-[6rem] right-[29%]"
        />
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute h-16 w-auto top-[10rem] left-[28%]"
        />
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute h-16 w-auto top-[32rem] -right-[4%]"
        />
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute h-20 w-auto top-[27rem] -left-[4%]"
        />
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute h-20 w-auto top-[39rem] right-[19%]"
        />
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute h-16 w-auto top-[46rem] left-[24%]"
        />
      </div>
      <div className="absolute w-auto min-h-[100%] left-0">
        <Image
          src={leftCloud}
          alt="leftCloud"
          height={944}
          className="h-[24rem] w-auto"
        />
        <Image
          src={male}
          alt="male"
          height={1440}
          className="absolute bottom-0 h-[26rem] w-auto"
        />
      </div>
      <div className="absolute w-auto min-h-[100%] right-0">
        <Image
          src={rightCloud}
          alt="rightCloud"
          height={740}
          className="h-[21rem] w-auto"
        />
        <Image
          src={female}
          alt="female"
          height={1440}
          className="absolute bottom-0 h-[26rem] w-auto"
        />
      </div>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">PANDUAN</NavbarButton>
            <NavbarButton variant="primary">Daftar Sekarang</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Panduan
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Daftar Sekarang
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <HeroContent />
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className="relative container mx-auto p-8 pt-36">
      <div className="container text-center md:max-w-screen-xl md:w-full pb-20 pt-10 mx-auto">
        <div className="flex items-center justify-center">
          <h1
            className={`md:text-7xl sm:text-4xl font-semibold tracking-[0.05rem] text-black/70 z-10 ${cabinetGrotesk.className}`}
          >
            Selamat datang
          </h1>
          <motion.img
            src={participant.src}
            alt="participant"
            height={300}
            className="h-[68px] w-auto mx-4 shadow-md rounded-[36px] shadow-gray-200"
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
          <h1
            className={`md:text-7xl sm:text-4xl font-semibold tracking-[0.05rem] text-black/70 z-10 ${cabinetGrotesk.className}`}
          >
            di
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <motion.img
            src={location.src}
            alt="location"
            height={500}
            className="h-[112px] w-auto mr-3 md:mt-10"
            animate={{
              rotate: ["6deg", "-3deg"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              ease: "easeInOut",
            }}
          />
          <h1
            className={`md:text-7xl sm:text-4xl font-semibold tracking-[0.05rem] text-[#FF990A] z-10 ${cabinetGrotesk.className}`}
          >
            Aplikasi
            <span
              className={`text-[#4C9E3B] font-bold ${cabinetGrotesk.className}`}
            >
              {" "}
              Bina Kami
            </span>
          </h1>
        </div>

        <div className="max-w-[36rem] mt-16 mx-auto">
          <p
            className={`text-gray-700 text-[1.4rem] font-light tracking-[0.025rem]  ${cabinetGrotesk.className}`}
          >
            Bina kami adalah aplikasi bimbingan perkawinan online untuk
            mempersiakan calon pengantin agar pernikannya sakinah, mawaddah wa
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
          <p className="mt-10 font-medium text-base text-gray-700">
            Bimwin Virtual Kemenag Kota Madiun
            <span className="font-bold text-[#f28d00]"> versi 1.0</span>
          </p>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          {
            id: 1,
            title: "The",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-white",
          },
          {
            id: 2,
            title: "First",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-white",
          },
          {
            id: 3,
            title: "Rule",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-white",
          },
          {
            id: 4,
            title: "Of",
            width: "md:col-span-3",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-white",
          },
          {
            id: 5,
            title: "F",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-white",
          },
          {
            id: 6,
            title: "Club",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-white",
          },
          {
            id: 7,
            title: "Is",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-white",
          },
          {
            id: 8,
            title: "You",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-white",
          },
          {
            id: 9,
            title: "Do NOT TALK about",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-white",
          },
          {
            id: 10,
            title: "F Club",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-white",
          },
        ].map((box) => (
          <div
            key={box.id}
            className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <h2 className="text-xl text-gray-400 font-medium">{box.title}</h2>
          </div>
        ))}
      </div> */}
    </div>
  );
};

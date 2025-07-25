"use client";
import Image from "next/image";
import Lenis from "lenis";
import { Hero } from "./sections/Hero";
import { useEffect, useRef, useState } from "react";
import { FAQ } from "./sections/FAQ";
import { ScrollReveal } from "./sections/ScrollReveal";
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
import Typewriter from "@/app/components/ui/typewriter";
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
import mainCloud from "@/app/assets/main-cloud.png";
import clouds from "@/app/assets/clouds.png";
import male from "@/app/assets/male.png";
import female from "@/app/assets/female.png";
import participant from "@/app/assets/participant.png";
import location from "@/app/assets/location.png";
import { Testimonials } from "./sections/Testimonials";
import { CallToAction } from "./sections/CallToAction";
import { Footer } from "./sections/Footer";

const cabinetGrotesk = localFont({
  src: [
    {
      path: "assets/fonts/CabinetGrotesk-Black.woff",
      weight: "800",
      style: "black",
    },
    // {
    //   path: "assets/fonts/CabinetGrotesk-ExtraBold.woff",
    //   weight: "700",
    //   style: "extrabold",
    // },
    {
      path: "assets/fonts/CabinetGrotesk-Bold.woff",
      weight: "600",
      style: "bold",
    },
    {
      path: "assets/fonts/CabinetGrotesk-Extralight.woff",
      weight: "100",
      style: "extralight",
    },
    {
      path: "assets/fonts/CabinetGrotesk-Light.woff",
      weight: "200",
      style: "light",
    },
    {
      path: "assets/fonts/CabinetGrotesk-Medium.woff",
      weight: "400",
      style: "medium",
    },
    {
      path: "assets/fonts/CabinetGrotesk-Regular.woff",
      weight: "300",
      style: "regular",
    },
    {
      path: "assets/fonts/CabinetGrotesk-Variable.woff",
      weight: "500",
      style: "semibold",
    },
  ],
});

export default function Home() {
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

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#F5F9EE] overflow-x-clip">
      <Image
        src={leftCloud}
        alt="leftCloud"
        height={944}
        className="h-[20rem] lg:h-[20rem] w-auto absolute top-0 left-0"
      />
      <Image
        src={rightCloud}
        alt="rightCloud"
        height={740}
        className="h-[18rem] lg:h-[19rem] w-auto absolute top-0 right-0"
      />

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
      <Hero/>
      {/* <Hero/> */}
      <ScrollReveal />
      <Testimonials />
      {/* <FAQ /> */}
      <CallToAction />
      <Footer />
    </div>
  );
}

const HeroContent = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 0.25],
    [-300, 2300]
  );

  return (
    <div className="relative top-0 min-h-screen">
      <Image
        src={male}
        alt="male"
        height={1440}
        className="fixed bottom-0 lg:h-[22rem] z-40 w-auto left-0"
      />
      <Image
        src={female}
        alt="female"
        height={1440}
        className="fixed bottom-0 lg:h-[22rem] z-40 w-auto right-0"
      />
      <motion.img
        ref={sectionRef}
        src={clouds.src}
        alt="clouds"
        height={1920}
        className="absolute md:-top-[9.5rem] min-h-full w-auto"
        style={{
          backgroundPositionY
        }}
        animate={{
          backgroundPositionX: clouds.width,
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 120,
        }}
      />
      <div className="relative w-auto hidden">
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute h-20 w-auto -top-[3rem] right-[27%]"
        />
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute h-16 w-auto top-[2rem] left-[28%]"
        />
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute h-16 w-auto top-[26rem] -right-[4%]"
        />
        <Image
          src={mainCloud}
          alt="mainCloud"
          height={572}
          className="absolute h-20 w-auto top-[22rem] -left-[5%]"
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
          className="absolute h-16 w-auto top-[36rem] left-[24%]"
        />
      </div>

      <div className="relative container mx-auto p-8 pt-28">
        <div className="container text-center md:max-w-screen-xl md:w-full pb-20 pt-10 mx-auto">
          <div className="flex items-center justify-center">
            <h1
              className={`md:text-[60px] sm:text-4xl font-semibold tracking-[0.05rem] text-black/70 z-10 ${cabinetGrotesk.className}`}
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
              className="h-[54px] w-auto mx-4 shadow-md rounded-[36px] shadow-gray-200 origin-left"
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
          <div className="flex items-center justify-center">
            <motion.img
              src={location.src}
              alt="location"
              height={500}
              className="h-[102px] w-auto mr-3 md:mt-4 origin-right"
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
              className={`md:text-[64px] sm:text-4xl font-semibold tracking-[0.05rem] text-[#FF990A] z-10 ${cabinetGrotesk.className}`}
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
              className={`text-gray-600 text-[1.2rem] font-normal tracking-[0.05rem]  ${cabinetGrotesk.className}`}
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
      </div>
    </div>
  );
};

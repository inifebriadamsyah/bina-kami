import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import { MoveRight } from "lucide-react";
import EVCharging from "@/app/assets/ev-charging.png";
import SolarEnergy from "@/app/assets/solar-energy.png";
import WindEnergy from "@/app/assets/wind-energy.png";
import Hydropower from "@/app/assets/hydroppower.png";

const SolutionsList = [
  {
    title: "EV Charging",
    description:
      "EVs use electricity as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transportation sector.",
    icon: EVCharging.src,
  },
  {
    title: "Solar Energy",
    description:
      "Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.",
    icon: SolarEnergy.src,
  },
  {
    title: "Wind Energy",
    description:
      "Wind turbines harness the kinetic energy of the wind to generate electricity. Wind farms with multiple turbines are commonly used to produce large amounts of clean energy.",
    icon: WindEnergy.src,
  },
  {
    title: "Hydropower",
    description:
      "This technology uses the energy from flowing water, such as rivers and dams, to turn turbines and generate electricity. It's one of the oldest forms of renewable energy.",
    icon: Hydropower.src,
  },
];

export const CallToAction = () => {
  return (
    <section className="md:overflow-x-clip mt-6 pt-12 md:px-8 sm:px-3 bg-opacity-0">
      <div className="bg-[#022C22] rounded-2xl">
        <div className="container md:grid md:grid-cols-2 md:w-full pt-12 pb-20 md:pb-20 md:pt-16 px-10 items-center justify-between">
          <div className="text-start">
            <h1 className="text-4xl md:text-6xl font-regular tracking-tight text-white/90 my-12">
              Your Source for Green Energy Updates
            </h1>
          </div>
          <form
                className="flex md:flex-row gap-2.5 max-w-sm md:justify-between mx-auto sm:flex-col "
                action=""
            >
                <input
                type="email"
                placeholder="your@email.com"
                className="md:h-12 bg-white/90 rounded-full md:w-96 px-6 py-6 md:py-6 sm:py-2 font-regular placeholder:text-[#414141] sm:flex-1"
                />
                <button className="btn btn-primary text-black/80 h-12 px-6">
                     Get in touch
                </button>
            </form>

        </div>
      </div>
    </section>
  );
};

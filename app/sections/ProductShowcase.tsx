"use client";
import Image from "next/image";
import appScreen from "@/app/assets/screencapt.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="text-gray-600 bg-gradient-to-b from-white to-[#F5F9EE] py-[22px] sm:py-24 flex justify-center">
      <div className="container justify-center">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter hidden">
          Intuitive Interface
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-start text-gray-600 mt-5">
            Bimbingan perkawinan secara pembelajaran online (e-learning),
            melibatkan narasumber profesional seperti penghulu, penyuluh, dan
            dokter. Layanan ini gratis dan bertujuan mendukung ketahanan
            keluarga serta menurunkan angka perceraian di Kota Madiun.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={appScreen}
            alt="The Product Screenshot"
            className="mt-14 mx-auto"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};

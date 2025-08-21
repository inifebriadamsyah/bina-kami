import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export const ScrollReveal = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start 0.9", "start 0"],
    offset: ["start end", "end end"],
  });


  //  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const paragraph ="Bimbingan Perkawinan Kemenag Kota Madiun";
  const words = paragraph.split(" ");
  return (
    <div className="relative w-full bg-white py-28">
      <div className="container mx-auto">
        <div className="sticky top-24 md:top-40 lg:top-40 bg-white/10 overflow-hidden flex justify-center mx-auto">
          <p
            // ref={targetRef}
            className="md:text-6xl md:ml-10 md:mt-4 text-3xl md:p-10 p-14 max-w-4xl text-black/60 tracking-tight font-semibold flex flex-wrap"
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
        {/* <div className="container overflow-hidden">
              <div className="sticky">
                  <ScrollRevealer className="md:text-3xl text-blue-200 dark:text-blue-800">
                  It uses a sticky container with a fixed height and a large space at
                  the bottom. Finally, it calculates the scroll position and applies an
                  opacity effect to each child based on its position.
                  </ScrollRevealer>
              </div>
          </div> */}
          <div className="h-[375vh]" ref={targetRef}></div>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-5">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

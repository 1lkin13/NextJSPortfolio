'use client'
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-green">Education</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Information Technologies"
          imageSrc="/adnsu.jpg"  
          des="In 2021-2025, I received a bachelor's degree in Information Technologies. During this period, I gained extensive knowledge and experience in the fields of modern technologies, programming, system analysis and databases."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-400 rounded-3xl overflow-hidden"
          
            colors={[[125, 211, 252]]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Full-Stack Web Development"
          imageSrc="/nan.png"  
          des="In 2022-2023, I studied full stack development at the NaNTech course, during which I gained extensive knowledge and experience in both front-end and back-end development."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[[ 255, 119, 119]]}
            dotSize={2}
           
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  imageSrc,
  children,
  des,
}: {
  title: string;
  imageSrc: string;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-20 relative rounded-3xl"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat:"no-repeat",
        backgroundColor: 'rgba(4,7,29,0.6)', 
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

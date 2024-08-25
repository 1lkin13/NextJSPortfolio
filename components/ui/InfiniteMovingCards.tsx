"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    name: string;
    link: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      }
    }
  };
  return (
    <div
    ref={containerRef}
    className={cn(
      "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
      className
    )}
  >
    <ul
      ref={scrollerRef}
      className={cn(
        "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
        start && "animate-scroll",
        pauseOnHover && "hover:[animation-play-state:paused]"
      )}
    >
      {items.map((item, idx) => (
     <li
     className="w-[80vw] md:w-[30vw] lg:w-[27vw] relative rounded-xl border border-b-0 flex-shrink-0 border-slate-800 p-4 md:p-6 lg:p-8"
     style={{
       background: "rgb(4,7,29)",
       backgroundColor:
         "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
     }}
     key={idx}
   >
   
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <div className="relative z-20 flex flex-col items-center">
              <div className="mb-4">
                <img
                  src={item.image}
                  alt={`${item.name} playlist cover`}
                  className="rounded-lg "
                />
              </div>
              <span className="text-lg lg:text-xl font-bold leading-[1.6]  text-center" >
                {item.name}
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
  
  );
};
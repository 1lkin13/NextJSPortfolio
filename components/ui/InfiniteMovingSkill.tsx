import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingSkill = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  itemClassName,
  containerClassName,
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  itemClassName?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

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
      let duration: string;
      switch (speed) {
        case "fast":
          duration = "30s"; // Daha hızlı
          break;
        case "slow":
          duration = "60s"; // Daha yavaş
          break;
        default:
          duration = "40s"; // Ortalama hız
          break;
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };
  
  

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        containerClassName
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
            className={cn(
              " relative rounded-xl border border-b-0 flex-shrink-0 border-slate-800 p-4 md:p-6 lg:p-8",
              itemClassName
            )}
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
          >
            <div className="relative z-20 flex flex-col items-center">
              <span className="text-lg lg:text-xl font-bold leading-[1.6] text-white text-center">
                {item}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
       Some of my{" "}
        <span className="text-green">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
            
              title=" Made by &#10084;  1lkin13"
             
              href={item.link}
            >
              <div className="relative  rounded-md flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
             
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 object-fit"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal text-green font-light text-sm line-clamp-2"
                style={{
                  // color: "#A1EEBD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
 <Link href={item.link} target="blank">
                <div className="flex justify-center items-center">
                 
                  <p className="flex lg:text-xl md:text-xs text-sm text-[#2fbd42]">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" />
                 
                </div> </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
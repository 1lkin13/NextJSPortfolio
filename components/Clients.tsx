"use client";

import React from "react";

import { playlist } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="playlist" className="py-10">
      <h1 className="heading">
      Psycho
        <span className="text-green"> programmer </span> <span>playlist</span> 
      </h1>

      <div className="flex flex-col items-center mt-16">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={playlist}
            direction="right"
            speed="slow"
          />
        </div>

       
      </div>
    </section>
  );
};

export default Clients;
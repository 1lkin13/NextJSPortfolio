import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/Text-generate-effect'
import { FaLocationArrow } from 'react-icons/fa6'
import CVButton from './ui/CVButton'

const Hero = () => {
  return (
 <div className=' pt-20'>
  <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="green"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="green" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white 
       dark:bg-grid-white/[0.05] bg-grid-black/[0.2] 
        flex items-center justify-center absolute top-0 left-0">
   
      <div className="absolute pointer-events-none inset-0 flex items-center 
      justify-center dark:bg-black-100 bg-white 
      [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

    </div>
    <div className='flex justify-center relative my-20 z-10'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
     
          <TextGenerateEffect
            words="Think Twice,Code Once!"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
      <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m İlkin, a Frontend Developer based in Earth.
          </p>
        <a>
        <CVButton
            title="Download My CV"
            icon={<FaLocationArrow />}
            position="right"
             downloadUrl="/İlkin Emiraslanov - Frontend Developer - Resume.pdf"
          />
        </a>
      </div>
    </div>
 </div>
  )
}

export default Hero
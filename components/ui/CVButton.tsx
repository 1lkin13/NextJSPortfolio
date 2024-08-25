'use client'; 

import React from 'react';

const CVButton = ({
  title,
  icon,
  position,
  downloadUrl,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  downloadUrl: string; 
  otherClasses?: string;
}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'İlkin Emiraslanov-Resume'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className={`bg-slate-800 h-12 w-full md:w-60 md:mt-10 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block ${otherClasses}`}
      onClick={handleDownload}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ">
      {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

export default CVButton;

import React from "react";
import Image from "next/image";

import * as worf from "../../public/pfp-worf.png";
import * as effect from "../../public/decorations/starry_eyed.png";
import { HyperText } from "../ui/HyperText";

export function DotBackground() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></p>

      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="relative rounded-full overflow-hidden w-[150px] h-[150px] hover:cursor-pointer">
          {/*  group */}
          <Image
            id="avatar"
            className="absolute top-[calc(150px*0.09)] left-[calc(150px*0.09)] w-[calc(150px*0.82)] h-[calc(150px*0.82)] rounded-full"
            src={worf}
            alt="doggo worf"
            width={150}
            height={150}
          />
          <Image
            src={effect}
            // opacity-0 group-hover:opacity-100 transition-opacity duration-300
            className="top-0 left-0 absolute "
            alt="starry eye effect"
            width={150}
            height={150}
          />
        </div>

        <HyperText>Michelle Uy</HyperText>
      </div>
    </div>
  );
}

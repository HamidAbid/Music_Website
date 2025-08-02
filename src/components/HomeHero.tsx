import React from "react";
import { cn } from "@/utils/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function HomeHero() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.98] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-6 md:pt-40 pt-60 lg:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl ">
          Master the Art of Music<br />
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-lg font-normal text-neutral-300">
        Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>
        <div className="flex justify-center my-5 ">
        <Button
        borderRadius="1.75rem"
        className="bg-white  dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Courses
      </Button>
        </div>
      </div>
    </div>
  );
}

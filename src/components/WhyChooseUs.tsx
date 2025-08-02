"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import musicalData from '@/data/musical_school.json'



const content = musicalData;
export default function WhyChooseUs() {
  return (
   <div className="w-full mx-auto ">
      <StickyScroll content={content} />
    </div>
  )
}






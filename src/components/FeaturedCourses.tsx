"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import courseData from "@/data/music_courses.json";
import { Button } from "./ui/moving-border";

interface course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const featuredCourse = courseData.courses.filter(
  (course: course) => course.isFeatured
);

export default function FeaturedCourses() {
  return (
    <div className="w-100% mx-auto  px-5 p-20 bg-gray-950">
      <div>
        <h3 className="text-cyan-500 font-semibold text-center">
          FEATURED COURSES
        </h3>
        <h2 className="text-white font-semibold text-center text-4xl py-2">
          Learn With The Best
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justigy-center gap-8 my-10">
        {featuredCourse.map((course: course) => (
          <div className="flex " key={course.id}>
            <BackgroundGradient
              className="rounded-[22px] h-[13rem] max-w-sm p-4 sm:px-10 bg-white dark:bg-zinc-900 flex flex-col justify-between"
              key={course.id}
            >
              <div>
                <p className="text-base sm:text-xl text-black my-2 dark:text-neutral-200">
                  {course.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {course.description}
                </p>
              </div>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 justify-between ">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full my-2 text-[0.6rem] px-2 py-0 text-white">
                  {course.price}
                </span>
              </button>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-5">
        <Button>View All Courses</Button>
      </div>
    </div>
  );
}

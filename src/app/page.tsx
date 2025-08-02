import FeaturedCourses from "@/components/FeaturedCourses";
import { FeaturedWebinar } from "@/components/FeaturedWebinar";
import Footer from "@/components/Footer";
import  HomeHero  from "@/components/HomeHero";
import Instructors from "@/components/Instructor";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <div >
    <HomeHero/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <FeaturedWebinar/>
    <Instructors/>
    <Footer/>
    
   </div>
  );
}

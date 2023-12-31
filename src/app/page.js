import { lazy, Suspense } from "react";
import Avatar from "@/components/Avatar";
import Image from "next/legacy/image";
import Title from "@/components/Title";
import Description from "@/components/Description";
import { descContent } from "@/libs/data";

// const AnimatedParticles = lazy(() => import("@/components/AnimatedParticles"));
const AnimatedButton = lazy(() => import("@/components/AnimatedButton"));

export default function Home() {
  return (
    <div
      className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30
      to-black/10 relative"
    >
      <div
        className="text-center flex flex-col justify-center xl:pt-40
        xl:text-left h-full container mx-auto xl:ml-[5%] xl:mr-2
        "
      >
        <Title
          mainText="Welcome to my"
          accentText="Portfolio"
          showExploreText={true}
        />
        <Description content={descContent} />
        <div className="flex justify-center relative xl:max-w-[576px] z-10">
          <Suspense fallback={<div></div>}>
            <AnimatedButton />
          </Suspense>
        </div>

        <div className="xl:block w-[800px] h-full absolute right-0 bottom-0">
          <div className="w-[1000px] h-full absolute left-[-200px] bottom-0">
            <Suspense fallback={<div></div>}>
              {/* <AnimatedParticles width={1000} /> */}
            </Suspense>
          </div>
          <div className="sm:hidden xl:block">
            <Avatar />
          </div>
          <div
            className={`bg-mainImg xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full
            absolute translate-z-0 sm:hidden xl:block hidden`}
          ></div>
        </div>
      </div>
    </div>
  );
}

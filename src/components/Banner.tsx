"use client";

import Image from "next/image";

import CustomButton from "./CustomButton";

export default function Hero() {
  function handleScroll() {}

  return (
    <div className="relative z-0 mx-auto flex max-w-[1440px] flex-col gap-5 xl:flex-row">
      <div className="flex-1 px-6 pt-36 sm:px-16">
        <h1 className="text-[50px] font-extrabold sm:text-[64px] 2xl:text-[72px]">
          Find, book, or rent a car — quick and super easy!
        </h1>
        <p className="mt-5 text-[27px] font-light text-black-100">
          Streamline your car rental experience with our effortless booking process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="flex w-full items-end justify-end xl:h-screen xl:flex-[1.5]">
        <div className="relative z-0 h-[590px] w-[90%] xl:h-full xl:w-full">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="absolute -right-1/4 -z-10 h-[590px] w-full overflow-hidden bg-hero-bg bg-repeat-round xl:-right-1/2 xl:-top-24 xl:h-screen" />
      </div>
    </div>
  );
}

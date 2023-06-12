"use client";

import { calculateCarRent } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  };
}

export default function CarCard({ car }: CarCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="group flex flex-col items-start justify-center rounded-3xl bg-primary-blue-100 p-6 text-black-100 transition-all hover:bg-white hover:shadow-md">
      <div className="flex w-full items-start justify-between gap-2">
        <h2 className="text-[22px] font-bold capitalize leading-[26px]">
          {make} {model}
        </h2>
      </div>

      <p className="mt-6 flex text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative my-3 h-40 w-full object-contain">
        <Image src="/hero.png" alt="Car model" fill priority className="object-contain" />
      </div>

      <div className="relative mt-2 flex w-full">
        <div className="text-gray flex w-full justify-between group-hover:invisible">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src="/steering-wheel.svg" alt="" width={20} height={20} />
            <p className="text-[14px]">{transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src="/tire.svg" alt="" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src="/gas.svg" alt="" width={20} height={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="absolute bottom-0 z-10 hidden w-full group-hover:flex">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails />
    </div>
  );
}

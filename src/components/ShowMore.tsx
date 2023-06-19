"use client";

import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();

  function handleNavigation() {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", String(newLimit));

    router.push(newPathName);
  }

  return (
    <div className="mt-10 flex w-full justify-center gap-5">
      {!isNext && (
        <CustomButton
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

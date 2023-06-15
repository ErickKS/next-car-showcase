"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import SearchManufacturer from "./SearchManufacturer";

function SearchButton({ otherClasses }: { otherClasses: string }) {
  return (
    <button type="submit" className={`z-10 -ml-3 ${otherClasses}`}>
      <Image src="/magnifying-glass.svg" alt=" " width={40} height={40} className="object-contain" />
    </button>
  );
}

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(model.toLocaleLowerCase(), manufacturer.toLocaleLowerCase());
  }

  function updateSearchParams(model: string, manufacturer: string) {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex w-full max-w-3xl items-center justify-start max-sm:flex-col max-sm:gap-4"
    >
      <div className="relative flex flex-1 items-center justify-start max-sm:w-full">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="relative flex flex-1 items-center justify-start max-sm:w-full">
        <Image src="/model-icon.png" alt=" " width={25} height={25} className="absolute ml-4 h-5 w-5" />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="h-[48px] w-full cursor-pointer rounded-r-full bg-light-white p-4 pl-12 text-sm outline-none max-sm:rounded-full"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}

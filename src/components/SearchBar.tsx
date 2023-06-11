"use client";

import { useState } from "react";

import SearchManufacturer from "./SearchManufacturer";

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");

  function handleSearch() {}

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex w-full max-w-3xl items-center justify-start max-sm:flex-col max-sm:gap-4"
    >
      <div className="relative flex flex-1 items-center justify-start max-sm:w-full">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
      </div>
    </form>
  );
}

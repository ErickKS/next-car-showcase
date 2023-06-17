"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Fragment, useState } from "react";

import { Listbox, Transition } from "@headlessui/react";
import { updateSearchParams } from "@/utils";

interface CustomFilterProps {
  title: string;
  options: [title: string, value: string];
}

export default function CustomFilter({ title, options }: CustomFilterProps) {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  function handleUpdateParams(e: { title: string; value: string }) {
    const newPathName = updateSearchParams(title, e.value.toLocaleLowerCase());

    router.push(newPathName);
  }

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative z-10 w-fit">
          <Listbox.Button className="relative flex w-full min-w-[127px] cursor-default items-center justify-between rounded-lg border bg-white px-3 py-2 text-left shadow-md sm:text-sm">
            <span className="block truncate">{selected.title}</span>
            <Image src="/chevron-up-down.svg" alt=" " width={20} height={20} className="ml-4 object-contain" />
          </Listbox.Button>

          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none px-4 py-2 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{option.title}</span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

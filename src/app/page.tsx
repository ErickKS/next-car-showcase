import Banner from "@/components/Banner";
import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";

import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/ShowMore";

interface HomeProps {
  searchParams: {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Banner />

      <div className="mx-auto mt-12 max-w-[1440px] px-6 py-4 sm:px-16" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="mt-12 flex w-full flex-wrap items-center justify-between gap-5">
          <SearchBar />

          <div className="flex flex-wrap items-center justify-start gap-2">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="grid w-full grid-cols-1 gap-8 pt-14 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="mt-16 flex flex-col items-center justify-center gap-2">
            <h2 className="text-xl font-bold text-black">Oops, no result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

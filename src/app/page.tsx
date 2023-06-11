import Banner from "@/components/Banner";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner />

      <div className="mx-auto mt-12 max-w-[1440px] px-6 py-4 sm:px-16" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="flex-between mt-12 w-full flex-wrap items-center gap-5">
          <SearchBar />

          <div className="flex flex-wrap items-center justify-start gap-2">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}

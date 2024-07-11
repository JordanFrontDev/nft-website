import { TopCollectionData } from "@/data/data";
import TopCollectionCard from "./TopCollectionCard";

function TopCollection() {
  return (
    <div className="pt-16 pb-12">
      <h1 className="text-center font-bold text-3xl md:text-4xl text-blue-950">
        Top Collection over{" "}
        <span className="text-amber-600">Last 24 Hours</span>
      </h1>
      <div className="mt-16 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {TopCollectionData.map((data, i) => (
          <div
            key={data.id}
            data-aos="zoom-in"
            data-aos-delay={`${i * 200}`}
            data-aos-anchor-placement="top-center"
          >
            <TopCollectionCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCollection;

import Image from "next/image";

function Hero() {
  return (
    <div className="h-[calc(100vh-13vh)] w-full flex justify-center content-center flex-col">
      <div className="w-4/5 mx-auto items-center grid  grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Text content */}
        <div className="col-span-2">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl text-blue-950 font-bold">
            Buy, sell and collect NFTs
          </h1>
          <p className="text-sm md:text-[17px] text-gray-700 text-opacity-80 mt-4 font-medium">
            Discover, trade, and showcase unique digital assets on our platform.
            Start your journey in the exciting world of digital ownership today!
          </p>
          <div className="flex items-center space-x-2 mt-10">
            <button className="w-36 rounded-full py-3 bg-blue-900 hover:bg-blue-950 text-center font-semibold text-white transition-all">
              Upload
            </button>
            <button className="w-36 rounded-full py-3 bg-rose-900 hover:bg-rose-950 text-center font-semibold text-white transition-all">
              Explore
            </button>
          </div>
        </div>
        {/* Image content */}
        <div className="col-span-3">
          <Image
            src="/images/hero2.png"
            alt="Hero image"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

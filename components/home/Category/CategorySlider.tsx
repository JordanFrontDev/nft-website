"use client";

import { HotBidData } from "@/data/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotBidCard from "../Hotbids/HotBidCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function CategorySlider() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite={true}
      responsive={responsive}
      itemClass="item"
    >
      {HotBidData.map((data) => (
        <div key={data.id}>
          <HotBidCard data={data} />
        </div>
      ))}
    </Carousel>
  );
}

export default CategorySlider;

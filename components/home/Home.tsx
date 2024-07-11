"use client";

import { useEffect } from "react";
import Category from "./Category/Category";
import CreateSellNft from "./CreateSellNft/CreateSellNft";
import Hero from "./Hero/Hero";
import Hotbids from "./Hotbids/Hotbids";
import TopCollection from "./TopCollection/TopCollection";
import "aos/dist/aos.css";
import AOS from "aos";

function Home() {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAos();
  }, []);

  return (
    <div>
      <Hero />
      <Hotbids />
      <TopCollection />
      <Category />
      <CreateSellNft />
    </div>
  );
}

export default Home;

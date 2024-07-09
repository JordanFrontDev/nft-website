"use client";

import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(true);
  };

  const closeNavHandler = () => {
    setShowNav(false);
  };

  return (
    <>
      <Nav openNav={showNavHandler} />
      <MobileNav nav={showNav} closeNav={closeNavHandler} />
    </>
  );
}

export default ResponsiveNav;

"use client";

import { useState } from "react";
import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Page = () => {
  const [liteTheme, setLiteTheme] = useState(true);

  return (
    <div className={`${liteTheme ? "light" : "dark"}`}>
      <div className=" relative bg-primary-light dark:bg-[#1A232E] overflow-hidden">
        <Navbar liteTheme={liteTheme} setLiteTheme={setLiteTheme} />
        <Hero />
        <div className="relative">
          <About />
          <div className="gradient-03 z-0" />
          <Explore />
        </div>
        <div className="relative">
          <GetStarted />
          <div className="gradient-04 z-0" />
          <WhatsNew />
        </div>
        <World />
        <div className="relative">
          <Insights />
          <div className="gradient-04 z-0" />
          <Feedback />
        </div>
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Page;

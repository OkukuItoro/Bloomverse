import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-3 rounded-full bg-[#1A232E] dark:bg-white p-2 z-40"
        >
          <BsArrowUp size={30} className="text-white dark:text-[#1A232E]" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

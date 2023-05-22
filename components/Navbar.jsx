"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";
import { FiSun, FiSearch } from "react-icons/fi";
import { RiMoonLine } from "react-icons/ri";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import NavbarLinks from "./NavbarLinks";

const Navbar = ({ liteTheme, setLiteTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <FiSearch size={28} className="dark:text-white text-[#1A232E]" />
        {/* CREATE THE BLOOMVERSE LOGO */}
        <h2 className="font-extrabold text-[24px] leading-[30px] text-[#1A232E] dark:text-white">
          BLOOMVERSE
        </h2>
        <div className="flex gap-5 items-center">
          {liteTheme ? (
            <FiSun
              size={28}
              className="text-[#1A232E] cursor-pointer"
              onClick={() => setLiteTheme(false)}
            />
          ) : (
            <RiMoonLine
              size={28}
              className="text-white cursor-pointer"
              onClick={() => setLiteTheme(true)}
            />
          )}
          <CgMenuRight
            size={28}
            className={
              open
                ? "text-white dark:text-[#1A232E]  bg-[#1A232E] dark:bg-white rounded-full p-1 flex items-center justify-center cursor-pointer"
                : "text-[#1A232E] dark:text-white cursor-pointer"
            }
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      {open && <NavbarLinks />}
    </motion.nav>
  );
};

export default Navbar;

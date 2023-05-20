"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { FiSun, FiSearch } from "react-icons/fi";
import { RiMoonLine } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";

const Navbar = ({ liteTheme, setLiteTheme }) => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <FiSearch size={28} className="dark:text-white text-[#1A232E]" />
      {/* CREATE THE BLOOMVERSE LOGO */}
      <h2
        className="font-extrabold text-[24px] leading-[30px] text-[#1A232E] dark:text-white
          "
      >
        BLOOMVERSE
      </h2>
      <div className="flex gap-5 items-center">
        {liteTheme ? (
          <FiSun
            size={28}
            className="text-[#1A232E]"
            onClick={() => setLiteTheme(false)}
          />
        ) : (
          <RiMoonLine
            size={28}
            className="text-white"
            onClick={() => setLiteTheme(true)}
          />
        )}
        <CgMenuRight size={28} className="text-[#1A232E] dark:text-white" />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;

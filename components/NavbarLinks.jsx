"use client";

import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { navbarLinks } from "../constants";

const NavbarLinks = () => {
  const [linkIcon, showLinkIcon] = useState(null);

  return (
    <div className="absolute mt-2 right-5 bg-white dark:bg-[#1A232E] rounded shadow-lg px-4 w-[170px] z-30 py-4">
      {navbarLinks.map((linkItem, i) => (
        <div key={i} className="p-1">
          <a
            onMouseOver={() => showLinkIcon(i)}
            onFocus={() => showLinkIcon(i)}
            className="flex flex-row gap-2 items-center hover:font-bold dark:text-white text-[#1A232E]"
            href={linkItem.link}
          >
            <p>{linkItem.name}</p>
            {linkIcon === i && <FiExternalLink />}
          </a>
        </div>
      ))}
    </div>
  );
};
export default NavbarLinks;

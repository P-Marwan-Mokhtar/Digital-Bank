import React, { useState } from "react";

const Header = () => {
  let links = ["Home", "About", "Contact", "Blog", "Careers"];
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="bg-white fixed z-20 top-0 w-full">
      <div className="container relative">
        <div className="flex justify-between items-center py-[20px] md:p-0 ">
          <img
            src="/src/assets/images/logo-dark.svg"
            alt=""
            className="cursor-pointer"
          />{" "}
          {!isActive ? (
            <img
              src="/src/assets/images/icon-hamburger.svg"
              alt=""
              className="md:hidden cursor-pointer"
              onClick={() => setIsActive(true)}
            />
          ) : (
            <img
              src="/src/assets/images/icon-close.svg"
              className="md:hidden cursor-pointer"
              alt=""
              onClick={() => setIsActive(false)}
            />
          )}
          <ul
            className={` flex-col h-fit hidden md:flex top-[30%]  transition-all duration-200 rounded-2xl fixed shadow-[2px_2px_30px_10px_#a0a1a6] md:shadow-none left-[50%] translate-[-50%]  md:left-0 md:top-0 md:translate-0 w-[calc(100%-50px)] md:w-fit bg-white  md:flex-row   md:relative  items-center md:gap-[20px] ${
              isActive ? "!flex" : ""
            }`}
          >
            {links.map((link) => (
              <a href="">
                <li className=" text-gray-500 relative text-[18px] flex items-start font-semibold py-[20px] after:content-[''] after:block after:w-0 after:h-[3px] after:absolute after:bottom-0 after:left after:bg-[#2DBEBB] hover:after:w-full after:transition-all after:duration-200 ">
                  {link}
                </li>
              </a>
            ))}
          </ul>
          <button className="btn hidden md:block">Request Invite</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

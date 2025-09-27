import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  let icons = [
    <FaFacebookF />,
    <FaYoutube />,
    <BsTwitterX />,
    <FaPinterest />,
    <FaInstagram />,
  ];
  let links = [
    "About Us",
    "Contact",
    "Blog",
    "Careers",
    "Support",
    "Privacy Policy",
  ];
  return (
    <footer className="bg-[#2D314E]">
      <div className="container py-[50px]">
        <div className="flex gap-[30px] md:gap-0 flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-[30px] md:gap-0 md:flex-row md:w-[63%] lg:w-[45%] justify-between">
            <div className="flex flex-col gap-[20px] md:gap-0 justify-between h-full ">
              <img
                src="/src/assets/images/logo-light.svg"
                className="w-[180px]"
                alt=""
              />
              <ul className="flex gap-[15px] text-white ">
                {icons.map((icon) => (
                  <a
                    href=""
                    className="relative top-0 hover:top-[-10px] hover:text-[#2DBEBB] transition-all duration-200"
                  >
                    <li className="text-[20px]  ">{icon}</li>
                  </a>
                ))}
              </ul>
            </div>

            <ul className="flex flex-col gap-[15px] text-white">
              {links.slice(0, 3).map((link) => (
                <a href="">
                  <li className="hover:text-[#2DBEBB] transition-all duration-200">
                    {link}
                  </li>
                </a>
              ))}{" "}
            </ul>
            <ul className="flex flex-col gap-[15px] text-white">
              {links.slice(3, 6).map((link) => (
                <a href="">
                  <li className="hover:text-[#2DBEBB] transition-all duration-200">
                    {link}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex md:justify-end">
              <button className="btn">Request Invite</button>
            </div>
            <p>© Digitalbank. All Rights Reversed</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

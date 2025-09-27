import React, { useState } from "react";
import img1 from "/src/assets/images/icon-online.svg";
import img2 from "/src/assets/images/icon-budgeting.svg";
import img3 from "/src/assets/images/icon-onboarding.svg";
import img4 from "/src/assets/images/icon-api.svg";
const About = () => {
  const [features, setFeatures] = useState([
    {
      img: img1,
      title: "Online Banking",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aut mollitia veritatis ratione fuga error, excepturi placeat reprehenderit repellendus.",
    },
    {
      img: img2,
      title: "Simple Budgeting",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aut mollitia veritatis ratione fuga error, excepturi placeat reprehenderit repellendus.",
    },
    {
      img: img3,
      title: "Fast Onboarding",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aut mollitia veritatis ratione fuga error, excepturi placeat reprehenderit repellendus.",
    },
    {
      img: img4,
      title: "Open API",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aut mollitia veritatis ratione fuga error, excepturi placeat reprehenderit repellendus.",
    },
  ]);
  return (
    <section className="bg-[#F4F5F7]">
      <div className="container py-[100px]">
        <div className="flex flex-col gap-[15px]">
          <h1 className=" text-[28px] md:text-[40px] text-[#3D3D57]">
            Why Choose Digitalbank?{" "}
          </h1>
          <p className="max-w-[600px] md:text-[18px] font-semibold text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            beatae laudantium fugiat officia itaque atque
          </p>
        </div>
        <div className="mt-[50px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px]  ">
          {features.map((data) => (
            <div className="flex flex-col gap-[20px]">
              <img src={data.img} className="w-[70px] h-[70px]" alt="" />
              <h2 className="text-[25px] text-[#3A3C48]">{data.title}</h2>
              <p>{data.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

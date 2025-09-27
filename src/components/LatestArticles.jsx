import React, { useState } from "react";
import img1 from "/src/assets/images/image-currency.jpg";
import img2 from "/src/assets/images/image-restaurant.jpg";
import img3 from "/src/assets/images/image-plane.jpg";
import img4 from "/src/assets/images/image-confetti.jpg";
const LatestArticles = () => {
  const [Article, setArticles] = useState([
    {
      img: img1,
      name: "Claire Robinson",
      title: "Receive money in any currency with no fee",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere animi corrupti possimus qui eius amet voluptate aliquam ad molestias, cum necessitatibus repellendus. Doloribus, architecto!",
    },
    {
      img: img2,
      name: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere animi corrupti possimus qui eius amet voluptate aliquam ad molestias, cum necessitatibus repellendus. Doloribus, architecto!",
    },
    {
      img: img3,
      name: "Wilson Hutton",
      title: "Take your digitalblank card wherever you go",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere animi corrupti possimus qui eius amet voluptate aliquam ad molestias, cum necessitatibus repellendus. Doloribus, architecto!",
    },
    {
      img: img4,
      name: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere animi corrupti possimus qui eius amet voluptate aliquam ad molestias, cum necessitatibus repellendus. Doloribus, architecto!",
    },
  ]);
  return (
    <section className="bg-[#FAFAFA]">
      <div className="container py-[100px]">
        <h2 className="text-[40px] text-[#3A3C48] mb-[50px]">Latest Articles</h2>
        <div className=" grid  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px]">
          {Article.map((data) => (
            <div className="bg-white  flex flex-col gap-[20px] h-fit   rounded-b-[10px]">
              <img
                src={data.img}
                className=" h-[300px] w-full rounded-t-[10px]"
                alt=""
              />
              <div className="p-[30px] flex flex-col gap-[15px] h-fit ">
                <span className="text-gray-500">By {data.name}</span>
                <h3 className="text-[24px] hover:text-[#2DBEBB] transition-all duration-200 cursor-pointer ">{data.title}</h3>
                <p className="max-w-[400px] text-[18px] line-clamp-3 font-semibold">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;

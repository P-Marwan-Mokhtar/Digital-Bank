import React from "react";

const Landing = () => {
  return (
    <section className="relative pb-[50px] md:pb-0 overflow-x-clip bg-[#FAFAFA] bg-[url(/src/assets/images/bg-intro-mobile.svg)]  bg-cover md:bg-auto md:bg-[url(/src/assets/images/bg-intro-desktop.svg)] md:bg-[position:420px_center] lg:bg-[position:550px_center] xl:bg-[position:700px_center] 2xl:bg-[position:850px_center] bg-no-repeat ">
      <div className="container   ">
        <div className=" flex w-full  flex-col md:flex-row   items-center justify-between md:h-[80vh] gap-[20px]  ">
          <div className=" items-center md:items-start w-full flex flex-col gap-[20px] ">
            <h1 className=" text-[40px] md:text-[40px] xl:text-[55px]  text-[#2D3051] text-base/17">
              Next generation <br /> digital banking
            </h1>
            <p className="max-w-[450px] text-center md:text-start  text-gray-500 font-semibold text-[18px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              nihil nam fugit eveniet a pariatur in reiciendis. Exercitationem,
              placeat omnis?
            </p>
            <button className="btn ">Request Invite</button>
          </div>

          <img
            src="/src/assets/images/image-mockups.png"
            className="order-[-1] w-full md:order-2 md:w-[50%] lg:w-[55%] xl:w-[45%] max-w-full md:absolute md:right-[-100px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;

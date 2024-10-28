import React from "react";
import amazon from "../image/amazon.png";
import flipkart from "../image/flipkart.png";
import heroImg from "../image/shoe_image.png";

const Hero = () => {
  return (
    <div>
      <div className="hero h-lvh mt-[-83px] flex justify-center items-center">
        <div className="container mx-auto">
          <div className="hero-wrapper flex justify-between">
            <div className="hero-left w-1/2">
              <h1 className="text-9xl uppercase font-bold">
                Your Feet <br /> deserve <br /> the best{" "}
              </h1>
              <p className="text-xl mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus repellendus natus veritatis assumenda possimus similique
                provident fugit ratione amet, aliquam, molestias sunt rerum qui
                ullam.
              </p>

              <div className="btn-wraper inline-flex gap-5 mt-5">
                <a
                  href="#"
                  className="text-xl text-white font-medium bg-red-600 py-3 px-7 rounded-lg hover:bg-red-500  transition-colors"
                >
                  Shop Now
                </a>
                <a
                  href="#"
                  className=" text-xl font-medium bg-white text-gray-900 border-2 border-gray-950 py-3 px-7 rounded-lg hover:bg-red-500 hover:text-white  hover:transition-colors "
                >
                  Category
                </a>
              </div>

              <div className="available my-5">
                <p>also avalible on</p>
                <div className="logos flex items-center gap-5 py-2">
                  <img src={amazon} alt="" />
                  <img src={flipkart} alt="" />
                </div>
              </div>
            </div>
            <div className="hero-right ">
              <img src={heroImg} className="w-[720px]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

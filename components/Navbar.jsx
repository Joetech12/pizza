import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[100px] w-full bg-[#d1411e] px-[50px] py-[0px] flex justify-between items-center sticky top-0">
      <div className="flex-[2] flex items-center">
        <div className="bg-white p-[10px] w-[50px] h-[50px] rounded-[50%]">
          <Image src="/img/telephone.png" alt="" width="32px" height="32px" />
        </div>
        <div className="ml-[20px] text-white">
          <div className="text-[12px] font-[500]">ORDER NOW</div>
          <div className="text-[20px] font-bold">08165489652</div>
        </div>
      </div>
      <div className="flex-[4] ">
        <ul className="flex items-center text-white">
          <li className="m-[20px] font-[500]">Homepage</li>
          <li className="m-[20px] font-[500]">Products</li>
          <li className="m-[20px] font-[500]">Menu</li>
          <Image src="/img/logo.png" alt="" width="160px" height="69px" />
          <li className="m-[20px] font-[500]">Events</li>
          <li className="m-[20px] font-[500]">Blog</li>
          <li className="m-[20px] font-[500]">Contact</li>
        </ul>
      </div>
      <div className="flex-[1] flex justify-end">
        <div className="relative ">
        <Image src="/img/cart.png" alt="" width="30px" height="30px" />
        <div className="absolute top-[-10px] right-[-10px] w-[20px] h-[20px] rounded-[50%] bg-white font-bold flex justify-center items-center p-[3px] text-[#d1411e]">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className="w-[22%] p-[10px] flex flex-col justify-center items-center py-[20px] px-[40px] cursor-pointer">
        <Image src="/img/pizza.png" alt="" width="500px" height="500px" />
        <h2 className="text-[20px] font-bold text-[#d1411e]">FIORI DI ZUCCA</h2>
        <span className="text-[20px] font-bold text-[#666]">$19.90</span>
        <p className="text-[18px] text-[#666] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, illo!</p>
    </div>
  )
}

export default PizzaCard
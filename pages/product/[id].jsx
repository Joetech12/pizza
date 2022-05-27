import { useState } from "react";
import Image from "next/image";

const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod quaerat, eaque aliquam minus error repudiandae veritatis enim deleniti? Amet rerum mollitia nostrum. Voluptatibus hic in, esse voluptatum vel dolorum?",
  };

  return (
    <div className="h-[calc(100vh_-_100px)] flex pt-[100px]">
      <div className="flex-[1] h-[100%] items-center justify-center ">
        <div className="w-[80%] h-[80%] relative">
          <Image src={pizza.img} layout="fill" objectFit="contain" alt="" />
        </div>
      </div>
      <div className="flex-[1] p-[20px]">
        <h1 className="font-bold text-[40px] pb-[10px]">{pizza.name}</h1>
        <span className="text-[#d1411e] text-[24px] font-[400] border-b-[1px] border-[#d1411e] ">
          ${pizza.price[size]}
        </span>
        <p className="pt-[30px] pb-[30px]">{pizza.desc}</p>
        <h3 className="font-bold text-[20px] pb-[20px]">Choose the size</h3>
        <div className="flex justify-between w-[40%] cursor-pointer font-bold text-[20px] pb-[20px]">
          <div
            className="w-[30px] h-[30px] relative"
            onClick={() => {
              setSize(0);
            }}
          >
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className="absolute top-[-15px] right-[-20px] bg-[teal] text-white text-[12px] py-[2px] px-[6px] rounded-[10px]">
              Small
            </span>
          </div>
          <div
            className="w-[40px] h-[40px] relative"
            onClick={() => {
              setSize(1);
            }}
          >
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className="absolute top-[-15px] right-[-35px] bg-[teal] text-white text-[12px] py-[2px] px-[6px] rounded-[10px]">
              Medium
            </span>
          </div>
          <div
            className="w-[50px] h-[50px] relative"
            onClick={() => {
              setSize(2);
            }}
          >
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className="absolute top-[-15px] right-[-20px] bg-[teal] text-white text-[12px] py-[2px] px-[6px] rounded-[10px]">
              Large
            </span>
          </div>
        </div>
        <h3 className="font-bold text-[20px] pb-[20px]">
          Choose additional ingredients
        </h3>
        <div className="flex mb-[30px] font-bold text-[20px] pb-[20px]">
          <div className="flex items-center mr-[10px] text-[14px] font-[500]">
            <input
              type="checkbox"
              id="double"
              name="double"
              className="w-[20px] h-[20px] mr-[5px]"
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className="flex items-center mr-[10px] text-[14px] font-[500]">
            <input
              type="checkbox"
              id="extra"
              name="extra"
              className="w-[20px] h-[20px] mr-[5px]"
            />
            <label htmlFor="extra">Extra Cheese</label>
          </div>
          <div className="flex items-center mr-[10px] text-[14px] font-[500]">
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className="w-[20px] h-[20px] mr-[5px]"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className="flex items-center mr-[10px] text-[14px] font-[500]">
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className="w-[20px] h-[20px] mr-[5px]"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className="">
          <input
            type="number"
            defaultValue={1}
            className="w-[50px] h-[30px] outline outline-[1px] px-[5px]"
          />
          <button className="h-[30px] ml-[10px] px-[8px] bg-[#d1411e] text-white font-[500] cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

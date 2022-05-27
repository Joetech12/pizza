import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  const [index, setIndex] = useState(0)

  const handleArrow = (direction) => {
    if(direction === "l"){
      setIndex(index !== 0 ? index-1 : 2)
    }
    if(direction === "r"){
      setIndex(index !== 2 ? index+1 : 0)
    }
  }

  return (
    <div className="bg-[#d1411e] h-[calc(100vh_-_100px)] overflow-hidden">
      {/* Left Arrow */}
      <div className="absolute w-[10%] h-[20%] top-0 bottom-0 m-auto left-0 cursor-pointer z-[5]" onClick={() => handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      {/* Pizza Images */}
      <div style={{transform: `translateX(${-100*index}vw)`}} className="w-[300vw] h-[100%] flex transition-all duration-1000 ease-in-out">
        {images.map((img, i) => (
          <div className="w-[100vw] h-[100%] relative" key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain"/>
          </div>
        ))}
      </div>
      {/* Right Arrow */}
      <div className="absolute w-[10%] h-[20%] top-0 bottom-0 m-auto right-0 cursor-pointer z-[5]" onClick={() => handleArrow("r")}>
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;

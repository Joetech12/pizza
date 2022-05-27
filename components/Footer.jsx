import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[calc(100vh_-_100px)] bg-[#222] flex pt-[80px] pb-[80px]">
        <div className="flex-[1] relative flex">
        <Image src="/img/bg.png" alt="" layout="fill" />
        </div>
        <div className="flex-[2] relative flex justify-between">
          <div className="font-bold flex-1 py-[0] px-[20px] text-[30px] text-gray-300">
            <h2 className="">OH YES, WE DID THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.</h2>
          </div>
          <div className=" flex-1 py-[0] px-[20px]">
            <h2 className="font-bold text-[20px] text-[#b7903c]">FIND OUR RESTAURANTS</h2>
            <p className="text-gray-300">1654 R. Don Road #304. 
            <br/> NewYork, 85022
            <br/> (602) 867-1010
            </p>
            <br/>
            <p className="text-gray-300">1654 R. Don Road #304. 
            <br/> NewYork, 85022
            <br/> (602) 867-1010
            </p>
            <br/>
            <p className="text-gray-300">1654 R. Don Road #304. 
            <br/> NewYork, 85022
            <br/> (602) 867-1010
            </p>
            <br/>
            <p className="text-gray-300">1654 R. Don Road #304. 
            <br/> NewYork, 85022
            <br/> (602) 867-1010
            </p>
          </div>
          <div className=" flex-1 py-[0] px-[20px]">
            <h2 className="font-bold text-[20px] text-[#b7903c]">WORKING HOURS</h2>
            <p className="text-gray-300">MONDAY - FRIDAY
            <br/> 9:00 - 22:00
            </p>
            <p className="text-gray-300">SATURDAY - SUNDAY
            <br/> 12:00 - 24:00
            </p>
          </div>
        </div>
    </div>
  )
}

export default Footer
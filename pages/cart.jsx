import React from "react";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="p-[50px] flex">
      <div className="flex-[2]">
        <table className="w-[100%] border-separate [border-spacing:20px]">
          <tr className="">
            <th className="">Product</th>
            <th className="">Name</th>
            <th className="">Extras</th>
            <th className="">Price</th>
            <th className="">Quantity</th>
            <th className="">Total</th>
          </tr>
          <tr className="">
            <td className="">
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td className="text-center">
              <span className="font-[500] text-[#d1411e] text-[20px]">
                CORALZO
              </span>
            </td>
            <td className="text-center">
              <span className="">Double ingredient, spicy sauce</span>
            </td>
            <td className="text-center">
              <span className="">$19.90</span>
            </td>
            <td className="text-center">
              <span className="">2</span>
            </td>
            <td className="text-center">
              <span className="font-[500] text-[20px]">$39.80</span>
            </td>
          </tr>
        </table>
      </div>
      <div className="flex-[1]">
        <div className="w-[90%] max-h-[300px] bg-[#333] p-[50px] pt-[20px] flex flex-col justify-between text-white">
          <h2 className="font-bold text-[30px]">CART TOTAL</h2>
          <div className="">
            <b className="mr-[10px]">Subtotal:</b>$79.60
          </div>
          <div className="">
            <b className="mr-[10px]">Discount:</b>$0.00
          </div>
          <div className="">
            <b className="mr-[10px]">Total:</b>$79.60
          </div>
          <button className="h-[30px] text-[#d1411e] font-bold cursor-pointer bg-white mt-[20px]">
            CHECK OUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

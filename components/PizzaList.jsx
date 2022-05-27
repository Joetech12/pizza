import React from 'react'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
    <div className="py-[20px] px-[10px] flex flex-col items-center">
        <h1 className="font-extrabold text-[40px]">THE BEST PIZZA SHOP IN LAGOS</h1>
        <p className="text-[24px] text-[#444] w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse facilis at non. Labore aperiam aliquam magni, magnam, reprehenderit non vero placeat doloremque alias fugit accusamus voluptate quibusdam saepe! Ipsum adipisci repellat nisi mollitia facere voluptates vel dolores earum veritatis, soluta ipsam officiis tempore totam consectetur inventore reprehenderit atque eaque dicta!
        </p>
        <div className="flex justify-center items-center w-[100%] flex-wrap">
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
        </div>
    </div>
  )
}

export default PizzaList
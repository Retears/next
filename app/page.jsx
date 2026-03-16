"use client"

import Card from "./components/Card";
import cardsData from "./data/cardData";
import { useState } from "react";
import Hero from "./components/hero";

export default function Home() {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (




    <div>

      <Hero toggleMenu={toggleMenu} />
      <div className="flex justify-end">
        <ul className={open ? "flex flex-col bg-amber-300" : "hidden"}>
          <li><a href="#">Próximas fechas</a></li>
          <li><a href="#">Comprar entradas</a></li>
          <li><a href="#">Tienda</a></li>
        </ul>
      </div>


    </div>


  )
}



























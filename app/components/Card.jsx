import { getRandomColor } from "../data/cardData";
// import Button; Button_1 from "./button";

export default function Card({ title, description, image, icon, price, }) {
  const color = getRandomColor();
  return (

    <div className={`max-w-sm rounded-2xl overflow-hidden shadow-lg ${color} hover:scale-105 transition-transform duration-300`}>
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
      />

      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          {title}
        </h2>

        <p className="text-gray-600">
          {description}
          {price}
          {icon}
        </p>
        {/* <Button/> */}
      </div>
    </div>


  );
}


const products = [
  {
    id: 1,
    title: "Auriculares inalámbricos",
    text: "Auriculares Bluetooth con cancelación de ruido y batería de larga duración.",
    price: 59.99,
    image: "/descarga.jfif"
  },
  {
    id: 2,
    title: "Teclado mecánico RGB",
    text: "Teclado mecánico con iluminación RGB y switches de alta precisión.",
    price: 89.99,
    image: "/descarga.jfif"
  },
  {
    id: 3,
    title: "Ratón gaming",
    text: "Ratón ergonómico con sensor óptico de alta precisión y botones programables.",
    price: 39.99,
    image: "/descarga.jfif"
  },
  {
    id: 4,
    title: "Monitor 24 pulgadas",
    text: "Monitor Full HD con panel IPS y frecuencia de 75Hz ideal para trabajo y gaming.",
    price: 179.99,
    image: "/descarga.jfif"
  },
  {
    id: 5,
    title: "Webcam HD",
    text: "Cámara web con resolución 1080p y micrófono integrado para videollamadas.",
    price: 49.99,
    image: "/descarga.jfif"
  },
  {
    id: 6,
    title: "Altavoz Bluetooth",
    text: "Altavoz portátil resistente al agua con sonido potente.",
    price: 34.99,
    image: "/descarga.jfif"
  },
  {
    id: 7,
    title: "Disco SSD 1TB",
    text: "Unidad SSD rápida para mejorar el rendimiento de tu ordenador.",
    price: 119.99,
    image: "/descarga.jfif"
  },
  {
    id: 8,
    title: "Base de refrigeración",
    text: "Base con ventiladores silenciosos para mantener tu portátil frío.",
    price: 29.99,
    image: "/descarga.jfif"
  },
  {
    id: 9,
    title: "Smartwatch deportivo",
    text: "Reloj inteligente con monitor de actividad física y notificaciones.",
    price: 79.99,
    image: "/descarga.jfif"
  },
  {
    id: 10,
    title: "Powerbank 20000mAh",
    text: "Batería externa de gran capacidad con carga rápida.",
    price: 44.99,
    image: "/descarga.jfif"
  }
];

const colors = [
  "bg-red-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-orange-200"
];

export function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// const cardData = {
//     title: "Aprendiendo Next.js",
//     description: "Esta es una tarjeta creada con Tailwind CSS",
//     image: "https://picsum.photos/400/200"
// };

// const cardData_1 = {
//     title: "Hola linda",
//     description: "Esta es una tarjeta especial",
//     image: "/descarga.jfif"
// }

// const cardsData = [cardData, cardData_1]

export default products;


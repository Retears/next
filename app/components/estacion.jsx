"use client" // Necesario en Next.js para usar interactividad: se renderiza en el lado del cliente

import { useState } from "react"; // Importamos useState

export default function Estacion({ nombre, operario }) {
    const [piezas, setPiezas] = useState(0); // Empezamos en 0 piezas
    return (
        <div className="p-4 border-2 border-blue-500 rounded-lg">
            <h3 className="text-xl font-bold">{nombre}</h3>
            <p>Piezas terminadas: <span className="text-blue-600 font-bold">{piezas}</span></p>
            {/*
            1. Hacemos click en el botón
            2. La función actualiza el estado de piezas
            3. useState tiene 2 partes: piezas y setPiezas
            4. Siempre que utilizamos useState vamos a actualizar el valor
            utilizando la función setXYZ()
            */}
            <button
                onClick={() => setPiezas(piezas + 1)}
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
            >
                Finalizar Pieza
            </button>
        </div>           
            );
}
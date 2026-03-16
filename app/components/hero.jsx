"use client"

export default function Hero({ toggleMenu }) {

    return (
        <div className="flex bg-amber-500 items-center justify-between p-10">
            <h1>Mi tienda de Linda</h1>

            <div 
              className="w-8 flex flex-col gap-2 cursor-pointer"
              onClick={toggleMenu}
            >
                <div className="rounded w-full h-1 bg-black"></div>
                <div className="rounded w-full h-1 bg-black"></div>
                <div className="rounded w-full h-1 bg-black"></div>
            </div>

        </div>
    );
}
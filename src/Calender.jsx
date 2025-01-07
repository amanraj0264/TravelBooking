import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LuIndianRupee } from "react-icons/lu";



export function Calender() {

  const monthData = [
    { name: "January", price: 1250 ,isBestPrice: true },
    { name: "February", price: null },
    { name: "March", price: 856 ,isBestPrice: true },
    { name: "April", price: 898, isBestPrice: true },
    { name: "May", price: null },
    { name: "June", price: null },
    { name: "July", price: null },
    { name: "August", price: null },
    { name: "September", price: null },
    { name: "October", price: null },
    { name: "November", price: 556 ,isBestPrice: true },
    { name: "December", price: null },
  ];
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthClick = (month) => {
    setSelectedMonth(month.name);
  };

  return (
    <>
      
      <div className="p-6">
      <div className="grid grid-cols-3 gap-4">
        {monthData.map((month, index) => (
          <div
            key={index}
            className={`p-4 text-center rounded-lg cursor-pointer  group  hover:bg-orange-400 hover:text-white duration-200 ease-in-out  ${
              month.isBestPrice
                ? "bg-orange-100 text-black "
                : "bg-orange-100 text-black"
            }`}
            onClick={() => handleMonthClick(month)}
          >
            <h3 className="text-lg font-bold">{month.name}</h3>
            {month.price ? (
              <>
                <p className="text-xl font-semibold text-center flex justify-center items-center "><LuIndianRupee/>{month.price}</p>
                {month.isBestPrice && <p className="text-sm">Best price</p>}
              </>
            ) : (
              <button className="text-orange-600 text-2xl "><CiSearch  className="group-hover:text-white duration-200 ease-in-out "></CiSearch></button>
            )}
          </div>
        ))}
      </div>
      {selectedMonth && (
        <div className="mt-6 text-lg font-medium text-center">
          Selected Month: <span className="text-orange-500">{selectedMonth}</span>
          
        </div>

        
      )}
    </div>
    </>

       
    
  )
}



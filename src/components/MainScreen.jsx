import React, { useState } from "react";
import useFetchData from "../utils/useFetchData";
import Card from "./Card";
import logo from "../assets/logo.png";

const MainScreen = () => {
  const cardData = useFetchData(
    "https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json"
  );

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = cardData?.data?.filter((card) =>
    card.crop_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="header bg-white p-4 shadow-md flex justify-between items-center">
        <img src={logo} alt="logo" className="bg-black object-contain h-10" />
        <input
          type="text"
          placeholder="Search crops"
          className="flex justify-center p-2 border border-gray-300 rounded-md m-8 w-[30%]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div></div>
      </div>

      <div className="flex flex-col items-center p-4 bg-gray-200">
        <div className="flex flex-wrap justify-between">
          {filteredCards?.map((card) => (
            <Card {...card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;

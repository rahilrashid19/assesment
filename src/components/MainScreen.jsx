import React, { useState } from "react";
import useFetchData from "../utils/useFetchData";
import Card from "./Card";
import logo from "../assets/logo.png";
import LoginPage from "./LoginPage";
import ReactPaginate from "react-paginate";
import "../../src/paginate.css";

const MainScreen = () => {
  const cardData = useFetchData(
    "https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json"
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // state variable for logout
  const cardsPerPage = 9;

  // Check if cardData is not yet available
  if (!cardData) {
    return null;
  }

  const signOut = () => {
    setIsLoggedIn(true);
  };

  // if user is logged in , then i will set isLoggedIn true which will take us to login page again
  if (isLoggedIn) {
    return <LoginPage />;
  }

  const filteredCards = cardData.data?.filter((card) =>
    card.crop_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Check if filteredCards is not yet available
  if (!filteredCards) {
    return null;
  }

  const pageCount = Math.ceil(filteredCards.length / cardsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * cardsPerPage;
  const currentCards = filteredCards.slice(offset, offset + cardsPerPage);

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
        <div>
          <button
            onClick={() => {
              signOut();
            }}
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* pagination section */}

      <div className="flex flex-col items-center p-4 bg-gray-200">
        <div className="flex flex-wrap justify-between">
          {currentCards.map((card) => (
            <Card {...card} key={card.id} />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 20,
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
          }}
        >
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={pageCount}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            activeClassName={"item active "}
            breakClassName={"item break-me "}
            breakLabel={"..."}
            containerClassName={"pagination"}
            disabledClassName={"disabled-page"}
            marginPagesDisplayed={2}
            nextClassName={"item next "}
            pageClassName={"item pagination-page "}
            previousClassName={"item previous"}
          />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;

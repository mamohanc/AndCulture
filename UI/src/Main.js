import React, { useContext, useEffect, useState } from "react";
import List from "./Components/List";
import GLOBAL_CONTEXT from "./Context";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const {handleClick,handleKeyPress,list,setSearch}=useContext(GLOBAL_CONTEXT);


  return (
    <>
      <section className="hero">
        <main className="container">
          <div className="title">
            Open Breweries
            <hr />
          </div>
          <div className="text-box">
            <input
              type="text"
              placeholder="Search for breweries"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={handleClick}
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </main>
      </section>
      <section className="home-2">
        <main className="container">
          <div className="grid">
            {list && list.map((item,index) => <List key={`xx12${index}`} data={item} />)}
          </div>
        </main>
      </section>
    </>
  );
};

export default Main;

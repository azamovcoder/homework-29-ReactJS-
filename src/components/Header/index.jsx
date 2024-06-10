import "./header.scss";

import React, { useState } from "react";

import { FaMicrophone } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Logo from "../../assets/Logo2.jpg";
import { MdOutlineVideoCall } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ProductData } from "../../static";
import { TbBell } from "react-icons/tb";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (ProductData) {
      const results = ProductData.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  let searchResultItems = searchResults.map((product) => (
    <NavLink to={`/product/${product.id}`}>
      <div className="header__search__result">
        <img src={product.image} alt="" />
        <p> {product.title}</p>
      </div>
    </NavLink>
  ));

  return (
    <>
      <header className="header">
        <a href="/" className="header__logo">
          <img src={Logo} alt="Logo" />
        </a>

        <div className="header__search df">
          <div className="header__input">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearchSubmit(); // Trigger search on input change
              }}
              placeholder="Search"
            />
            <div
              className={`search-results ${
                searchResults ? "search-results__hide" : ""
              } `}
            >
              {searchResults ? searchResultItems : <></>}
            </div>
          </div>
          <button>
            <FaMicrophone />
          </button>
        </div>

        <div className="header__register">
          <button>
            <MdOutlineVideoCall />
          </button>
          <button>
            <TbBell />
          </button>
          <button>
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocIFHoGVuPwXhMPnNhCEXM43WeuaxEhXXUiLH_yCH7MPw0L0DP8=s360-c-no"
              alt="account.png"
            />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

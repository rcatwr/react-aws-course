import React, { useState, useEffect } from "react";
import { loadData } from "./data/api";
//import menuLinksData from "./data/menu_links.json";

const Header = () => {
  //step 1 state var
  const [menuLinksData, setMenuLinksData] = useState([]);

  useEffect(() => {
    //step 2 load data
    loadData('menu_links', setMenuLinksData);
  }, []);

  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Landon Hotel</h1>
          <h2>West London</h2>
          <p>
            <a href="#welcome">
              <img
                src="https://landonhotel.com/images/misc/arrow.png"
                alt="down arrow"
              ></img>
            </a>
          </p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand">
            <a href="#welcome">
              Landon <span>Hotel</span>
            </a>
          </div>
          <ul>
            {menuLinksData.map((link, item) => (
              <li key={item}>
                <a className={`icon ${link.class}`} href={link.href}>
                  <span>{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

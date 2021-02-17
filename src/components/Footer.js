import React, {useState, useEffect} from "react";
// import footerLinks from "./data/footer_links.json";
import { loadData } from "./data/api"

const Footer = () => {

 //step 1 state var
 const [footerLinks, setFooterLinksData] = useState([]);

 useEffect(() => {
   //step 2 load data
   loadData('footer_links', setFooterLinksData);
 }, []);



  return (
    <footer className="scene">
      <article className="content">
        <div id="socialmedia">
          <ul className="group">
            {footerLinks.map((img, i) => (
              <li key = {i}>
                <a href={img.href}>
                  <img
                    className="icon"
                    src={img.src}
                    alt={`icon for ${img.name}`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </footer>
  );
};

export default Footer;

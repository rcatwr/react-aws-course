import React from "react";
import footerLinks from "./data/footer_links.json";

const Footer = () => {
  return (
    <footer className="scene">
      <article className="content">
        <div id="socialmedia">
          <ul className="group">
            {footerLinks.map((i) => (
              <li>
                <a href={i.href}>
                  <img
                    className="icon"
                    src={i.src}
                    alt={`icon for ${i.name}`}
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

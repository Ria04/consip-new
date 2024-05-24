import React, { useState } from "react";
import Add from "@mui/icons-material/Add";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const linksArray = [
    { name: "Home", url: "#home" },
    { name: "About Us", url: "#aboutus" },
    { name: "Services", url: "#services" },
    { name: "Connect with us", url: "#footer" },
  ];
  const socialArray = [
    {
      icon: "fa fa-github-square",
      url: "https://github.com/matthewvincent",
    },
    {
      icon: "fa fa-instagram",
      url: "https://www.instagram.com/middlestates/",
    },
    {
      icon: "fa fa-tumblr-square",
      url: "http://matthewvincentphotography.com/",
    },
  ];

  return (
    <div>
      <Panel open={open} links={linksArray} socialLinks={socialArray} />
      <Button toggle={toggleMenu} open={open} />
    </div>
  );
};

const Button = ({ toggle, open }) => {
  return (
    <div className="button-div">
      <button
        className={open ? "menu-toggle close-button" : "menu-toggle "}
        onClick={toggle}
      >
        <Add />
      </button>
      <h4 onClick={toggle}>MENU</h4>
    </div>
  );
};

const Panel = ({ open, links, socialLinks }) => {
  return (
    <div className={open ? "menu-wrapper menu-open" : "menu-wrapper"}>
      <Links links={links} open={open} />
    </div>
  );
};

const Links = ({ open, links }) => {
  const linkList = links.map((link) => (
    <li className="link">
      <a href={link.url}>{link.name}</a>
    </li>
  ));

  return (
    <div
      className={open ? "links-wrapper" : "links-wrapper links-wrapper-closed"}
    >
      {" "}
      <ul className="link-list">{linkList}</ul>
    </div>
  );
};

import React from "react";
import {Nav} from "./Nav"

const navOptions = [
    {
      text: "Home",
      href: "#",
      id: 1
    },
    {
      text: "Projects",
      href: "#skills",
      id: 2
    },
    {
      text: "Contact Me",
      href: "#contactMeHeader",
      id: 4
    },
  ];

  const headerStyle = {
    position: "fixed",
    width: "100%",
    zIndex: 999
  }

export function Header() {
    return <header style={headerStyle}>
        <Nav navoptions={navOptions} />
    </header>
};

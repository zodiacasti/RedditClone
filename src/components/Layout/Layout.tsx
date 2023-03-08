import React from "react";
import Navbar from "../Navbar/Navbar";

type NavbarProps = {
  children: React.ReactNode;
};

const Layout: React.FC<NavbarProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;

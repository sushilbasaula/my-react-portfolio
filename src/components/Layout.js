import React from "react";
import { TopNav } from "./TopNav";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <div className="main-layout">{children}</div>

      <Footer />
    </>
  );
};

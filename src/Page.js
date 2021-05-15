import React, { Component } from "react";
import "./Styles/Page.css";
function Page({ children }) {
  return <section className="page">{children}</section>;
}

export default Page;

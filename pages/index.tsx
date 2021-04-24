import { NextPage } from "next";
import React from "react";

const IndexPage: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        overflow: "hidden",
        fontSize: 60,
        fontFamily: "monospace",
        textTransform: "uppercase",
        letterSpacing: 2,
        backgroundColor: "#212121",
        color: "#fff",
      }}
    >
      Happy Hacking!
    </div>
  );
};

export default IndexPage;

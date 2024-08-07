"use client";
import dynamic from "next/dynamic";
import Loading from "../Components/Loading";
import "./globals.css";
import { useEffect } from "react";
 
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
 
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import { Providers } from "Components/redux/provider";

const Layout = ({ children }) => {
  useEffect(() => {
    if (!window.localStorage.getItem("zayadyStorage")) {
      window.localStorage.setItem("zayadyStorage", JSON.stringify([]));
    }

    if (!window.localStorage.getItem("ib_ID")) {
      window.localStorage.setItem("ib_ID", JSON.stringify(0));
    }
  }, []);
  return (
    <html lang="ar" dir="rtl">
    <head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
    </head>
      <body dir="rtl" lang="ar">
        <Providers>
          <NavBar />
          <Header />
          <main style={{ minHeight: "100vh" }}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};
export default Layout;
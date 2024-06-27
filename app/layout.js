"use client";
import dynamic from "next/dynamic";
import Loading from "../Components/Loading";
import "./globals.css";
const NavBar = dynamic(() => import("../Components/NavBar", { ssr: false }), {
  loading: () => <Loading />,
});
const Footer = dynamic(() => import("../Components/Footer", { ssr: false }), {
  loading: () => <Loading />,
});
const Header = dynamic(() => import("../Components/Header", { ssr: false }), {
  loading: () => <Loading />,
});

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import { useEffect } from "react";
import { Providers } from "@/Components/redux/provider";

const Layout = ({ children }) => {
  useEffect(() => {
    window.localStorage.getItem("zayadyStorage")
      ? null
      : window.localStorage.setItem("zayadyStorage", JSON.stringify([]));

    window.localStorage.getItem("ib_ID")
      ? null
      : window.localStorage.setItem("ib_ID", JSON.stringify(0));
  }, []);
  return (
    <html lang="ar" dir="rtl">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
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

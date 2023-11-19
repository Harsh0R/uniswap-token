import React from "react";
import {
  Card,
  Facebook,
  Header,
  HeroSection,
  Selector,
  SingleCard,
  SwapComponent,
  SwapField,
  Table,
  TokenBalance,
  TransactionStatus,
  Menu,
  Insta,
  Logo,
  Twitter,
  Footer,
} from "../components/index";
import Demo from "../components/Demo";

const home = () => {
  return (
    <div className="bg-[#1A1A1A]">
      {/* Hey nb */}
      <Header />
      <HeroSection />
      <Card />
      <Footer />
      {/* <Demo/> */}
    </div>
  );
};

export default home;

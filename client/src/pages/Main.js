import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Center>
        <Logo>OUR CATEGORIES</Logo>
      </Center>
      <Categories />
      <Center>
        <Logo>OUR PRODUCTS</Logo>
      </Center>
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

const Logo = styled.h1`
  font-weight: 500;
  font-size: 2.8rem;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export default Main;

import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  const divHandler = () => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div onMouseOver={divHandler}>
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
    </div>
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

export default Home;

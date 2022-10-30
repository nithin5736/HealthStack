import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import addproduct from "../images/addproduct.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({
    productname: "",
    img: "",
    price: "",
    quantity: "",
  });
  const navigate = useNavigate();

  const addProductHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/products", {
        productname: addProduct.productname,
        img: addProduct.img,
        price: addProduct.price,
        quantity: addProduct.quantity,
      })
      .then(() => {
        alert("Your Product has been added successfully");
        navigate("/products");
      })
      .catch(() => {
        alert("Please enter valid Product details");
      });
    setAddProduct({
      productname: "",
      img: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <Center>
        <Logo>ADD YOUR PRODUCT</Logo>
      </Center>
      <Container>
        <Img src={addproduct} alt="Add product" />
        <FormDiv>
          <form onSubmit={addProductHandler}>
            <div class="form-group">
              <label for="exampleInputEmail1">Product Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Product Name"
                value={addProduct.productname}
                onChange={(e) => {
                  setAddProduct({ ...addProduct, productname: e.target.value });
                }}
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share this information with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Image URL</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Image URL"
                value={addProduct.img}
                onChange={(e) => {
                  setAddProduct({ ...addProduct, img: e.target.value });
                }}
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share this information with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Price</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Price"
                value={addProduct.price}
                onChange={(e) => {
                  setAddProduct({ ...addProduct, price: e.target.value });
                }}
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share this information with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Stock Quantity</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Stock Quantity"
                value={addProduct.quantity}
                onChange={(e) => {
                  setAddProduct({ ...addProduct, quantity: e.target.value });
                }}
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share this information with anyone else.
              </small>
            </div>
            <button type="submit" class="btn btn-primary">
              ADD PRODUCT
            </button>
          </form>
        </FormDiv>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  margin: 80px 30px 180px 80px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: 500;
  font-size: 2rem;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 30px;
`;

const Img = styled.img`
  flex: 0.7;
  height: 500px;
  width: 600px;
  padding: 20px;
  &:hover {
    box-shadow: 0px 0px 2.3px -5px rgba(0, 0, 0, 0.02),
      0px 0px 5.6px -5px rgba(0, 0, 0, 0.028),
      0px 0px 10.5px -5px rgba(0, 0, 0, 0.035),
      0px 0px 18.8px -5px rgba(0, 0, 0, 0.042),
      0px 0px 35.1px -5px rgba(0, 0, 0, 0.05),
      0px 0px 84px -5px rgba(0, 0, 0, 0.07);
  }
`;

const FormDiv = styled.div`
  flex: 1.2;
  form {
    padding: 15px;
    margin-left: 100px;
    width: 80%;
    &:hover {
      box-shadow: 0px 0px 2.3px -5px rgba(0, 0, 0, 0.02),
        0px 0px 5.6px -5px rgba(0, 0, 0, 0.028),
        0px 0px 10.5px -5px rgba(0, 0, 0, 0.035),
        0px 0px 18.8px -5px rgba(0, 0, 0, 0.042),
        0px 0px 35.1px -5px rgba(0, 0, 0, 0.05),
        0px 0px 84px -5px rgba(0, 0, 0, 0.07);
    }
  }
`;

export default AddProduct;

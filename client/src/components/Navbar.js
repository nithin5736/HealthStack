import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { ThemeContext } from "../App";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";

const Navbar = () => {
  const USER_KEY = "current user";
  const [user] = useState(JSON.parse(localStorage.getItem(USER_KEY)));
  const [cart] = useContext(ThemeContext);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchConatiner>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 20 }} />
          </SearchConatiner>
        </Left>
        <Center>
          <Logo>
            {user && (
              <Link
                to="/main"
                style={{ textDecoration: "none", color: "black" }}
              >
                Health Stack
              </Link>
            )}
            {!user && (
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Health Stack
              </Link>
            )}
          </Logo>
        </Center>
        <Right>
          <Item>
            <Link
              to="/products"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              PRODUCTS
            </Link>
          </Item>
          <Item>
            <Link
              to="/faqs"
              style={{
                textDecoration: "none",
                color: "black",
                marginTop: "15px",
              }}
            >
              FAQs
            </Link>
          </Item>
          <Item>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "black",
                marginTop: "15px",
              }}
            >
              CONTACT US
            </Link>
          </Item>
          {!user && (
            <Item>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                REGISTER/LOGIN
              </Link>
            </Item>
          )}
          {user && (
            <CDropdown
              variant="nav-item"
              popper={false}
              style={{ listStyle: "none", marginLeft: "5px" }}
            >
              <CDropdownToggle>{user.username}</CDropdownToggle>
              <CDropdownMenu>
                <Link to="/profile">
                  <CDropdownItem>MY PROFILE</CDropdownItem>
                </Link>
                {user && user.usertype === "Seller" && (
                  <Link to="/addproduct">
                    <CDropdownItem>ADD PRODUCT</CDropdownItem>
                  </Link>
                )}
                <Link
                  to="/"
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  <CDropdownItem>LOG OUT</CDropdownItem>
                </Link>
              </CDropdownMenu>
            </CDropdown>
          )}
          <Item>
            <Badge badgeContent={cart.length} color="secondary">
              <Link
                to="/cart"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </Item>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
  margin-bottom: 4px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchConatiner = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 2.8rem;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Item = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-top: 10px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export default Navbar;

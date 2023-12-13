import React from "react";
import styled from "styled-components";
import { useState } from "react";
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>
          <img src="/images/menu.png" alt="" />
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CustomClose onClick={() => setBurgerStatus(false)}>
          <img src="/images/close.png" alt="" />
        </CustomClose>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used-in Inventory</a>
        </li>
        <li>
          <a href="#">Cyber Truck</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  text-transform: uppercase;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    text-decoration: none;
  }
`;
const CustomMenu = styled.div`
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background: white;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 600;
  }
  a {
    text-decoration: none;
  }
`;
const CustomClose = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

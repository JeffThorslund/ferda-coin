import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { colors as c, spacing as s } from "../environment";
import logo from "../assets/logo.png";

const { Footer, Content } = Layout;

const NavWrapper = styled.div`
  background-color: ${c.LIGHT.string()};
  font-size: 20px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 0 auto;
  max-width: ${s.GUTTER};
  width: 100%;
  align-items: center;
`;

const NavTitle = styled.div`
  font-weight: bold;
  margin-right: auto;
`;

const NavImage = styled.img`
  height: 40px;
  padding-right: 30px;
`;

const Header = () => {
  return (
    <NavWrapper>
      <Nav>
        <NavImage src={logo} />
        <NavTitle>Ferda Coin</NavTitle>

        <div> About Us</div>
      </Nav>
    </NavWrapper>
  );
};

export default Header;

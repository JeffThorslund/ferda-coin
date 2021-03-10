import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { colors as c } from "../environment";
import logo from "../assets/logo.png";

const { Header: AntHeader } = Layout;

const NavTitle = styled.div`
  color: ${c.LIGHT.string()};
  font-size: 20px;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
`;

const NavImage = styled.img`
  height: 40px;
  padding-right: 30px;
`;

const Header = () => {
  return (
    <AntHeader>
      <Nav>
        <NavImage src={logo} />
        <NavTitle>Ferda Coin</NavTitle>
      </Nav>
    </AntHeader>
  );
};

export default Header;

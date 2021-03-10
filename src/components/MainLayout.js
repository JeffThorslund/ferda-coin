import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import Display from "./Display";

const { Footer, Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="layout">
      <Header />
      <Display />
    </Layout>
  );
};

export default MainLayout;

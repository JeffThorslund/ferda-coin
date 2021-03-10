import React from "react";
import { Layout, Row, Col } from "antd";
import Header from "./Header";
import FerdaPriceGraph from "./FerdaPriceGraph";
import FerdaStats from "./FerdaStats";
import FerdaScoreBoard from "./FerdaScoreBoard";
import FerdaIntro from "./FerdaIntro";

const { Content } = Layout;

const MainLayout = () => {
  const rowStyle = {
    paddingTop: "40px",
  };

  return (
    <Layout className="layout">
      <Header />
      <Content>
        <Row style={rowStyle}>
          <Col offset={1} span={5}>
            <FerdaIntro />
          </Col>
          <Col offset={1} span={16}>
            <FerdaStats />
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col offset={1} span={16}>
            <FerdaPriceGraph />
          </Col>
          <Col offset={1} span={5}>
            <FerdaScoreBoard />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MainLayout;

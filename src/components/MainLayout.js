import React from "react";
import { Layout, Row, Col } from "antd";
import { spacing as s } from "../environment";
import Header from "./Header";
import FerdaPriceGraph from "./FerdaPriceGraph";
import FerdaStats from "./FerdaStats";
import FerdaScoreBoard from "./FerdaScoreBoard";
import FerdaIntro from "./FerdaIntro";

const { Content } = Layout;

const MainLayout = () => {
  const rowStyle = {
    paddingTop: "30px",
  };

  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: "0 30px" }}>
        <Row gutter={s.GUTTER} style={rowStyle}>
          <Col span={11}>
            <Row gutter={s.GUTTER}>
              <Col span={24}>
                <FerdaStats />
              </Col>
            </Row>
            <Row gutter={s.GUTTER} style={rowStyle}>
              <Col span={24}>
                <FerdaIntro />
              </Col>
            </Row>
          </Col>
          <Col span={13}>
            <FerdaScoreBoard />
          </Col>
        </Row>
        <Row gutter={s.GUTTER} style={rowStyle}>
          <Col span={24}>
            <FerdaPriceGraph />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MainLayout;

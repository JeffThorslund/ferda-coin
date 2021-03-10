import React from "react";
import { Statistic, Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import styled from "styled-components";

const FerdaStats = () => {
  const StatWrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <Card>
      <StatWrapper>
        <Statistic title="Market Cap (CAD)" value={0} suffix="$" />
        <Statistic
          title="24 Hour Change"
          value={11.28}
          precision={2}
          valueStyle={{ color: "#73d13d" }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
        <Statistic
          title="Overall Change"
          value={24.15}
          precision={2}
          valueStyle={{ color: "#73d13d" }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
        <Statistic
          title="Bitcoin Performance Comparison"
          value={1.28}
          precision={2}
          valueStyle={{ color: "#ff4d4f" }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </StatWrapper>
    </Card>
  );
};

export default FerdaStats;

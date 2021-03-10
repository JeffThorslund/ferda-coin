import React from "react";
import { Typography, Card } from "antd";

const { Text } = Typography;

const FerdaIntro = () => {
  return (
    <Card title="What is Ferda Coin?" headStyle={{ fontWeight: "bold" }}>
      <Text>
        <span>
          A pseudo-cryptocurrency created <b>by the boys, for the boys</b>. By
          capitalizing on nuanced market indicators, Ferda Coin has the ability
          to track digital assets with unmatched upside potential. Here at
          Ferda, we believe that complicated words like "Market Analysis" and
          "Generally Accepted Accounting Principles" are merely gatekeeper
          phrases, gaurding an opportunity that could turn the average Front
          Load Garbage Truck driver into a millionaire. We stand with Front Load
          Garbage Truck drivers. <b>On God.</b>
        </span>
      </Text>
    </Card>
  );
};

export default FerdaIntro;

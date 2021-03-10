import React from "react";
import styled from "styled-components";
import { colors as c, spacing as s } from "../environment";
import { PageHeader, Card } from "antd";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const FerdaLineChart = () => (
  <Card title="Analytics" headStyle={{fontWeight: "bold"}}>
    <Line data={data} options={options} />
  </Card>
);

export default FerdaLineChart;

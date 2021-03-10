import React from "react";
import { Table, Card } from "antd";

const FerdaScoreBoard = () => {
  const dataSource = [
    {
      key: "1",
      name: "Jeff T",
      principal: 32,
      current: 51,
    },
    {
      key: "2",
      name: "Cam W",
      principal: 42,
      current: 32,
    },
    {
      key: "3",
      name: "Doug B",
      principal: 2,
      current: 3,
    },
    {
      key: "4",
      name: "Connor G",
      principal: 201,
      current: 484,
    },
    {
      key: "5",
      name: "Brohan B",
      principal: 101,
      current: 284,
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Principal",
      dataIndex: "principal",
      key: "principal",
      render: (text, record, index) => <span>{text} $</span>,
      sorter: (a, b) => a.principal - b.principal,
      sortDirections: ["descend", "ascend", "descend"],
    },
    {
      title: "Gain",
      dataIndex: "gain",
      key: "gain",
      render: (text, record, index) => {
        const entry = Math.round((record.current / record.principal) * 100);

        return (
          <span style={{ color: entry > 0 ? "#237804" : "#a8071a" }}>
            {entry} %
          </span>
        );
      },
      sorter: (a, b) => {
        const convertToPercentage = (record) =>
          Math.round((record.current / record.principal) * 100);

        return convertToPercentage(a) - convertToPercentage(b);
      },
      sortDirections: ["descend", "ascend", "descend"],
    },
    {
      title: "Current",
      dataIndex: "current",
      key: "current",
      render: (text, record, index) => <span>{text} $</span>,
      sorter: (a, b) => a.current - b.current,
      sortDirections: ["descend", "ascend", "descend"],
    },
  ];

  return (
    <Card title="Scoreboard" headStyle={{ fontWeight: "bold" }}>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </Card>
  );
};

export default FerdaScoreBoard;

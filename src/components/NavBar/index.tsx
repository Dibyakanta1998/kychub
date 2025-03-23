import React, { FC } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Typography } from "antd";
const { Title } = Typography;

const NavBar: FC = () => {
  return (
    <Flex justify="space-between" align="center">
      <Title level={2}>KYC Hub</Title>
      <Avatar size={40} icon={<UserOutlined />} />{" "}
    </Flex>
  );
};

export default NavBar;

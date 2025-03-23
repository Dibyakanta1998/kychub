import React, { FC } from "react";
import { Layout, Flex } from "antd";
import { Outlet } from "react-router-dom";
import { NavBar, SideBar } from "../components";
import { SIDE_BAR_CONFIG } from "../constants/SideBarConstants";

const { Header, Sider, Content } = Layout;

export const ProductLayout: FC = () => {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "black",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#fff",
    border: "1px solid black",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "black",
    backgroundColor: "#fff",
    border: "1px solid black",
    flex: 1, // Ensures the Content takes the remaining height
    overflowY: "auto", // Enables vertical scrolling
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "black",
    backgroundColor: "#fff",
    border: "1px solid black",
    flex: 0.2,
  };

  const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    flex: 1,
  };

  return (
    <Flex style={{ height: "100vh" }}>
      <Layout style={layoutStyle}>
        <Sider style={siderStyle}>
          <SideBar config={SIDE_BAR_CONFIG} />
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            <NavBar />
          </Header>
          <Content style={contentStyle}>
            <Outlet />
          </Content>
          {/* <Footer style={footerStyle}>Footer</Footer> */}
        </Layout>
      </Layout>
    </Flex>
  );
};

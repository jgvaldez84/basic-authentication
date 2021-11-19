import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  ProfileOutlined,
  FileProtectOutlined,ContactsOutlined
} from "@ant-design/icons";

const Nav = (props) => {
  const { current } = props;
  return (
    <div>
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to={"/"}>
            <HomeOutlined /> Home
          </Link>
        </Menu.Item>
        <Menu.Item key="Public">
          <Link to={"/profile"}>
            <ProfileOutlined />
            Profile
          </Link>
        </Menu.Item>
        <Menu.Item key="protected">
          <Link to={"/protected"}>
          <FileProtectOutlined />
            Protected
          </Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to={"/contact"}>
          <ContactsOutlined />
             Contact us
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;

import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined
} from "@ant-design/icons";
import {Link} from 'react-router-dom'

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("Home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="Home" icon={<HomeOutlined />} className="me-auto">
        <Link to="/">Home</Link>
      </Item>

      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
        <Menu.ItemGroup title="Item 1">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
        </Menu.ItemGroup>
      </SubMenu>

      <Item key="Register" icon={<UserAddOutlined />} className="float-right">
        <Link to="/register">Register</Link>
      </Item>

      <Item key="Login" icon={<UserOutlined />} className="float-right">
        <Link to="/login">Login</Link>
      </Item>
    </Menu>
  );
};

export default Header;

import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("Home");
  let dispatch = useDispatch()
  let history = useHistory()

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut()
    dispatch({
      type: "LOGOUT",
      payload: null
    });
    history.push('/login')
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
          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </Menu.ItemGroup>
      </SubMenu>

      <Item key="Register" icon={<UserAddOutlined />} className="float-right">
        <Link to="/register">Register</Link>
      </Item>

      <Item key="Login" icon={<LoginOutlined />} className="float-right">
        <Link to="/login">Login</Link>
      </Item>
    </Menu>
  );
};

export default Header;

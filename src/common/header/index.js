import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  HeaderContent,
  HeaderContentItem,
  HeaderContentSearch,
  Addition,
  Button,
} from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo href="#"></Logo>
        <HeaderContent>
          <HeaderContentItem className="left active">首页</HeaderContentItem>
          <HeaderContentItem className="left">下载APP</HeaderContentItem>
          <HeaderContentSearch></HeaderContentSearch>
          <HeaderContentItem className="right">Aa</HeaderContentItem>
          <HeaderContentItem className="right">登录</HeaderContentItem>
        </HeaderContent>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writting">写文章</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}
export default Header;

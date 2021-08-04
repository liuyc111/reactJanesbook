import styled from "styled-components";
import logopng from "../../stattics/logo.png";
export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
`;

export const Logo = styled.a`
  height: 56px;
  width: 100px;
  display: block;
  background: url(${logopng});
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100px;
  background-size: contain;
`;

export const HeaderContent = styled.div`
  height: 100%;
  width: 960px;
  margin: 0 auto;
`;

export const HeaderContentItem = styled.div`
  padding: 0 15px;
  line-height: 56px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ed6f5a;
  }
`;

export const HeaderContentSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  padding: 0 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  vertical-align: center;
  border: 1px solid gray;
  margin-left: 20px;
  &::placeholder {
    color: #999;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg {
    color: #fff;
    background: #ec6149;
  }
  &.writting {
    color: #ec6149;
  }
`;

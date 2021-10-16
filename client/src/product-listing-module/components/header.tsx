import React from "react";
import styled from "@emotion/styled";

export function Header() {
  return (
    <Div>
      <Brand>home24</Brand>
      <Search placeholder={"Search"} />
    </Div>
  );
}

const Brand = styled.strong`
  font-size: 2em;
  text-transform: uppercase;
  color: #fff;
  font-family: cursive;
  font-weight: 900;
`;

const Div = styled.div`
  grid-area: header;
  background-color: #e6857c;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Search = styled.input`
  float: right;
  padding: 10px;
  border-radius: 4px;
  border: none;
  color: #222;
`;

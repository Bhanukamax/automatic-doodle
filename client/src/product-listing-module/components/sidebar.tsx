import React from "react";
import { Category } from "../types";
import styled from "@emotion/styled";
interface SidebarProps {
  categories: Array<Category>;
}
export default function Sidebar({ categories }: SidebarProps) {
  return (
    <Wrapper>
      <Title>Kategorien</Title>
      {categories.length ? (
        <List>
          {categories[0].childrenCategories.map(({ name, urlPath }, idx) => (
            <ListItem key={idx}>
              <a href={`/${urlPath}`}>{name}</a>
            </ListItem>
          ))}
        </List>
      ) : (
        "Loading..."
      )}
    </Wrapper>
  );
}

const Title = styled.h3`
  text-decoration: underline;
  margin-bottom: 7px;
`;

const Wrapper = styled.div`
  grid-area: sidebar;
  background-color: white;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 0 0 0 20px;
  padding: 8px 0;
  a {
    text-decoration: none;
    color: #444;
    font-weight: 600;
  }
  &:hover a {
    color: #ff6d60;
  }
`;

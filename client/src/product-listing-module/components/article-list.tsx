import React from "react";
import ArticleCard from "./article-card";
import { Category } from "../types";
import styled from "@emotion/styled";

interface ArticleListPageProps {
  categories: Array<Category>;
}
export default function ArticleListPage({ categories }: ArticleListPageProps) {
  var articles = categories.map((category) => {
    return category.categoryArticles.articles.map((article) => {
      return <ArticleCard article={article} />;
    });
  });

  return (
    <Content>
      {categories.length ? (
        <h1>
          {categories[0].name}
          <small> ({categories[0].articleCount})</small>
        </h1>
      ) : (
        "Loading..."
      )}
      <Articles>{articles}</Articles>
    </Content>
  );
}

const Content = styled.div`
  grid-area: content;
  grid-column: span 2;
`;

const Articles = styled.div`
  display: grid;
  grid-gap: 26px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

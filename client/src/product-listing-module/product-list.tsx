import React from "react";
import { useCategories } from "./hooks/use-categories";
import styled from "@emotion/styled";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import { Header } from "./components/header";
import ArticleListPage from "./components/article-list";

export default function ProductListPage() {
  const categories = useCategories();

  return (
    <Wrapper>
      <Header />
      <Sidebar categories={categories} />
      <ArticleListPage categories={categories} />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 160px auto auto;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
    > * {
	padding: 10px;
    }
}`;

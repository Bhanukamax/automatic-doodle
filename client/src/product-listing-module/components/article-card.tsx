import React from "react";
import { Article } from "../types";
import styled from "@emotion/styled";

var intlNumberFormatValues = ["de-DE", "currency", "EUR"];
export var formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2],
});

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Card>
      <img src={article.images[0].path} alt=""/>
      <div>{article.name}</div>
      <Price>{formatter.format(article.prices.regular.value / 100)}</Price>
      <Button>Add to cart</Button>
    </Card>
  );
}

const Price = styled.div`
  color: #79a34e;
  font-weight: bold;
`;
const Card = styled.div`
  border: 1px solid lavenderblush;
  display: grid;
  padding: 10px;
  * {
    display: inline-block;
    padding: 4px 0;
    margin: 4px 0;
    width: 100%;
  }
  img {
    transform: scale(0.9);
    transition: 300ms all;
  }
  &:hover img {
    transform: scale(1);
  }
`;

const accentColor = "#FF6D60";
const Button = styled.button`
  background-color: white;
  font-weight: bold;
  border: 1px solid  ${accentColor};
  color:  ${accentColor};
  cursor: pointer;
  transition: 300ms all;
  text-align: center;
    &:hover {
    color: white;
    background:  ${accentColor};
    }
   }
`;

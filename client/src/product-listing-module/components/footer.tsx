import React from "react";
import styled from "@emotion/styled";

export default function Footer() {
  return (
    <Div>
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
      Versandkosten.
    </Div>
  );
}

const Div = styled.div`
  grid-area: footer;
  background-color: #e6857c;
  text-align: center;
  color: #fff;
`;

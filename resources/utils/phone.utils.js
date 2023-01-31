import { LinkPhone } from "../js/components/header/header.styles";
import React from "react";

export const linkPhone = (telefone) => (
    <LinkPhone href={`tel:${telefone}`}>{telefone}</LinkPhone>
);

import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ProdutoContainer = styled.div`
    margin-left: 10vw;
    margin-right: 10vw;
    padding-bottom: 5vh;
`;

export const ProdutoTitle = styled.h2`
  text-align: left;
  padding-top: 5vh;
`;

export const ProdutoDivider = styled.hr`
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const ProdutoSecondSection = styled.div`
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
`;

export const ProdutoImage = styled.img`
    width: 50vw;
    padding: 20px 50px;
    max-height: 50vh;
    flex: 1 1 65%;
    object-fit: cover;
    margin: 0 20px;
`;

export const ProdutoDescriptionContainer = styled.div`
    text-align: left;
    flex: 1 1 30%;
`;

export const ProdutoDescription = styled.p`
    padding-bottom: 5vh;
`;

// Contains both ProdutoCharacteristicsArrow and ProdutoCharacteristicsText
export const ProdutoCharacteristicsItem = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
   margin: 15px 0;
`;

export const ProdutoCharacteristicsArrow = styled(FontAwesomeIcon)`
    color: green;
    margin: auto 0;
`;

export const ProdutoCharacteristicsText = styled.p`
    padding-left: 1.5vw;
`;
import React from "react";
import {NavigationAccent, NavigationButton, HeaderButtonsContainer} from "./header-buttons.styles";

const HeaderButtonsComponent = () => (
    <HeaderButtonsContainer>
        <NavigationButton to='/'>
            <NavigationAccent/>
            Início
        </NavigationButton>
        <NavigationButton to='/produtos'>
            <NavigationAccent/>
            Produtos
        </NavigationButton>
        <NavigationButton to='/empresa'>
            <NavigationAccent/>
            Empresa
        </NavigationButton>
        <NavigationButton to='/contato'>
            <NavigationAccent/>
            Contato
        </NavigationButton>
    </HeaderButtonsContainer>
);

export default HeaderButtonsComponent;

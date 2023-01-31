import React from "react";
import Griddle from "griddle-react";
import {stylesTabela} from "./tabela.griddlestyles";
import {TabelaContainer, TabelaIndividual, TituloTabela} from "./tabela.styles";

const rawData = require("../../../assets/medidas");

const TabelaComponent = () => (
    <TabelaContainer>
        {rawData.map(item => {
            const titulo = `Chapas de ${item.medida} produzidas em ${item.processos} Etapa${parseInt(item.processos) > 1 ? "s" : ""}`;
            const dados = [];
            item.espessuras.forEach(valor => dados.push({Espessura: valor.espessura, "Camadas Fabricadas": valor.camadas}));

            return (
                <TabelaIndividual>
                    <TituloTabela>{titulo}</TituloTabela>
                    <Griddle
                        data={dados}
                        components={{
                            Filter: () => null,
                            SettingsToggle: () => null,
                            PageDropdown: () => null
                        }}
                        styleConfig={stylesTabela}/>
                </TabelaIndividual>
            )
        })}
    </TabelaContainer>
);

export default TabelaComponent;

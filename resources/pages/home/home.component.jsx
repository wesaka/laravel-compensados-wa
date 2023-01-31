import React, {Component} from "react";

import {BackgroundContainer, CarouselButton, Slide, Spacer, Tagline} from "./home.styles";
import SliderComponent from "../../js/components/slider/slider.component";
import FillerComponent from "../../js/components/filler/filler.component";

import { fillerPrincipios, fillerSegmentos } from "../../assets/fillerContent";
import OrcamentoComponent from "../../js/components/orcamento/orcamento.component";

class HomePage extends Component {
    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div>
                <SliderComponent>
                    <BackgroundContainer url="/images/10-anos-experiencia.jpg">
                        <Slide>
                            <Tagline>Mais de 10 anos de experência</Tagline>
                            <CarouselButton to='/empresa' color='#53d65a'>CONHEÇA A W.A.</CarouselButton>
                        </Slide>
                    </BackgroundContainer>
                    <BackgroundContainer url="/images/016.jpg">
                        <Slide>
                            <Tagline>Conheça a nossa linha de produtos</Tagline>
                            <CarouselButton to='/produtos' color='dodgerblue'>SAIBA MAIS</CarouselButton>
                        </Slide>
                    </BackgroundContainer>
                </SliderComponent>
                <Spacer/>
                <FillerComponent color='white' title='Princípios' content={fillerPrincipios}/>
                <FillerComponent color='#eee' title='Segmentos' content={fillerSegmentos}/>
                <OrcamentoComponent/>
                <Spacer/>
            </div>
        )
    }
}

export default HomePage;

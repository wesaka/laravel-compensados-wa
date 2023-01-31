import React, {Component} from "react";
import ParallaxHeaderComponent from "../../js/components/parallax-header/parallax-header.component";
import PicturesComponent from "../../js/components/pictures/pictures.component";
import HistoriaComponent from "../../js/components/historia/historia.component";

class EmpresaPage extends Component{
    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div>
                <ParallaxHeaderComponent title='Conheça a W.A.' background='/images/empresa.jpg'/>
                <HistoriaComponent/>
                <PicturesComponent/>
            </div>
        )
    }
};

export default EmpresaPage;

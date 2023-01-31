import React, { Component } from 'react';
import '..../css/app.css';
import { Switch, Route, Router } from 'react-router-dom';
import {createBrowserHistory} from "history";

import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import HeaderComponent from "./header/header.component";
import HomePage from "../../pages/home/home.component";
import ProdutosPage from "../../pages/produtos/produtos.component";
import EmpresaPage from "../../pages/empresa/empresa.component";
import ContatoPage from "../../pages/contato/contato.component";
import FooterComponent from "./footer/footer.component";

ReactGA.initialize(`${process.env.REACT_APP_TRACKING_AN}`);

// Setting the history for pageview
const history = createBrowserHistory();

history.listen(location => {
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
});

class Main extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="app">
                    <HeaderComponent/>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/produtos' component={ProdutosPage}/>
                        <Route exact path='/empresa' component={EmpresaPage}/>
                        <Route path='/contato' component={ContatoPage}/>
                    </Switch>
                    <FooterComponent/>
                </div>
            </Router>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}

import React from 'react'
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'

//Pages 
import Home from './pages/Home'
import HowToReach from './pages/HowToReach';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Hotels from './pages/Hotels';
import NearByAttraction from './pages/NearByAttraction'
import Gallery from './pages/Gallery'
import Architect from './pages/Architect'
import TempleOfPillars from './pages/TempleOfPillars'

//layouts 
import Header from './layout/Header';
import Footer from './layout/Footer'


const App = () => {
    return(
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/how-to-reach">
                    <HowToReach />
                </Route>                
                <Route exact path="/About-us">
                    <About />
                </Route>
                <Route exact path="/gallery">
                    <Gallery />
                </Route>
                <Route exact path="/near-by-attraction">
                    <NearByAttraction />
                </Route>
                <Route exact path="/Reviews">
                    <Reviews />
                </Route>
                <Route exact path="/Hotels">
                    <Hotels />
                </Route>                
                <Route exact path="/temple-of-pillars">
                    <TempleOfPillars />
                </Route>                
                <Route exact path="/architect">
                    <Architect />
                </Route>                
                <Route exact path="*">
                    <NotFound />
                </Route>
                
            </Switch>
            <Footer></Footer>
        </Router>
    );
}


export default App
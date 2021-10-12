import React from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import About from './About'
import Categories from './Categories'
import Contact from './Contact'
import Home from './Home'
import Shop from './Shop'
import SingleShop from './SingleShop'

function RouterPage() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/about" component={About}/>
                    <Route  path="/shop" component={Shop}/>
                    <Route  path="/#" component={Categories}/>
                    <Route  path="/singleshop" component={SingleShop}/>
                    <Route  path="/contact" component={Contact}/>
                </Switch>
            </Router>
            
        </div>
    )
}

export default RouterPage

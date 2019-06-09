import React from "react"
import Left from "../views/left"
import Dainmain from "../views/dainming"
import Right from "../views/right" 
import {Switch,Redirect,Route} from "react-router-dom"

function router(){
    return<Switch>
            <Route path="/left" component={Left}/>
            <Route path="/dainming" component={Dainmain}/>
            <Route path="/right" component={Right}/>
            <Redirect from="/" to="/left"/>
        </Switch>

}
export default router
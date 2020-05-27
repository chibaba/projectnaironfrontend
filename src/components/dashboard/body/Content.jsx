import React from "react"

import {Route, Switch} from "react-router-dom"

import ContentSyle from "../styles/content"
import Index from "./content/Index"
import ManageAds from "./content/ManageAds"

const Content = () => {
    return (
        <ContentSyle className="container-fluid">
             <Switch>
                <Route path="/dashboard" component={Index} exact/>
                <Route path="/manage_ads" component={ManageAds} exact/>
            </Switch>
        </ContentSyle>
    )
}

export default Content
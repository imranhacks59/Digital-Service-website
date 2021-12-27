import ReactDom from 'react-dom'
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

// import App from './logi-page/app'
// import './style/loginPage.css'
import './style/website.css'
import {BrowserRouter} from 'react-router-dom'
import App from './website/app'
 
ReactDom.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById("root"))

// ReactDom.render(<App />, document.getElementById("root"));
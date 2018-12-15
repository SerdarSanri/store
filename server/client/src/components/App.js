import React,{Component} from "react"
import Landing from "./Landing"
import Header from  "./Header"
import Home from "./Home"
import {connect} from "react-redux"
import * as actions from "../actions"
import {BrowserRouter,Route} from "react-router-dom"
import Signup from "./auth/Signup"
class App extends Component{
  componentDidMount(){

  }
render(){
    return (
        < div className = "container" >
         <BrowserRouter>
         <div>
            <Header/>
            <Route exact path="/signup"component={Signup}/>
             <Route exact path="/" component={Landing}/>
             <Route exact path="/home" component={Home}/>
             </div>
         </BrowserRouter>
         </div>
            
    )  
}
}
export default connect(null,actions)(App)
import {Component} from "react"

import Header from "../Header"
import OrderIdContainer from "../OrderIdContainer"
import Cart from "../Cart"
import CartList from "../CartList"

import {AppContainer} from "./styledComponents";


import "./index.css"

class MainPage extends Component{
    render(){
        return(
            <AppContainer>
                <Header/>
                <OrderIdContainer/> 
                <Cart/> 
                <CartList/>     
            </AppContainer>
        )
    }
}

export default MainPage
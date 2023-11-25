import { Component } from "react";

import CartItem from "../CartItem";

import {v4 as uuidv4} from 'uuid'

import "./index.css"

const dummyList=[
    {
        id:uuidv4(),
        productImg:"https://res.cloudinary.com/ramcharan/image/upload/v1698250988/Avocado_Hass_qmgyb8.jpg",
        productName:"Avacado",
        price:75,
        quantity:20,
        brand:"Hormel Black Labelmany",
        status:"missing",
        isRightTrue:true,
        isWrongTrue:false,
       edit:"Edit",
        total:0
    },
    {
        id:uuidv4(),
        productImg:"https://res.cloudinary.com/ramcharan/image/upload/v1698250988/Avocado_Hass_qmgyb8.jpg",
        productName:"Avacado",
        price:30,
        quantity:8,
        brand:"Hormel Black Labelmany",
        status:"done",
        isRightTrue:true,
        isWrongTrue:false,
       edit:"Edit",
        total:0
    },
    {
        id:uuidv4(),
        productImg:"https://res.cloudinary.com/ramcharan/image/upload/v1698250988/Avocado_Hass_qmgyb8.jpg",
        productName:"Avacado",
        price:120,
        quantity:5,
        brand:"Hormel Black Labelmany",
        status:"missing",
        isRightTrue:true,
        isWrongTrue:false,
        edit:"Edit",
        total:0
    },
    {
        id:uuidv4(),
        productImg:"https://res.cloudinary.com/ramcharan/image/upload/v1698250988/Avocado_Hass_qmgyb8.jpg",
        productName:"Avacado",
        price:2,
        quantity:50,
        brand:"Hormel Black Labelmany",
        status:"",
        isRightTrue:true,
        isWrongTrue:false,
       edit:"Edit",
        total:0
    }
]

class EachCartItem extends Component{
state={isWrong:false,isRight:false,list:dummyList,isRightTrue:true,isWrongTrue:false}

onRight=(key)=>(
    this.setState(prevState=>({
        list:prevState.list.map(eachId=>{
            if(key===eachId.id){
                return {...eachId,isRightTrue:!eachId.isRightTrue,isWrongTrue:false}
            }
            return eachId
        })
    }))
)
onWrong=(key)=>(
    this.setState(prevState=>({
        list:prevState.list.map(eachId=>{
            if(key===eachId.id){
                return {...eachId,isWrongTrue:!eachId.isWrongTrue,isRightTrue:true}
            }
            return eachId
        })
    }))
)


    render(){
        const {list}=this.state
        return(
            <div>
                <table>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Brand</th>
                        <th className="price-heading">Price</th>
                        <th className="quantity-heading">Quantity</th>
                        <th className="total-heading">Total</th>
                        <th className="status-row">Status</th>
                    </tr>
                    {list.map(each=>(
                        <CartItem key={each.id} each={each} onRight={this.onRight} onWrong={this.onWrong}/>
                    ))}
                </table>
            </div>
        )
    }
}

export default EachCartItem
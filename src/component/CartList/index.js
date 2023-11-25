import EachCartItem from "../EachCartItem"

import { LuPrinter } from "react-icons/lu";

import "./index.css"

const CartList=()=>(
    <div className="cart-table-cont">
        <div className="cart-table-cont-1">
            <div className="search-cont">
                <input type="search" className="search-input" placeholder="Search..."/>
                <div className="btn-cont">
                    <button type="button" className="add-btn">Add Item</button>
                    <LuPrinter className="printer-icon"/>
                </div>
            </div>
            <EachCartItem/>
        </div>
    </div>
)

export default CartList
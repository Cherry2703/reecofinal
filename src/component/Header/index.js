import { FiShoppingCart } from "react-icons/fi";

import { Navbar,UnorderedList1,UnorderedList2} from "./styledComponents";

import "./index.css"

const Header =()=>(
    <Navbar>
        <UnorderedList1>
            <li className="logo">Reeco</li>
            <li>Store</li>
            <li>Orders</li>
            <li>Analytics</li>
        </UnorderedList1>
        <UnorderedList2 className="nav-items-2">
            <li>
                <FiShoppingCart className="cart-img"/>
            </li>
            <li>
                Hello,
                <select>  
                    <option>James</option>
                    <option>Kamal</option>
                    <option>Ram</option>
                    <option>Abhi</option>
                </select>
            </li>
        </UnorderedList2>
    </Navbar>
)

export default Header
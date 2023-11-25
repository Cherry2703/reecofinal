import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import EditPopUp from "../EditPopUp"

import "./index.css"


const CartItem=props=>{
    const {each,onRight,onWrong}=props
    const {id,productImg,productName,quantity,price,brand,edit,isRightTrue,isWrongTrue}=each

   
const onClickRightImg=()=>{
    onRight(id)
}

    const onClickWrongImg=()=>{
        onWrong(id)
}
    
        const totalmoney=price*quantity
    
    

    return(
        <tr className="each-row">
            <td className="td-img"><img src={productImg} className="each-item-img" alt={productName}/></td>
            <td>{productName}</td>
            <td>{brand}</td>
            <td >{price}</td>
            <td>{quantity}</td>
            <td>{totalmoney}</td>
            <td className="status">
                <div>{isRightTrue?"":<p className='right-approved-para'>Approved</p>}{isWrongTrue?<p className='wrong-miss-para'>Missing</p>:""}</div>
                <div className="status-cont">
                <img src={isRightTrue?"https://res.cloudinary.com/ramcharan/image/upload/v1698257010/bfe9b372751fd3a57bf670977ee573b9.png_wh300_cb3maz.png":"https://res.cloudinary.com/ramcharan/image/upload/v1698256997/a36536de1e32c65c9bde6e78e8f57190_huakqy.jpg"}  alt="right-img" className="right-img" onClick={onClickRightImg}/>               
                <img src={isWrongTrue?"https://res.cloudinary.com/ramcharan/image/upload/v1698257032/png-transparent-x-cross-wrong-sign_daxcax.png":"https://res.cloudinary.com/ramcharan/image/upload/v1698257048/Wrong-Sign-Transparent-PNG_pplzru.png"}  alt="wrong-img" className="wrong-img" onClick={onClickWrongImg}/>
                    <div className="popup-container">
                        <Popup
                            modal
                            trigger={
                            <button type="button" className="trigger-button">
                                {edit}
                            </button>
                            }
                        >
                            {close => (
                            <>
                                <div>
                                <EditPopUp/>
                                </div>
                                <button
                                type="button"
                                className="trigger-button"
                                onClick={() => close()}
                                >
                                Close
                                </button>
                            </>
                            )}
                        </Popup>
                    </div>
                </div>
            </td>
        </tr>
       
    )
}
export default CartItem
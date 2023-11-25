import "./index.css"

const OrderIdContainer=()=>(
<div className="order-id-cont">
    <p>Orders arrow symbol <span className="order-id-underline">Order 32457ABC</span></p>
    <div className="order-cont-buttons">
        <h3>Order 32457ABC</h3>
        <div className="buttons-cont">
            <button type="button" className="btn-1">Back</button>
            <button type="button" className="btn-2">Approve Order</button>
        </div>
    </div>
</div>
)

export default OrderIdContainer
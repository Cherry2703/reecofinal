import './index.css'

const EditPopUp = () => (
  <div className="popup-cont">
    <h3>Chicken brest fillets,Boneless marinated 6 ounces raw invivid....</h3>
    <p>American Roland</p>
    <div className="popup-cont-1">
      <div className="popup-cont-1-1">
        <img
          src="https://res.cloudinary.com/ramcharan/image/upload/v1698250988/Avocado_Hass_qmgyb8.jpg"
          alt="avacado"
          className="popup-img"
        />
        <div>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
        </div>
      </div>
      <div className="cont-1-1-1">
        <p>9999.99</p>
        <div>
          <button type="button">-</button>
          <input type="text" placeholder="100" />
          <button type="button">+</button>
        </div>
      </div>
    </div>
    <div>
      <h3>Choose Reason</h3>
      <ul className='choose-right'>
        <li>Missing Product</li>
        <li>Quantity is not the same</li>
        <li>Price is not the same</li>
        <li>Other</li>
      </ul>
    </div>
  </div>
)

export default EditPopUp

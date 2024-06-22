import "../BasketComponent/Basket.css"
export default function Basket({ toggleBucket,productCant, setProductCant }) {

    return (
        <div className="basketContainer">
            <h3 id="cartTitle">Cart</h3>
            <div className="bascketProduct">
                {productCant === 0 ?
                    <><p>Your cart is empty</p></>
                    :
                    <>
                        <div className="resumeContainer">
                            <div className="resumeDescription">
                                <img src={`src/assets/images/image-product-1-thumbnail.jpg`} alt="product-img" />
                                <div className="BasketPriceContainer">
                                    <span>Fall Limited Edition Sneakers</span>
                                    <div className="BasketPrice">
                                        <p>{`$125.00 x ${productCant}`}</p>
                                        <b>${125 * productCant}</b>
                                    </div>
                                </div>
                                <img id="deleteButton" onClick={() => {setProductCant(0), toggleBucket(false)}} src="src\assets\images\icon-delete.svg" alt="delete button" />
                            </div>
                            <button type="submit" id="cartButton" onClick={() => console.log("You clicked to Checkout Button")}>Chekout</button>
                        </div>
                    </>

                }
            </div>
        </div>
    )
}
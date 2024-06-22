import "../CartComponent/Cart.css"
export default function Cart({ setProductCant, productCant }) {

    const addToBasket = () => {
        setProductCant(productCant)
    }
    const handleMinus = () => {
        if (productCant > 1) {
            setProductCant(productCant - 1)
        }
    }
    const handlePlus = () => {
        setProductCant(productCant + 1)

    }
    return (
        <section className="cartContainer">
            <div className="countProduct">
                <span className="counter" onClick={handleMinus}>-</span>
                <p>{`${productCant}`}</p>
                <span className="counter" onClick={handlePlus}>+</span>
            </div>
            <button type="submit" id="cartButton" onClick={addToBasket}><img src="src/assets/images/icon-cart.svg" alt="icon-cart" />Add to cart</button>
            
        </section>
    )
}
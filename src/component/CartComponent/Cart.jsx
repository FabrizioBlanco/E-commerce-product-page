import "../CartComponent/Cart.css"
import cartIcon from '@/assets/images/icon-cart.svg'
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
            <button type="submit" id="cartButton" onClick={addToBasket}><img src={cartIcon} alt="icon-cart" />Add to cart</button>
            
        </section>
    )
}
import { useState } from 'react'
import "../productComponent/Product.css"
export default function Product() {
    const [productImg, setProductImg] = useState(1)
    const handlePrevious = () => {
        if (productImg > 1) {
            setProductImg(productImg - 1)
        }
    }
    const handleNext = () => {
        if (productImg < 4) {
            setProductImg(productImg + 1)
        }
    }
    return (
        <main className="imageContainer">
            <img id="productImg" src={`src/assets/images/image-product-${productImg}.jpg`} alt="product-image" />
            <button className="interativeButton" id="previous" onClick={handlePrevious} ><img src="src/assets/images/icon-previous.svg" alt="previous" /></button>
            <button className="interativeButton" id="next" onClick={handleNext}  ><img src="src/assets/images/icon-next.svg" alt="next" /></button>
        </main>
    )
}
import useWindowWidth from "../../CustomHook/useWindowWidth.jsx"
import "../ProductImage/ProductImage.css"
export default function ProductImage({ productImg, setProductImg }) {
    const windowWidth = useWindowWidth()
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
            
            {windowWidth >= 767 ?
                <div className="carrousel">
                    <img className="carrouselImg" src={`src/assets/images/image-product-1.jpg`} onClick={()=>setProductImg(1)} alt="product-image" />
                    <img className="carrouselImg" src={`src/assets/images/image-product-2.jpg`} onClick={()=>setProductImg(2)} alt="product-image" />
                    <img className="carrouselImg" src={`src/assets/images/image-product-3.jpg`} onClick={()=>setProductImg(3)} alt="product-image" />
                    <img className="carrouselImg" src={`src/assets/images/image-product-4.jpg`} onClick={()=>setProductImg(4)} alt="product-image" />
                </div>
                :
                <></>}
        </main>
    )
}
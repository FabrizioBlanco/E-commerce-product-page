import useWindowWidth from "../../CustomHook/useWindowWidth"
import './ProductImage.css'
import image1 from '@/assets/images/image-product-1.jpg'
import image2 from '@/assets/images/image-product-2.jpg'
import image3 from '@/assets/images/image-product-3.jpg'
import image4 from '@/assets/images/image-product-4.jpg'
import prevIcon from '@/assets/images/icon-previous.svg'
import nextIcon from '@/assets/images/icon-next.svg'
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
            <img id="productImg" src={productImg === 1 ? image1 : productImg === 2 ? image2 : productImg === 3 ? image3 : image4} alt="main-product-image" />
            <button className="interativeButton" id="previous" onClick={handlePrevious} ><img src={prevIcon} alt="previous" /></button>
            <button className="interativeButton" id="next" onClick={handleNext}  ><img src={nextIcon} alt="next" /></button>

            {windowWidth >= 767 ?
                <div className="carrousel">
                    <img className="carrouselImg" src={image1} onClick={() => setProductImg(1)} alt="product-image1" />
                    <img className="carrouselImg" src={image2} onClick={() => setProductImg(2)} alt="product-image2" />
                    <img className="carrouselImg" src={image3} onClick={() => setProductImg(3)} alt="product-image3" />
                    <img className="carrouselImg" src={image4} onClick={() => setProductImg(4)} alt="product-image4" />
                </div>
                :
                <></>}
        </main>
    )
}
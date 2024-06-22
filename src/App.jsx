
import './App.css'
import Nav from './component/NavComponent/Nav.jsx'
import ProductImage from './component/productComponent/ProductImage/ProductImage.jsx'
import ProductDescription from './component/productComponent/ProductDescription/ProductDescription.jsx'
import Cart from './component/CartComponent/Cart.jsx'
import { useState } from 'react'
export default function App() {
  const [productCant, setProductCant] = useState(0)
  const [productImg, setProductImg] = useState(1)
  return (
    <>
      <Nav productCant={productCant} setProductCant={setProductCant} />
      <div className='container'>
        <ProductImage productImg={productImg} setProductImg={setProductImg} />
        <div className='prodDescContainer'>
        <ProductDescription />
        <div className='priceContainer'>
          <p className='actualPrice'>$125.00</p>
          <span className='discount'>50%</span>
          <s className='price'>$250.00</s>
        </div>
        <Cart setProductCant={setProductCant} productCant={productCant} />
        </div>
      </div>

    </>
  )
}


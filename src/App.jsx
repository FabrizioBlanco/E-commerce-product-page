
import './App.css'
import Nav from './component/NavComponent/Nav'
import ProductImage from './component/productComponent/ProductImage/ProductImage'
import ProductDescription from './component/productComponent/ProductDescription/ProductDescription'
import Cart from './component/CartComponent/Cart'
import { useState } from 'react'
export default function App() {
  const [productCant, setProductCant] = useState(0)
  return (
    <>
      <Nav />
      <ProductImage />
      <ProductDescription />
      <div className='priceContainer'>
        <p className='actualPrice'>$125.00</p>
        <span className='discount'>50%</span>
        <s className='price'>$250.00</s>
      </div>
      <Cart setProductCant={setProductCant} productCant = {productCant} />
    </>
  )
}


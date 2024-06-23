import { useState } from "react"
import "./Nav.css"
import sneakersLogo from '@/assets/images/logo.svg'
import closeIcon from '@/assets/images/icon-close.svg'
import menuIcon from '@/assets/images/icon-menu.svg'
import cartIcon from '@/assets/images/icon-cart.svg'
import avatar from '@/assets/images/image-avatar.png'
import Basket from "../BasketComponent/Basket.jsx"
import useWindowWidth from "../../component/CustomHook/useWindowWidth.jsx"
function Menu({ toggleMenu }) {
    return (
        <div className="menuContainer">
            <div className="menuList">
                <img className="navIcon" id="closeIcon" src={closeIcon} alt="close-icon"
                    onClick={toggleMenu}
                />
                <nav className="menu">
                    <li>Collecction</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </nav>
            </div>
        </div>
    )
}
export default function Nav({ productCant, setProductCant }) {
    const [enableBasket, setEnableBasket] = useState(false)
    const [enableMenu, setEnableMenu] = useState(false)
    let windowWidth = useWindowWidth()
    const toggleBucket = () => {
        setEnableBasket(prevState => !prevState)
    }
    const toggleMenu = () => {
        setEnableMenu(prevState => !prevState)
    }
    return (
        <header className="navHeader">
            <div className="headerSection">
                {windowWidth >= 767 ?
                    <>
                        <img className="navIcon" src={sneakersLogo}
                            alt="sneakers-logo" />
                        <nav className="navMenu">
                            <li>Collecction</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                            <li>Contact</li>
                        </nav>
                    </>
                    :
                    <>
                        <img className="navIcon" src={menuIcon}
                            alt="icon-menu"
                            onClick={() => {
                                toggleMenu()
                                setEnableBasket(false)
                            }} />
                        <img className="navIcon" src={sneakersLogo}
                            alt="sneakers-logo" />
                    </>
                }

                {enableMenu && <Menu toggleMenu={toggleMenu} setEnableBasket={setEnableBasket} />}

            </div>

            <div className="headerSection">
                <div className="cartContainer">
                    <img className="navIcon" id="cart" src={cartIcon}
                        alt="icon-cart"
                        onClick={toggleBucket}
                    />
                    {productCant > 0 ? <span id="notification">{productCant}</span> : <></>}
                </div>
                {enableBasket && <Basket toggleBucket={toggleBucket} productCant={productCant} setProductCant={setProductCant} />}
                <img className="navIcon" id="avatar" src={avatar}
                    alt="icon-cart" />
            </div>
        </header>
    )
}
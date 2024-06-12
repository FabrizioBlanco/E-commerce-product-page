import "./Nav.css"
export default function Nav() {
    return (
        <header className="navHeader">
            <div className="headerSection">
                <img className="navIcon" src="src/assets/images/icon-menu.svg"
                    alt="icon-menu"
                    onClick={() => { console.log("Hiciste click en el Menú") }} />
                <img className="navIcon" src="src/assets/images/logo.svg"
                    alt="sneakers-logo" />
            </div>

            <div className="headerSection">
                <img className="navIcon" id="cart" src="src/assets/images/icon-cart.svg"
                    alt="icon-cart"
                    onClick={() => { console.log("Hiciste click en el Carrito") }}
                />
                <img className="navIcon" id="avatar" src="src/assets/images/image-avatar.png"
                    alt="icon-cart" />
            </div>
        </header>
    )
}
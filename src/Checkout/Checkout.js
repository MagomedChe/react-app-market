import checkout from "./shopping-cart-solid.svg"


function Checkout(props) {

    const filtered = props.products.filter((item) => {
                return item.bought;
            }
        )

    return (
        <div className="checkout">
            <img src={checkout} alt="LOGO"/>
            <span className="counter">
                {filtered.length}
            </span>
        </div>
    );
}

export default Checkout;
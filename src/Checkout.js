import React from 'react'
import { useStateValue } from './StateProvider'
import "./checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://m.media-amazon.com/images/G/31/img20/AmazonPay/Travel/Ingresses/August/Bus_N2GL_Pay_Dashboard_PC._CB406968026_.jpg" alt="" />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>You have items saved to buy later. To buy one or more now, click "Move to cart" next to the item.</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    rating={item.rating}
                                    price={item.price} />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

// const [{ basket }, dispatch] = useStateValue


export default Checkout 
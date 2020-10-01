import React from 'react'
import "./subtotal.css"
import CurrencyFormate from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './Reducer'


function Subtotal() {

    const [{ basket }] = useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormate
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length}) items: <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains gift
                </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                prefix={"₹"}
                thousandSeparator={true}
            />
            <button> Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

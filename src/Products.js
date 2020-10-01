import React from 'react'
import "./product.css"
import { useStateValue } from './StateProvider'
function Products({ id, title, price, rating, image }) {

    const [{ basket }, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                rating: rating,
                price: price
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => <p>⭐</p>)
                    }
                </div>
            </div>
            <img src={image} alt="product image" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Products

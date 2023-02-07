import React from 'react'
import { ShopContext } from '../../context/shop-context'
export const Product = (props) => {
  const {id, productName, price, productImage} = props.data

  const { addToCart } = userContext(ShopContext)
  
  return (
    <div className='product'>
      <img src={productImage} />
      <div className='description'>
        <strong><p>{productName}</p></strong>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}> Add To Cart</button>

    </div>
  )
}

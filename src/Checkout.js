
import React from 'react'
import Title from './Title'
import {Link} from 'react-router-dom'
import QuantityBtn from './QuantityBtn'
import {CartContext} from "./CartContext"
import { useContext } from 'react'

function Checkout() {

  let {cartItems} = useContext(CartContext)
  let cartEmpty = cartItems.length<=0 ? true: false


/*  const arr = [1, 2, 3, 4, 5];
const reduceArr = arr.reduce((accumulator, currentValue) => {
  console.log(accumulator); // 0, 1, 3, 6, 10
  console.log(currentValue); // 1, 2, 3, 4, 5
  return accumulator + currentValue
}, 0);

這裡的 accumulator 變成從 0 開始計算，後面接續 currentValue 的值累計。而 currentValue 會從陣列的第一個值開始 loop。*/

  let grandTotal = cartItems.reduce((total, product)=>{
    return total += product.price*product.quantity

  },0)
  const freeShippingPrice = 99

  return (
    <div>
      <Title mainTitle = "shopping cart"/>

      {
        cartEmpty &&
        <div>
          No item in shopping cart<br/>
          <Link to = "/">Go back to shop</Link>
          </div>
      }

      {
        !cartEmpty&&
      <div>
        <div id ="cartSection ">
          {
            /* 產品列表 */
            cartItems.map(product=>(
            <div key={product.id}>
              <img src={process.env.PUBLIC_URL+'/img/'+  product.image}/>
              {product.name}
              {product.description}
              {product.price}
              number of items {product.quantity}
              <QuantityBtn productInfo={product}/>
            </div>


            ))
          
          
          }
        </div>

        <div id ="checkOutSection">
          <div>Total cost</div>
          {/* 價錢總數 */}
          <div>${grandTotal}</div>

          {
              /* 免費送貨 */
              grandTotal >= freeShippingPrice ?
              <div>free deliver</div>:
              <div>reach ${freeShippingPrice} free delivery<br/>
              remain${freeShippingPrice-grandTotal}</div>
          
          }
        </div> 
         
      </div>
      }
  
    </div>
    

  )
}

export default Checkout

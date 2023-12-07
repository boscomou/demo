
import React from 'react'
import {useParams} from "react-router-dom"
import {Link} from"react-router-dom"
import Title from './Title';
import QuantityBtn from './QuantityBtn'
import {useState,useEffect} from 'react'

function ProductDetail() {
    let params = useParams()
    let [productDetail,setProductDetail] = useState(null)

    //useEffect
useEffect(()=>{
  //1 : 無第二個參數 : component每次render都會觸發
  //2 : Dependency Array是空array時 : 只會在第一次網頁render時會觸發
  //3 : Dependency Array是有變數時 : 第一次網頁render時 + 指定的變數改變 會觸發

  fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
  .then(response => response.json())
  .then(data=> {
    let productInfo = data.find((element)=>{
      return element.id === parseInt(params.id)
    })
    setProductDetail(productInfo) 
  })


},[])    


  return (
    <div>
      { productDetail &&
      <div>
        {/* <Title mainTitle = {params.id + "Product Detail"}/> */}
        <Title mainTitle = {productDetail.name + "Product Detail"}/>
        <img src={process.env.PUBLIC_URL+'/img/'+productDetail.image} alt={productDetail.name} width="400" />
        <p>Name: {productDetail.name}</p>
        <p>Price: {productDetail.price}</p>
        <p>Description: {productDetail.description}</p>
        <QuantityBtn productInfo = {productDetail} />
        </div>
      }

      <Link to = "/">Back to Menu</Link> 
    </div> 
  )
}

export default ProductDetail


import React from 'react'
import styles from './ProductList.module.css';
import {useState,useEffect} from "react"  //react Hook
import {Link} from "react-router-dom"
import Title from './Title';
import QuantityBtn from './QuantityBtn'


function ProductList() {
    // let ProductList = [
    //     {
    //         "id": 3, "name": "mango", "price": 4, "image": "mango.jpg",
    //         "description": "fresh mango"
    //     }, {
    //         "id": 4, "name": "apple", "price": 4, "image": "apple.jpg",
    //         "description": "fresh apple"

    //     },
    //     {
    //         "id": 5, "name": "orange", "price": 5, "image": "orange.jpg",
    //         "description": "fresh orange"
    //     }
    // ]

    let[productList,setProductList] = useState([])
    let[input,setInput] = useState('')


    console.log(productList)

//useEffect
useEffect(()=>{
    //1 : 無第二個參數 : component每次render都會觸發
    //2 : Dependency Array是空array時 : 只會在第一次網頁render時會觸發
    //3 : Dependency Array是有變數時 : 第一次網頁render時 + 指定的變數改變 會觸發

    fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
    .then(response => response.json())
    .then(data=> setProductList(data))


},[])    

  
useEffect(()=>{

},[input])

//     //let product = 'fruit'

//    const[product, setProduct] = useState('fruite')

//     const handleClick =()=>{
//         if (product === 'fruite') {
//             setProduct('e');
//           } else {
//             setProduct('fruite');
//           }
//         console.log(product)
//     }

const [showProduct, setShowProduct] = useState(false)
    

    return (
        //React Fragment
        <>
            {/* {product} <button onClick={handleClick}>change value</button> */}
            {/* {showProduct && <button onClick={()=>{setShowProduct(false)}}>hide item</button>}
            {!showProduct && <button onClick={()=>{setShowProduct(true)}}>show item</button>} */}

            <input type="text" onChange={e=>setInput(e.target.value)} />
            <Title mainTitle = "Choose fruit" subTitle="10% off"/>


        
            <div>
                {
                     productList.map((product) => {
                        return (

                            // <div className = {styles.productBorder} key={product.id}>
                            <React.Fragment className = {styles.productBorder} key={product.id}>
                                {product.name}<br />
                                price = {product.price}<br />
                                <Link to ={'/product/'+product.id}>

                                <img src={process.env.PUBLIC_URL + '/img/' + product.image}></img><br />

                                </Link>
                                
                                {product.description}<br />
                                <QuantityBtn productInfo={product} />
                             </React.Fragment>
                            // </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductList


// api: https://hoyinleung.github.io/demoapi/react-basic-product.json
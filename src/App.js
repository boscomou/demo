import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ProductList from './ProductList';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import{CartContext} from './CartContext'
import {useState} from 'react';

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>
      {/* <a href = "/checkout">shopping car(a tag) </a>             "this method is slower than Link to*/} 

      <CartContext.Provider value = {{cartItems,setCartItems}}>

      <Link to ='/'>Home</Link>
      <Link to ='/product_detail'>ProductDetail</Link>
      <Link to ='/checkout'>Checkout</Link> 

      
      <Routes>
        <Route path="/" element={<ProductList/>}/>

{/* 
        <Route path="/product_detail" element={<ProductDetail/>}>
          <Route path =":id" element={<ProductDetail/>}/>
        </Route> */}

        
        <Route path="/product" element={<ProductDetail/>}>
          <Route path =":id" element={<ProductDetail/>}/>
        </Route>
        
    


        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="*" element={<p>cannot find page</p>}/>

      </Routes>
      </CartContext.Provider> 
    </BrowserRouter>
  ); 
}

export default App;

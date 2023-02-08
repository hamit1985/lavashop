import React from 'react'
import { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
export const Product = () => {
  
  const [selectedImg,setSelectedImg] = useState(0)
  const [quantity,setQuantity] = useState(1)

  const images =[
    'https://images.pexels.com/photos/15335988/pexels-photo-15335988.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/15335987/pexels-photo-15335987.jpeg?auto=compress&cs=tinysrgb&w=400',
    
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
        <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
        <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div> 
      </div>
      <div className="mainImg">
        <img src={images[selectedImg]} alt="" />
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti distinctio saepe fugiat aliquam, consequatur fuga debitis nobis sapiente voluptas a itaque, nulla recusandae explicabo qui. Non illo architecto eaque numquam.</p>
        <div className="quantity">
          <button onClick={()=>setQuantity((prev)=>prev === 1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
        </div>
        <button className='add'>
         <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/>ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/>ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>vendor : polo</span>
          <span>product type: dress</span>
          <span>Tag: dress, Women</span>
        </div>
        <hr />
        <div className="info">
           <span>Description</span>
           <hr />
           <span>ADDITIONAL INFORMATION</span>
           <hr />
           <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

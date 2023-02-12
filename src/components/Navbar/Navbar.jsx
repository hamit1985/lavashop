import React from 'react'
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import { Cart } from '../Cart/Cart';
import { useSelector } from 'react-redux';


export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const products = useSelector(state=>state.cart.products)
  return (
    <div className='navbar'>
        <div className="wrapper">
          <div className='left'>
            <div className="item">
                <img className ='flag'src="/images/rsz_usflg.png" alt="" />
                <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
                <span>USD</span>
                <KeyboardArrowDownIcon />
            </div>
            <div className="item">
                <Link className='link' to='/products/1'>WOMEN</Link>
            </div>
            <div className="item">
                <Link className='link' to='/products/2'>MEN</Link>
            </div>
            <div className="item">
                <Link className='link' to='/products/3'>CHILDREN</Link>
            </div>
           </div>
          <div className='center'>
            <Link className='link' to='/'>SARACOUTURE</Link>
          </div>
          <div className='right'>
             <div className='item'>
                 <Link className='link' to='/'>Homepage</Link>
             </div>
             <div className='item'>
                 <Link className='link' to='/'>About</Link>
             </div>
             <div className='item'>
                 <Link className='link' to='/'>Contact</Link>
             </div>
             <div className='item'>
                 <Link className='link' to='/'>Stores</Link>
             </div>
             <div className="icons">
                <SearchIcon/>
                <FavoriteBorderIcon/>
                <PersonIcon/>
                <div className="cartIcon" onClick={()=>setOpen(!open)}>
                    <ShoppingCartIcon/>
                    <span>{products.length}</span>
                </div>
             </div>
          </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './Navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
          <div className='left'>
            <div className="item">
                <img className ='flag'src="/images/usflg.png" alt="" />
                <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
                <span>USD</span>
                <KeyboardArrowDownIcon />
            </div>
            <div className="item">
                <Link to='/products/1'>Women</Link>
            </div>
            <div className="item">
                <Link to='/products/2'>Men</Link>
            </div>
            <div className="item">
                <Link to='/products/3'>Children</Link>
            </div>
           </div>
          <div className='center'>
            <Link to='/'>SARACOUTURE</Link>
          </div>
          <div className='right'>
             <div className='center'>
                 <Link to='/'>Homepage</Link>
             </div>
             <div className='center'>
                 <Link to='/'>About</Link>
             </div>
             <div className='center'>
                 <Link to='/'>Contact</Link>
             </div>
             <div className='center'>
                 <Link to='/'>Stores</Link>
             </div>
             <div className="icons">
                <SearchIcon/>
                <FavoriteBorderIcon/>
                <PersonIcon/>
                <div className="cartIcon">
                    <ShoppingCartIcon/>
                    <span>0</span>
                </div>
             </div>
          </div>
        </div>
    </div>
  )
}

import React from 'react'
import './Footer.scss'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deserunt, hic quam minus consequatur voluptatibus ducimus accusamus sunt non repellat accusantium molestiae quaerat maiores debitis qui fugiat facere quis est!</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aspernatur dolorum nesciunt itaque, quo eum quos maiores quod natus. Esse, laborum ab nemo ratione pariatur sequi adipisci vel atque? Tempora.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">SARACOUTURE</span>
          <span className="copyright">© Copyright. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/images/footer.png" alt="" />
        </div>
      </div>
    </div>
  )
}

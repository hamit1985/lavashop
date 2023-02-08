import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const Cart = () => {
    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/11656178/pexels-photo-11656178.jpeg',
            title: 'asasassa',
            desc: 'lofjsfjslkdfjslfjlksdf',
            isNew : true,
            oldPrice : 250,
            price: 200,
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/12992107/pexels-photo-12992107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5595730/pexels-photo-5595730.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'SARI',
            desc: 'lldfjklsfjlsfjsklfjlksdf',
            isNew : true,
            oldPrice : 230,
            price: 190,
        },
    ]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map( item =>(
            <div className='item' key={item.id}>
                <img src={item.img} alt="" />
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">reset</span>
    </div>
  )
}

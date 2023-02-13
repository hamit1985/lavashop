import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {removeItem, resetCart } from '../../redux/cartReducer'
import {loadStripe} from '@stripe/stripe-js';
import {makeRequest} from '../../makeRequest'
export const Cart = () => {
    const products = useSelector(state=>state.cart.products)
    const dispatch = useDispatch()

    const totalPrice = ()=>{
        let total = 0 
        products.forEach((item) => (total += item.quantity * item.price))
        return total.toFixed(2)
    }

    const stripePromise = loadStripe('pk_test_51Mad9GCwbyS1X5dv9QS3jPgYssW7y9vl6OvM0wUwm1axUmZtDo5ok34RYdOCPPrpvDifx5Wy3YOwPr8r206UpuJV00NExDNp2k');
    const handlePayment = async()=>{
        try{
         const stripe = await stripePromise

         const res = await makeRequest.post('/orders',{
            products,
         })
         await stripe.redirectToCheckout({
            sessionId : res.data.stripeSession.id,
         })
        } catch(err){
            console.log(err)
        }
        
    }
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {products?.map( item =>(
            <div className='item' key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">{item.quantity} x ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={()=>dispatch(resetCart())}>reset cart</span>
    </div>
  )
}

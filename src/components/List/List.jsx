import React from 'react'
import './List.scss'
import { Card } from '../Card/Card'

export const List = () => {

    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/11656178/pexels-photo-11656178.jpeg',
            title: 'asasassa',
            isNew : true,
            oldPrice : 250,
            price: 200,
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/12992107/pexels-photo-12992107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5595730/pexels-photo-5595730.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'SARI',
            isNew : true,
            oldPrice : 230,
            price: 190,
        },
        {
            id: 3,
            img: 'https://images.pexels.com/photos/10774086/pexels-photo-10774086.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/2065198/pexels-photo-2065198.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'dkdkdkdk',
            isNew : true,
            oldPrice : 200,
            price: 100,
        },
        {
            id: 4,
            img: 'https://images.pexels.com/photos/1655842/pexels-photo-1655842.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/2205415/pexels-photo-2205415.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'aksksld',
            isNew : true,
            oldPrice : 400,
            price: 300,
        },
        {
            id: 5,
            img: 'https://images.pexels.com/photos/1655842/pexels-photo-1655842.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/2205415/pexels-photo-2205415.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'aksksld',
            isNew : true,
            oldPrice : 400,
            price: 300,
        },
        {
            id: 6,
            img: 'https://images.pexels.com/photos/1655842/pexels-photo-1655842.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/2205415/pexels-photo-2205415.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'aksksld',
            isNew : true,
            oldPrice : 400,
            price: 300,
        },
        {
            id: 7,
            img: 'https://images.pexels.com/photos/1655842/pexels-photo-1655842.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/2205415/pexels-photo-2205415.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'aksksld',
            isNew : true,
            oldPrice : 400,
            price: 300,
        },
        {
            id: 8,
            img: 'https://images.pexels.com/photos/1655842/pexels-photo-1655842.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/2205415/pexels-photo-2205415.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'aksksld',
            isNew : true,
            oldPrice : 400,
            price: 300,
        },
        {
            id: 9,
            img: 'https://images.pexels.com/photos/1655842/pexels-photo-1655842.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/2205415/pexels-photo-2205415.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'aksksld',
            isNew : true,
            oldPrice : 400,
            price: 300,
        },
        {
            id: 10,
            img: 'https://images.pexels.com/photos/1655842/pexels-photo-1655842.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/2205415/pexels-photo-2205415.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'aksksld',
            isNew : true,
            oldPrice : 400,
            price: 300,
        },
        {
            id: 11,
            img: 'https://images.pexels.com/photos/1655842/pexels-photo-1655842.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/2205415/pexels-photo-2205415.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'aksksld',
            isNew : true,
            oldPrice : 400,
            price: 300,
        },
        
    ]
  return (
    <div className='list'>{data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}

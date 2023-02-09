import React, { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import './FeaturedProducts.scss'
import axios from "axios";

export const FeaturedProducts = ({type}) => {
    
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
            oldPrice : 250,
            price: 200,
        },
        {
            id: 3,
            img: 'https://images.pexels.com/photos/10774086/pexels-photo-10774086.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/2065198/pexels-photo-2065198.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'dkdkdkdk',
            isNew : true,
            oldPrice : 250,
            price: 200,
        },
        {
            id: 4,
            img: 'https://images.pexels.com/photos/1655842/pexels-photo-1655842.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/2205415/pexels-photo-2205415.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'aksksld',
            isNew : true,
            oldPrice : 250,
            price: 200,
        },
        
    ]
    const [products,setProducts] = useState([])

    console.log(process.env.REACT_APP_API_URL);
console.log(process.env.REACT_APP_API_TOKEN);

       
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const data = await axios.get(
                    process.env.REACT_APP_API_URL+'/products', 
                    {
                      headers: {
                        Authorization:'bearer '+ process.env.REACT_APP_API_TOKEN,
                      },
                    }
                )
                console.log(data)
            } catch(err) {
                console.log(err)
            }
           }
        fetchData()

    },[]) 
    

    return (
        <div className="FeaturedProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A iusto molestias placeat id corporis accusantium dolore tempore sint molestiae excepturi quis inventore, debitis autem possimus atque consectetur. Natus, voluptatem veritatis.
                </p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id}/>
                ))}

            </div>
        </div>
    )
}


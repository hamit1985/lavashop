import { Card } from "../Card/Card";
import './FeaturedProducts.scss'
import useFetch from "../../hooks/useFetch";

export const FeaturedProducts = ({type}) => {
    
    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    return (
        <div className="FeaturedProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A iusto molestias placeat id corporis accusantium dolore tempore sint molestiae excepturi quis inventore, debitis autem possimus atque consectetur. Natus, voluptatem veritatis.
                </p>
            </div>
            <div className="bottom">
                {error 
                ? 'Something went wrong!(loading'
                : loading 
                ? 'loading' 
                : data?.map(item => <Card item={item} key={item.id}/> )}

            </div>
        </div>
    )
}


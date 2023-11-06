import { addToCart } from '@/store/nextSlice';
import { access } from 'fs';
import React from 'react'
import { useDispatch } from 'react-redux';

const Products = ({ productData }: any) => {
    const dispatch = useDispatch();
    console.log(productData);
  return (
    <div className='product-list m-[24px]'>
        {productData.map((item:any) => {
            const savePrice = (item.oldPrice - item.price).toFixed(2);
            const {_id,brand,category, description,image,isNew, oldPrice,price, title} = item;
            return(
                <div className="product-list__item rounded" key={item._id}>
                    <p>Save {savePrice}</p>
                    <img src={image} alt="" />
                    <h1>{title}</h1>
                    <p>{description.substring(0,100)}...</p>
                    <small>{category}</small>
                    <p>
                        <span className='line-through'>{oldPrice} </span>
                        <span className='font-bold'>&nbsp;&nbsp;{price}</span>
                    </p>

                    <div className='text-center mt-4 flex justify-between'>
                        <button onClick={()=> 
                            dispatch(
                                addToCart({
                                    _id,
                                    brand,
                                    category,
                                    description,
                                    image,
                                    isNew,
                                    oldPrice,
                                    price,
                                    title,
                                    quantity: 1
                                })
                            )
                        } 
                        className='btn btn-primary px-4 py-2 rounded-md bg-primary hover:bg-amber-500 text-white duration-300 w-2/5'>Add to cart</button>
                        <button className='btn btn-primary px-4 py-2 rounded-md bg-primary hover:bg-amber-500 text-white duration-300 w-2/5'>Add to wishlist</button>
                    </div>
                </div>
            );
        })}
    </div>
  )
}

export default Products
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BASE_URL } from '../../backend/config_url.js'

const App = () => {

    const [products,setProducts]=useState([])

    async function fetchProds(){
        try {
            const res=await fetch(`${BASE_URL}/products`)
            const data=await res.json()
            setProducts(data)
        } catch (error) {
            console.log('error in fetching product',error)
        }
    }
    useEffect(()=>{
        fetchProds()
    },[])
    // console.log(products)
  return (
    <div>
      <h3>Products</h3>
        <ul>
            {
                products?.map(prod=>(
                    <li key={prod._id}>{prod?.name} {prod?.price} </li>
                ))
            }
        </ul>
    </div>
  )
}

export default App

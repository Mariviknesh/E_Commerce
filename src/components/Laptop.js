import React from 'react'
import Product from './Product'

export default function Laptop(props) {
    const {products,onRemove,onAdd,button}=props
  return (
    <content className="block col-2">
        <h2>Laptop</h2>
    <div>
        <div className="container">
            {products.map((product)=>(
                product.type==='laptop'?<Product product={product} onRemove={onRemove} onAdd={onAdd} button={button} key={product.id}/>:""
            )
        )}
        </div>
    </div>
    </content>
  )
}

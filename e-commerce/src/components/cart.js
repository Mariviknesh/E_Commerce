import React from 'react'
    
export default function Cart(props){
    const {cartItems,onAdd,onRemove}=props;
    return <aside class="block col-1">
        <h2>Cart Items</h2>
        <div>
            {cartItems.length===0 &&<div>Cart is Empty</div>}
        </div>
        {cartItems.map((item)=>
        <div key={item.id} class="row">
            <div class="col-2">{item.name}</div>
            <div class="col-2">
                <button onClick={onAdd(item)} class="add">+</button>
                <button onClick={onRemove(item)} class="remove">-</button>
            </div>
            <div class="col-2 text-right">
                {item.qty} x{item.price.toFixed(2)}
            </div>
        </div>        
        )}
    </aside>
}
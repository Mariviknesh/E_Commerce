import React from 'react'
    
export default function Sidebar(props){
    const {cartItems,onAdd,onRemove}=props;
    const itemPrice=cartItems.reduce((a,c)=>a+c.price*c.qty,0);
    const taxPrice=itemPrice*0.1;
    const totalPrice=itemPrice+taxPrice;
    return <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>
            {cartItems.length===0 &&<div>Cart is Empty</div>}
        </div>
        {cartItems.map((item)=>
        <div key={item.id} className="row">
            <div > <img src={item.image} alt="load" className="small"></img></div>
            <div className="col-2">{item.name}</div>
            <div className="col-2">
                <button onClick={()=>onAdd(item)} className="add">+</button>
                <button onClick={()=>onRemove(item)} className="remove">-</button>
            </div>
            <div className="col-2">
                {item.qty} x{item.price.toFixed(2)}
            </div>
        </div>        
        )}
        {cartItems.length!==0&&(
            <>
            <hr>
            </hr>
            <div class="row">
            <div class="col-2">
                Items Price
            </div>
            <div class="col-1">
                {itemPrice.toFixed(2)}
            </div>
            </div>
            <div class="row">
            <div class="col-2">
                Tax Price
            </div>
            <div class="col-1">
                {taxPrice.toFixed(2)}
            </div>
            </div><div class="row">
            <div class="col-2">
                Total Price
            </div>
            <div class="col-1">
                {totalPrice.toFixed(2)}
            </div>
            </div>
            </>
        )}
    </aside>
}

import { useState } from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import data from './data';
import Laptop from './components/Laptop';
import Television from './components/Television';
import Phone from './components/Phone';

const App=()=> {  
  const {products}=data;
  const [cartItems,setCartItems]=useState([]); 
  
  const button=(item)=>{
    const index=cartItems.findIndex((cartItem)=> cartItem.id===item.id);
    return index >= 0;
  }

  const onAdd=(product)=>
  {
    const exist=cartItems.find(x=> x.id===product.id);
    if(exist)
    {
      setCartItems(cartItems.map(x=>x.id===product.id?{...exist,qty:exist.qty+1}:x));

    }
    else{
      setCartItems([...cartItems, {...product,qty:1}]);
    }
  }
  const onRemove=(product)=>
  {
    const exist=cartItems.find((x)=>x.id===product.id);
    if(exist.qty===1){
   
      setCartItems(cartItems.filter((x)=>x.id !==product.id));
    }
    else{
      setCartItems(cartItems.map(x=>x.id===product.id?{...exist,qty:exist.qty-1}:x));

    }
  }
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}onAdd={onAdd}onRemove={onRemove}cartItems={cartItems} className="header"></Header>   
      <div className="row">
           
          <Routes>
           <Route path="/cart" element={<Sidebar onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Sidebar>} />
           <Route path="/" element={ <Content onRemove={onRemove} onAdd={onAdd} products={products} button={button} className="container"></Content>}/>
           <Route path="/tv" element={<Television products={products} onRemove={onRemove} onAdd={onAdd} button={button} className="container"/>}/>
           <Route path="/laptop" element={<Laptop products={products} onRemove={onRemove} onAdd={onAdd} button={button} className="container"/>}/>
           <Route path="/phone" element={<Phone products={products} onRemove={onRemove} onAdd={onAdd} button={button} className="container"/>}/>
        
          </Routes>
    
      </div>
    </div>
  );
}

export default App;

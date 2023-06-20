
export default function Product(props) {
    const {product,onAdd, onRemove,button}=props;
    console.log("in product")

    let changeText = () => {
      product.s = !product.s
      if(product.s){
        onAdd(product)
      }else{
        onRemove(product)
      }
      
    }
 
  return (
    <div className='shows'>
        <img className="small" src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>{product.price}</div>
        <div>
            <button onClick={()=>{changeText()}}>{button(product)?"Remove":"Add"}</button>
        </div>
    </div>
  )
}

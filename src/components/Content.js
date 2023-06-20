import Product from './Product'

    
export default function Content(props){
    const {products, onAdd, onRemove, setShow,button}=props;
    return <content className="block col-2">
        <h2>Products</h2>
       
            <div className="container">
                {products.map((product)=>(
                    <Product key={product.id} button={button} setShow={setShow} product={product} onAdd={onAdd} onRemove={onRemove} ></Product>
                ))}
            </div>
    
    </content>
}
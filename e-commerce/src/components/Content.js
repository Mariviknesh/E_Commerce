import Product from './Product'
    
export default function Content(props){
    const {products, onAdd}=props;
    return <content className="block col-2">
        <h2>Products</h2>
        <div className="container">
            {products.map((product)=>(
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
            ))}
        </div>
    </content>
}
// TODO: create a component that displays a single bakery item
const BakeryItem = (props) => {
    return (
        <div className="bakeryItem">
            <img src={props.item.image}></img>
            <h2>{props.index}. {props.item.name}</h2>
            <p>{props.item.description}.</p>
            <p>Price: {props.item.price}</p>
            <button onClick={() => {
                props.updateTotal(props.item.price)
                props.updateCart(props.item.name)
            }}>Add {props.item.name} to Cart!</button>
        </div>
    );
}

export default BakeryItem;
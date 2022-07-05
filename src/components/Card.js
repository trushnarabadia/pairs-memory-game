function Card({item, id, handleClick}){
    const itemClass = item.stat ? " current " + item.stat : ""
    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="image" />
        </div>
    )
}

export default Card;
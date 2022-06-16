function Card({item}){
    return (
        <div className="card">
            <img src={item.img} alt="image" />
        </div>
    )
}

export default Card;
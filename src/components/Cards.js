import { useState } from 'react'
import Card from './Card'
export default Cards

function Cards(){
    const [items, setItems] = useState([ 
        { id: 1, img: '/img/apple.jpeg',  stat: "" },
        { id: 1, img: '/img/apple.jpeg', stat: "" },
        { id: 2, img: '/img/banana.jpeg', stat: "" },
        { id: 2, img: '/img/banana.jpeg', stat: "" },
        { id: 3, img: '/img/blueberries.jpeg', stat: "" },
        { id: 3, img: '/img/blueberries.jpeg', stat: "" },
        { id: 4, img: '/img/cherry.webp', stat: "" },
        { id: 4, img: '/img/cherry.webp', stat: "" },
        { id: 5, img: '/img/grapes.jpeg', stat: "" },
        { id: 5, img: '/img/grapes.jpeg', stat: "" },
        { id: 6, img: '/img/kiwi.webp', stat: "" },
        { id: 6, img: '/img/kiwi.webp', stat: "" },
        { id: 7, img: '/img/orange.webp', stat: "" },
        { id: 7, img: '/img/orange.webp', stat: "" },
        { id: 8, img: '/img/peach.webp', stat: "" },
        { id: 8, img: '/img/peach.webp', stat: "" },
        { id: 9, img: '/img/pear.webp', stat: "" },
        { id: 9, img: '/img/pear.webp', stat: "" },
        { id: 10, img: '/img/strawberry.jpeg', stat: "" },
        { id: 10, img: '/img/strawberry.jpeg', stat: "" },
    ].sort(() => Math.random() - 0.3))

    const [last, setLast] = useState(-1)

    function check(current){
        if(items[current].id == items[last].id){
            items[current].stat = "selected"
            items[last].stat = "selected"
            setLast(-1)
        }

    function handleClick(id){
        if(last === -1){
            setLast(id)
        }else{
            check(id)
        }
        
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    )
}

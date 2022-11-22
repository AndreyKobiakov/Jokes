import React, { useState } from 'react'
import './Home.css'


export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const [todoList, setToDoList] = useState([
    {id: 1, order: 1, text: 'greate ToDo List'},
    {id: 2, order: 2, text: 'jobs'},
    {id: 3, order: 3, text: 'loocking videos'},
    {id: 4, order: 4, text: 'go to supermarket'},
  ]);
  const [selectedCard, setSelectedCard] = useState(null);


function dragStartHandler(e, card){
  console.log('drag', card);
  setSelectedCard(card);
}
function dragEndHandler(e){
e.target.style.background = 'white';
  
}
function dragOverHandler(e){
 e.preventDefault()
 e.target.style.background = 'lightgray'
}
function dropHandler(e, card){
  e.preventDefault()
  setToDoList(todoList.map(el => {
    if (el.id === card.id){
      return {...el, order: selectedCard.order}
    }
    if (el.id === selectedCard.id){
      return {...el, order: card.order}
    }
    return el
  }))
  e.target.style.background = 'white'
 }
 const sortToDo = (a, b)=>{
if(a.order>b.order){
  return 1
}else{
  return -1
}
 }

  return (
    <div className='cardHome'>
      {todoList ? todoList.sort(sortToDo).map(card => 
      <div
      onDragStart={(e) => dragStartHandler(e, card)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, card)}
        draggable = {true}
        className = "card"
        key = {card.id}>
        {card.text}
      </div>) 
        : <h4>Дел нет...</h4>}
    </div>
  )
}

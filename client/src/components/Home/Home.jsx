import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './Home.css'


export default function Home() {
  const {toDo} = useSelector(s=>s)
  const [toDoList, setToDoList] = useState(toDo.toDoS);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [input, setInput] = useState('');
 
function dragStartHandler(e, board, card){
  setSelectedBoard(board);
  setSelectedCard(card)
}
function dragLeaveHandler(e){
  e.target.style.boxShadow = 'none';
}
function dragEndHandler(e){
  e.target.style.boxShadow = 'none';
  
}
function dragOverHandler(e){
 e.preventDefault()
 if(e.target.className === 'item');
 e.target.style.boxShadow = '0 5px 5px gray';
}
function dropHandler(e, board, card){
  e.preventDefault()
  const currentIndex = selectedBoard.items.indexOf(selectedCard)
   selectedBoard.items.splice(currentIndex, 1)
   const dropIndex = board.items.indexOf(card)
   board.items.splice(dropIndex + 1, 0, selectedCard)
   setToDoList(toDoList.map(el => {
    if (el.id === board.id){
      return board
    }
    if (el.id === selectedBoard.id){
      return selectedBoard
    }
    return el
  }))
  e.target.style.boxShadow = "none"
 }
 function dropCardHandler(e, board){
  board.items.push(selectedCard)
  const currentIndex = selectedBoard.items.indexOf(selectedCard)
  selectedBoard.items.splice(currentIndex, 1)
  setToDoList(toDoList.map(el => {
    if (el.id === board.id){
      return board
    }
    if (el.id === selectedBoard.id){
      return selectedBoard
    }
    return el
  }))
  e.target.style.boxShadow = "none"
 }
 const inputHandler = (e) => {
  setInput(e.target.value);

};
 const submitHandler = (e)=>{
  e.preventDefault()
  toDoList[0].items.splice(0, 0, {id: Math.round((Math.random() * ((100000000 - 6) + 1)) + 6), text: input })
  setToDoList([...toDoList]);
  setInput('');
 }
 return (
    <div className="cardHome">
      {toDoList.map(board => 
      <div key={board.id} className="card">
        <div className="card__title"
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropCardHandler(e, board)}
          >{board.title}</div>
        {board.items.map(card => 
      <div
          onDragOver={(e) => dragOverHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragStart={(e) => dragStartHandler(e, board, card)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDrop={(e) => dropHandler(e, board, card)}
          draggable = {true}
          className="item"
          key = {card.id}>
        {card.text}
      </div>)}
      </div>)
        }
        <form onSubmit= {submitHandler}>
          <input type="text" onChange={inputHandler} value={input} name="text"/><button type="submit">Add</button>
        </form>
    </div>
  )
}

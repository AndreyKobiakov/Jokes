import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dragEnd, dragLeave, dragOver, dragStart, dropCard, dropHand, submitToDo } from '../../redux/actions/actions'
import './Home.css'


export default function Home() {
  const dispatch = useDispatch()
  const {toDo} = useSelector(s=>s)
  console.log(toDo)
  const [toDoList, setToDoList] = useState(toDo.toDoS);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [input, setInput] = useState('');
    
  const inputHandler = useCallback((e) => {
    setInput(e.target.value);
  }, []);
  const dragLeaveHandler= (e)=> dispatch(dragLeave(e))
  const dragEndHandler= (e)=> dispatch(dragEnd(e))
  const dragOverHandler= (e)=> dispatch(dragOver(e))
  const dragStartHandler = (e, board, card)=>dispatch(dragStart(e, board, card, setSelectedBoard, setSelectedCard))
  const submitHandler = (e)=> dispatch(submitToDo(e, toDoList, setToDoList, setInput, input))
  const dropCardHandler= (e, board)=>dispatch(dropCard(e, board, selectedBoard, selectedCard, toDoList, setToDoList))
  const dropHandler=(e, board, card)=>dispatch(dropHand(e, board, card, selectedBoard, selectedCard, toDoList, setToDoList))

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

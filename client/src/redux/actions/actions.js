import { ADD_TODO } from '../types'


export const addPost = (payload) => ({ type: ADD_TODO, payload });

export const submitToDo = ( e, toDoList, setToDoList, setInput, input)=>{
  e.preventDefault()
  toDoList[0].items.splice(0, 0, {id: Math.round((Math.random() * ((100000000 - 6) + 1)) + 6), text: input })
  setToDoList([...toDoList]);
  setInput('');
}
export const dropCard = (e, board, selectedBoard, selectedCard, toDoList, setToDoList)=>{
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
 export const dropHand = (e, board, card, selectedBoard, selectedCard, toDoList, setToDoList)=>{
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
 export const dragOver = (e) =>{
  e.preventDefault()
  if(e.target.className === 'item');
  e.target.style.boxShadow = '0 5px 5px gray';
 }

 export const dragStart = (e, board, card, setSelectedBoard, setSelectedCard)=> {
  setSelectedBoard(board);
  setSelectedCard(card)
}
export const dragLeave = (e)=> {
  e.target.style.boxShadow = 'none';
}
export const dragEnd = (e)=> {
  e.target.style.boxShadow = 'none';
 }
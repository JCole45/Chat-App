import { SEND_MESSAGE, ADD_USER, REMOVE_USER, EDIT_TEXT } from '../Actions/actionTypes'
import { combineReducers } from 'redux'

var INIT_STATE = ["first state"]
var iD= 0
var uID = 0


const Send = (state=INIT_STATE, action) => {
  console.log(state)
    switch(action.type){
      case SEND_MESSAGE:
      var date = new Date
      var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      return [...state, {
          id:action.id,
          text: action.text,
          time: time,
          uID: uID++
        }
      ]

      case REMOVE_USER:
      return( state.filter(text=>  text.id !==action.id))

      case EDIT_TEXT:
      return state.map((i) => {
        if(i.uID== action.uID) {
        return {...i,
        text:action.newtext} }

        return i
      })

      default:
      return (state)

    }
}



const Add = (state= [], action) => {
    switch(action.type){
      case ADD_USER:
      var date = new Date
      var month= date.getMonth() + 1
        var time = date.getDate() + "-" + month + "-" + date.getFullYear();
      return state = [...state, {name: action.name, id: iD++, date: time}]

      case REMOVE_USER:
      var newArr
      return (newArr = state.filter( user => user.id !== action.id))


      default:
    return (state)


    }
}

export default combineReducers ({
     Send,
     Add
})

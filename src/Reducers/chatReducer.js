import { SEND_MESSAGE, ADD_USER } from '../Actions/actionTypes'
import { combineReducers } from 'redux'

var INIT_STATE = ["first state"]
var iD= 0


const Send = (state=INIT_STATE, action) => {
  console.log(state)
    switch(action.type){
      case SEND_MESSAGE:
      var date = new Date
      var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      var holder = [...state, {
          id:action.id,
          text: action.text,
          time: time
        }
      ]
      return holder


      default:
      return (state)

    }
}



const Add = (state= [], action) => {
    switch(action.type){
      case ADD_USER:
      return state = [...state, {name: action.name, id: iD++}]
      default:
      return (state)

    }
}

export default combineReducers ({
     Send,
     Add
})

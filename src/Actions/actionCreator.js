import { SEND_MESSAGE, RECEIVE_MESSAGE, ADD_USER } from './actionTypes'


export const sendMessage = (text, id) => ({
  type: SEND_MESSAGE,
  text,
  id
})

export const addUser = name => ({
  type: ADD_USER,
  name
})

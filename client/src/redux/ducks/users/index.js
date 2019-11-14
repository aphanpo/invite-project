import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_USERS = "users/GET_USERS"

// initial state
const initialState = {
  users: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    default:
      return state
  }
}

// action creators
const getUsers = () => {
  return dispatch => {
    axios.get("https://randomuser.me/api/?results=1").then(resp => {
      dispatch({
        type: GET_USERS,
        payload: resp.data.results
      })
    })
  }
}

// custom hooks
export function useUsers() {
  const users = useSelector(appState => appState.userState.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return { users }
}

import React from "react"
import { useUsers } from "../hooks"
import Invite from './Invite'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'
// import Going from './Going'


function App() {
  const { users } = useUsers()

  console.log(users)

  return (
    <Router>
    <Provider store={store}>
        <div>
          <Invite />
          {/* <Going /> */}
        </div>
    </Provider>
    </Router>
  )
}

export default App

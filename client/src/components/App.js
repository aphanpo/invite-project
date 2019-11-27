import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Invite from './Invite'
import Going from './Going'
import NotGoing from './NotGoing'


function App() {
  return (
    <Router>
      <div>

        <ul className="nav">
          <li><Link to="">Invite</Link></li>
          <li><Link to="/going">Going</Link></li>
          <li><Link to="/notgoing">Not Going</Link></li>
        </ul>
        <Route path="/" exact component={Invite} />
        <Route path="/going" component={Going} />
        <Route path="/notgoing" component={NotGoing} />

      </div>
    </Router>
  )
}

export default App
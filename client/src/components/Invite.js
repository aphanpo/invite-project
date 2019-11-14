import React from 'react'
import { useUsers } from '../hooks'
import "../styles/invite.css"
import Icon from '../lib/Icon'
import { Link } from 'react-router-dom'



const Invite = props => {
    const { users } = useUsers()

    return (
        <div className="container">
            <header className="top">
                <p>Going:</p>
                <p>Not Going:</p>
            </header>
            <div className="singleUser">
                {users.map((user, i) => (
                    <div key={`User-${i}`}>
                        <div className="pic">
                            <img className="userPicture" src={user.picture.large} />
                        </div>
                        <div className="information">
                            <div className="userName">
                                <p><b>Name:</b> {user.name.first + " " + user.name.last}</p>
                            </div>
                            <div className="userPhone">
                                <p><b>Phone:</b> {user.cell} </p>
                            </div>
                            <div className="userEmail">
                                <p><b>Email:</b> {user.email} </p>
                            </div>
                        </div>
                        <div className="confirm">
                            <button id="notGoing"><Link to="./NotGoing"><Icon icon="times"></Icon></Link></button>
                            <button id="going"><Link to="./Going"><Icon icon="check"></Icon></Link></button>
                        </div>
                    </div>
            ))}
            </div>
        </div>  
    )
}

export default Invite

import React from 'react'
import { useInvite } from '../hooks'

export default props => {
    const { notgoing } = useInvite()

    return(
        <div className="container">
            {notgoing.map((person, i) => (
                <div key={'notgoing' + person.id} className="person">
                    <p><img src={person.picture} /> </p>
                    <p>Name: {person.fname} {person.lname}</p>
                    <p>Phone: {person.phone}</p>
                    <p>Email: {person.email}</p>
                </div>
            ))}
        </div>
    )
}
import React from 'react'
import { useInvite } from '../hooks'

export default props => {
    const { going } = useInvite()

    return(
        <div className="container">
            {going.map((person, i) => (
                <div key={'going' + i} className="person">
                    <p><img src={person.picture} /> </p>
                    <p>Name: {person.fname} {person.lname}</p>
                    <p>Phone: {person.phone}</p>
                    <p>Email: {person.email}</p>
                </div>
            ))}
        </div>
    )
}
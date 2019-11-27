import React from 'react'
import { useInvite } from '../hooks'

export default props => {
    const { random, go, nogo, loading, going, notgoing } = useInvite()

    return (
        <div className="main">
            <p>Going: {going.length} Not Going: {notgoing.length}</p>
            {loading ? <p>Loading...</p>
            :
            <div className="person">
                <p><img src={random.picture} /> </p>
                <p>Name: {random.fname} {random.lname}</p>
                <p>Phone: {random.phone}</p>
                <p>Email: {random.email}</p>

                <button onClick={e => go(random)}>Go</button>
                <button onClick={e => nogo(random)}>No Go</button>
            </div>
            }
        </div>
    )
}
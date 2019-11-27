import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'


const GET_RANDOM = 'invite/GET_RANDOM'
const SET_GOING = 'invite/SET_GOING'
const SET_NOTGOING = 'invite/SET_NOTGOING'
const LOADING = 'invite/LOADING'
const FINISHED = 'invite/FINISHED'


const initialState = {
    random: {},
    going: [],
    notgoing: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_RANDOM:
            return {...state, random: action.payload}
        case SET_GOING:
            return {...state, going: action.payload}
        case SET_NOTGOING:
            return {...state, notgoing: action.payload}
        case LOADING:
            return {...state, loading:true}
        case FINISHED: 
            return {...state, loading:false}
        default:
            return state
    }
}

// function getRandom() {
//     return dispatch => {
//         dispatch({
//             type: LOADING
//         })
//         axios.get("/invite/random").then (resp => {
//             dispatch({
//                 type: GET_RANDOM,
//                 payload: resp.data
//             })
//             dispatch({
//                 type: FINISHED
//             })
//         })
//     }
// }

function getRandom() {
    return dispatch => {
       dispatch({
           type: LOADING
       })
        axios.get('https://randomuser.me/api/').then(resp => {
            const user = resp.data.results[0]
            const payload = {
                fname: user.name.first,
                lname: user.name.last,
                phone: user.phone,
                picture: user.picture.large,
                email: user.email
            }
            dispatch ({
                type: GET_RANDOM,
                payload: payload
            })
               dispatch({
                   type: FINISHED
             })
        })
    }
}
function getGoing(){
    return dispatch => {
        axios.get('/invite/going').then(resp => {
            dispatch({
                type: SET_GOING,
                payload: resp.data
            })
        })
    }
}
function getNotGoing(){
    return dispatch => {
        axios.get('/invite/notgoing').then(resp => {
            console.log(resp.data)
            dispatch({
                type: SET_NOTGOING,
                payload: resp.data
            })
        })
    }
}
function setGoing(user) {
    return dispatch => {
        axios.post('/invite/going', {user}).then (resp => {
            dispatch(getRandom())
            dispatch(getGoing())
        })
    }
}

function setNotGoing(user) {
    return dispatch => {
        axios.post('/invite/notgoing', {user}).then (resp => {
            dispatch(getRandom())
            dispatch(getNotGoing())
        })
    }
}

export const useInvite = function() {
    const going = useSelector(appState => appState.inviteState.going)
    const notgoing = useSelector(appState => appState.inviteState.notgoing)
    const random = useSelector(appState => appState.inviteState.random)
    const dispatch = useDispatch()
    const go = user => dispatch(setGoing(user))
    const nogo = user => dispatch(setNotGoing(user))
    const get = () => dispatch(getRandom())
    const loading = useSelector(appState => appState.inviteState.loading)

    useEffect(() => {
        get()
    }, [])

    return { going, notgoing, random, go, nogo, get, loading }
}
import axios from 'axios'

const initialState = {
    id: 0,
    username: '',
    picture: ''
}

const SET_USER_INFO = "SET_USER_INFO"

function reducer(state = initialState, action){
    switch(action.type){
        case SET_USER_INFO:
            return Object.assign({}, state, { 
                username: action.payload.username,
                picture: action.payload.picture,
            })
        default: return state
    }

}

export function setUserInfo(info){
    return {
        type: SET_USER_INFO,
        payload: info
    }
}
export default reducer
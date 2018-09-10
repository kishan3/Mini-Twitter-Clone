export const SET_AUTHEDUSER = 'SET_AUTHEDUSER'

export function setAuthedUser(id) {
    return {
        type: SET_AUTHEDUSER,
        id,
    }
}
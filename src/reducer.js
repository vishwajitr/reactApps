

const todos = (state = [], action) => {
    switch (action.type) {
        case 'Add_Todo':
            return {
                ...state,
                id: action.id
            }
        default:
            return state
    }
}

export default todos
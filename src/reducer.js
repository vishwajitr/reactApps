const initialState = { count: 0 };

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'Add_Num':
            console.log(action)
            return {
                ...state,
                count: action.count
            }
        case 'Sub_Num':
            console.log(action)
            return {
                ...state,
                count: action.count
            }
        default:
            return state
    }
}

export default counter
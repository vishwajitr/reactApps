
import { connect } from 'react-redux';
import { addNumber } from './action'
import App from './App'

const mapStateToProps = state => {
    return {
        todos: state.id,
    }
}

const mapDispatchToProps = dispatch => ({
    addNumber: () => {
        dispatch(addNumber());
    }
})

export default connect
    (mapStateToProps, mapDispatchToProps)
    (App);

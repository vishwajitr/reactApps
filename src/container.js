
import { connect } from 'react-redux';
import { addNumber, subNumber } from './action'
import App from './App'

const mapStateToProps = state => {
    return {
        counter: state.count,
    }
}

const mapDispatchToProps = dispatch => ({
    addNumber: () => dispatch(addNumber()),
    subNumber: () => dispatch(subNumber()),
})

export default connect
    (mapStateToProps, mapDispatchToProps)
    (App);

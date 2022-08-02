import './nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='HomeIndex'>
            <h2>React Sample Projects</h2>
            <nav>
                <div>
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div>
                    <Link to="/todo">
                        Todo App
                    </Link>
                </div>
            </nav >
        </div >
    );
}

export default Nav;
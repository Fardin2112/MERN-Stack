import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="conatiner">
            <Link to="/">
                <h1>Workout Buddy</h1>
            </Link>
        </div>
    )
}

export default Navbar;
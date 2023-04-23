import {Link} from "react-router-dom"


export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title"> Pokedex</Link>
        <ul>
            <li>
                <Link to="/about">About </Link>
            </li>
        </ul>
    </nav>

}


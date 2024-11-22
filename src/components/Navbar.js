import logo from "../images/logo.png"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <img className="nav--logo" alt="logo" src={ logo }></img>
        </nav>
    )
}
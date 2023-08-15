import "./NavBar.css"

import logo from "../../assets/images/neflix-logo.png"
import avatar from "../../assets/images/Netflix-avatar.png"

const NavBar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="netflix-logo" />
            <img className="avatar" src={avatar} alt="avatar" />
        </div>
    )
}

export default NavBar
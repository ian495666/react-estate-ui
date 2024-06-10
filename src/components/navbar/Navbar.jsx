import { useState } from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";

function Navbar(){
    const [open,setOpen] = useState(false)

    const user = true;
    return(
        <nav>
            <div className="left">
                <a href="/" className="logo" >
                    <img src="/logo.png" alt="logo" />
                    <span>EIEstate</span>
                </a>
                <a hfref="/">Home</a>
                <a hfref="/">About</a>
                <a hfref="/">Contact</a>
                <a hfref="/">Agents</a>
             </div>
            <div className="right">
                {user ? (
                    <div className="user">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <span>John Doe</span>
                        <Link to="/profile" className="profile">
                           <div className="notification">3</div> 
                           <span>Profile</span>
                        </Link>
                    </div>
                 ) : (
                 <>
                     <a hfref="/">Sign in</a>
                     <a hfref="/" className="register">
                        Sign up
                    </a>
                 </>
                )}
                <div className="menuIcon">
                    < img 
                    src="/menu.png" 
                    alt="" 
                    onClick={() => setOpen((prev) => !prev)} />
                </div>
                <div className={open ? "menu active" : "menu" }>
                    <a hfref="/">Home</a>
                    <a hfref="/">About</a>
                    <a hfref="/">Contact</a>
                    <a hfref="/">Agents</a>
                    <a hfref="/">Sign in</a>
                    <a hfref="/">Sign up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
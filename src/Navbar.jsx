import { Link } from "react-router-dom";
import './navbar.css';


export default function Navbar() {
    return (
        <>
            <ul>

                <li><Link to="/Form">Form </Link></li>
                <li><Link to="/addform">Add Form</Link></li>           
                <li><Link to="/todoagain">Todo Again</Link></li>

             
            </ul>
        </>
    )
}

import React from 'react';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div>
                    <ul className= "nav justify-content-center">
                        <li><a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a></li>
                        <li><a className="nav-item nav-link" href="#">Menu</a></li> 
                        <li><a className="nav-item nav-link" href="#">About Us</a></li>
                        <li><a className="nav-item nav-link" href="#">Contact us</a></li>
                        <li><a className="nav-item nav-link" href="#">Location</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
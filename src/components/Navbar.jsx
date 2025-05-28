import React from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

const Navbar = () => {
    const navigate = useNavigate(); // Call the hook to get the navigate function

    const handleclick = () => {
        window.open("https://github.com/forsaken-heart24/HorizonUX", "_blank")
    }

    const handleDevicesNavigation = () => {
        // Programmatically navigate to the '/devices' route
        navigate('/devices');
    }
    const handlecontrib = () => {
        navigate('/contribpage');
    }
  return (
    <div>
        <div className='container'>
            {/* Make the logo a link to the homepage */}
            <Link to="/" className='logo-link' style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='logo'>HorizonUX</div>
            </Link>
            <div className='list'>
                <ul>
                    <li onClick={handleclick} style={{cursor: 'pointer'}}>SourceCode</li>
                    {/* Use Link for internal navigation */}
                    <li onClick={handlecontrib} style={{cursor: 'pointer'}}>Contributors</li>
                    <li onClick={handleDevicesNavigation} style={{cursor: 'pointer'}}>Devices</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar

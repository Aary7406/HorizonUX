// useState import is not used, can be removed for cleanliness
import ContribPage from './components/contribpage' // Import with PascalCase
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/home' // Assuming home.jsx exports Home
import { Routes, Route, useLocation } from 'react-router-dom' // Only Routes and Route needed here
import DevicesPage from './components/DevicesPage'; // Import the new DevicesPage
import { AnimatePresence,motion,useScroll } from 'framer-motion'
import Inner from './components/layout/Inner';

function App() {
  const location = useLocation();
  return (
    <>
      {/* BrowserRouter is in main.jsx, so no need for <Router> or <BrowserRouter> here */}
      <AnimatePresence mode="wait">
        <Inner key={location.pathname}>
      
      <Routes location={location} >
        <Route path='/' element={<Home />} />
        <Route path='/contribpage' element={<ContribPage />} /> {/* Route for contributors */}
        <Route path='/devices' element={<DevicesPage />} /> {/* Route for Devices */}
        <Route path="*" element={<div><h2>404 - Page Not Found</h2><p>The page you are looking for does not exist.</p></div>} /> {/* Catch-all route */}
      </Routes>
      </Inner>
      </AnimatePresence>
    </>
  )
}

export default App

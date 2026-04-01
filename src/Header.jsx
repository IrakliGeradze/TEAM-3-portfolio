import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import './App.css'


function Header(){
    const [isVisible, setIsVisible] = useState(true)
    const lastScrollY = useRef(0)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            lastScrollY.current = currentScrollY
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <div className="header" style={{
            transition: 'transform 0.3s ease-in-out',
            transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000
        }}>
            <div className="start">
                <Link id='h1' to='/'>Team 3</Link>
            </div>
            <div className="middle">
                <Link id='a' to='/work'>Work</Link>
                <Link id='a' to='/about'>About</Link>
                <Link id='a' to='/contact'>Contact</Link>
            </div>
            <div className="end">
                <Link to='/contact'><button>Get In Touch</button></Link>
            </div>
        </div>
    )
}

export default Header